import { Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-12" data-testid="footer">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_retail-optimize/artifacts/8fdb1yyv_F17B62C3-34D3-48E7-8018-A2BF35830A05%202.PNG" 
                  alt="Opteroo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-lg text-white tracking-tight font-['Manrope']">
                Opteroo
              </span>
            </a>
            <p className="text-sm text-slate-400 max-w-xs mb-4">
              The smarter way to manage retail media. Execution-first optimisation for agencies and performance teams.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Built by retail media operators
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-['Manrope']">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#charter-access" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Charter Access
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-['Manrope']">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Opteroo. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="mailto:hello@opteroo.com" 
              className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              data-testid="footer-email-link"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              data-testid="footer-linkedin-link"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
