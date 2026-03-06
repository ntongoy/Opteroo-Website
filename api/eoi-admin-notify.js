/**
 * EOI Admin Notification - Vercel Serverless Function
 *
 * Sends admin notification email when a new Expression of Interest is submitted.
 * Called by Opteroo-Website frontend after successful POST to Laravel EOI API.
 *
 * Env vars: MAIL_ADMIN_EMAIL, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD,
 *           SMTP_FROM (optional), APP_BRAND_NAME (optional)
 *
 * See Opteroo-ai docs/PROPOSAL_EOI_EMAIL_VIA_OPTEROO_WEBSITE.md
 */

const nodemailer = require('nodemailer');

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !port || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port: parseInt(port, 10),
    secure: parseInt(port, 10) === 465,
    auth: { user, pass },
  });
}

function buildEmailText(eoi) {
  const name = [eoi.first_name, eoi.last_name].filter(Boolean).join(' ').trim() || '-';
  const lines = [
    'New Expression of Interest received.',
    '',
    `Name: ${name}`,
    `Email: ${eoi.email || '-'}`,
    `Role: ${eoi.role || '-'}`,
    `Company: ${eoi.company_name || '-'}`,
    `ABN: ${eoi.company_abn || '-'}`,
    `Purpose: ${eoi.purpose || '-'}`,
  ];

  if (eoi.foundation || eoi.campaign) {
    lines.push(`Foundation: ${eoi.foundation || '-'}`, `Campaign: ${eoi.campaign || '-'}`);
  }

  const createdAt = eoi.created_at
    ? new Date(eoi.created_at).toLocaleString('en-AU', { timeZone: 'UTC' })
    : new Date().toISOString();
  lines.push('', `Submitted at: ${createdAt}`, '', 'Log in to the admin dashboard to approve or reject.');

  return lines.join('\n');
}

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      email_sent: false,
      error: 'Method not allowed',
    });
  }

  try {
    const eoi = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    if (!eoi || !eoi.email) {
      return res.status(400).json({
        success: false,
        email_sent: false,
        error: 'Missing required EOI data (email)',
      });
    }

    const adminEmail = process.env.MAIL_ADMIN_EMAIL;
    if (!adminEmail) {
      console.error('[eoi-admin-notify] MAIL_ADMIN_EMAIL not set');
      return res.status(500).json({
        success: false,
        email_sent: false,
        error: 'Admin email not configured. Set MAIL_ADMIN_EMAIL.',
      });
    }

    const transporter = createTransporter();
    if (!transporter) {
      console.error('[eoi-admin-notify] SMTP not configured');
      return res.status(500).json({
        success: false,
        email_sent: false,
        error: 'SMTP not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD.',
      });
    }

    const brandName = process.env.APP_BRAND_NAME || 'Opteroo';
    const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@opteroo.ai';

    const mailOptions = {
      from: `${brandName} <${fromEmail}>`,
      to: adminEmail.split(',').map((e) => e.trim()).filter(Boolean),
      subject: `[${brandName}] New Expression of Interest: ${eoi.email}`,
      text: buildEmailText(eoi),
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      email_sent: true,
      message: 'Admin notification sent.',
    });
  } catch (err) {
    console.error('[eoi-admin-notify] Error:', err);
    return res.status(500).json({
      success: false,
      email_sent: false,
      error: err.message || 'Failed to send admin notification',
    });
  }
};
