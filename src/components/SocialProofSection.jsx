import { Shield, Users, Award } from "lucide-react";

export const SocialProofSection = () => {
  return (
    <section className="section-spacing bg-white" data-testid="social-proof-section">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Built by operators */}
          <div className="animate-fade-in-up">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-['Manrope'] mb-6">
              Built by retail media operators
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We've spent years in the trenches managing retail media campaigns across multiple RMNs. 
              Opteroo is the tool we wished existed when we were drowning in dashboards and manual workflows.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 font-['Manrope']">Practitioner-first design</h4>
                  <p className="text-sm text-slate-600">Every feature is built for how you actually work</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 font-['Manrope']">Early Access partners shape the product</h4>
                  <p className="text-sm text-slate-600">Direct access to the team, your feedback drives the roadmap</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Trust & Security */}
          <div className="animate-fade-in-up stagger-2">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 font-['Manrope']">Security & Permissions</h3>
                  <p className="text-sm text-slate-500">Your data, your control</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm font-medium text-slate-900">Read-only by default</span>
                  </div>
                  <p className="text-xs text-slate-500 pl-5">
                    Opteroo connects to your RMNs in read-only mode. Push-back permissions are opt-in.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm font-medium text-slate-900">Full audit trail</span>
                  </div>
                  <p className="text-xs text-slate-500 pl-5">
                    Every action is logged. Know who did what, when, and why.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm font-medium text-slate-900">Approval workflows</span>
                  </div>
                  <p className="text-xs text-slate-500 pl-5">
                    Set up review gates before changes go live. Stay in control.
                  </p>
                </div>
              </div>
            </div>

            {/* Early Partners Placeholder */}
            <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100">
              <p className="text-sm text-blue-700 text-center">
                <span className="font-semibold">Early Access Partners:</span> Join 10+ agencies already using Opteroo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
