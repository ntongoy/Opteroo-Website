import { Check, Sparkles, Users, Calendar, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CharterAccessSection = ({ onApplyCharter }) => {
  const benefits = [
    "12 months full platform access",
    "Direct product input & feedback",
    "Priority support & onboarding",
    "Discount in year two",
    "Shape the roadmap with us",
  ];

  return (
    <section 
      id="charter-access" 
      className="section-spacing bg-slate-900"
      data-testid="charter-access-section"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-white animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Limited to 20 partners
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-['Manrope'] mb-6">
              Charter Access Program
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Be one of the first 20 partners to shape Opteroo. Get hands-on onboarding, 
              direct access to the team, and influence what we build next.
            </p>

            {/* Benefits list */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-200">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Hands-on onboarding</span>
              </div>
              <div className="flex items-center gap-2">
                <HeadphonesIcon className="w-4 h-4" />
                <span>Direct Slack access</span>
              </div>
            </div>
          </div>

          {/* Right: Pricing Card */}
          <div className="animate-fade-in-up stagger-2">
            <div className="pricing-highlight bg-white rounded-3xl p-8 shadow-2xl">
              {/* Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="badge-limited">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Limited spots
                </span>
                <span className="text-sm text-slate-500">One-time payment</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-slate-900 font-['Manrope']">$999</span>
                  <span className="text-slate-500">AUD</span>
                </div>
                <p className="text-sm text-slate-600 mt-2">
                  12 months access • No recurring fees
                </p>
              </div>

              {/* What's included */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  Full platform access for 12 months
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  Priority onboarding & support
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  Direct product influence
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  Early access to new features
                </div>
              </div>

              {/* CTA */}
              <Button
                onClick={onApplyCharter}
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6 text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all"
                data-testid="apply-charter-btn"
              >
                Apply for Charter Access
              </Button>

              {/* Guarantee */}
              <p className="text-xs text-slate-500 text-center mt-4">
                30-day money-back guarantee if it's not right for you
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
