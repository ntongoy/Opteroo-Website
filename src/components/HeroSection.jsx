import { ArrowRight, Play, Zap, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = ({ onGetEarlyAccess, onHowItWorks }) => {
  const partnerLogos = [
    { name: "BWS", url: "https://customer-assets.emergentagent.com/job_retail-optimize/artifacts/posenmfj_images%20%287%29.png" },
    { name: "Dan Murphy's", url: "https://customer-assets.emergentagent.com/job_retail-optimize/artifacts/vbwjmpqx_ae0efa6c-be1a-418e-21c3-08db9f233504.png" },
    { name: "Uber", url: "https://customer-assets.emergentagent.com/job_retail-optimize/artifacts/gtv59e1i_uber-new-logo-2018-11550112725dlrgv5nhdy.png" },
    { name: "DoorDash", url: "https://customer-assets.emergentagent.com/job_retail-optimize/artifacts/lmvw7nht_DoorDash-Logo.png" },
    { name: "Coles", url: "https://customer-assets.emergentagent.com/job_retail-optimize/artifacts/yycfmeas_png-clipart-coles-supermarkets-logo-retail-business-text-trademark.png" },
    { name: "Criteo", url: "https://customer-assets.emergentagent.com/job_retail-optimize/artifacts/wcy88pej_png-clipart-criteo-new-logo-tech-companies-thumbnail.png" },
    { name: "Epsilon", url: "https://customer-assets.emergentagent.com/job_retail-optimize/artifacts/pgzm1sfb_Epsilon-Logo.png" },
  ];

  return (
    <section 
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 hero-gradient overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100/20 rounded-full blur-3xl" />
      
      <div className="container-main relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 badge-early-access mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse-soft" />
              Early Access for agencies & performance teams
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6 font-['Manrope']">
              The smarter way to manage{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                retail media
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Aggregate RMN data into a prioritised Action Inbox. See what matters, decide fast, push changes back with one click.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                onClick={onGetEarlyAccess}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all group"
                data-testid="hero-get-early-access-btn"
              >
                Get Early Access
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={onHowItWorks}
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base border-slate-200 hover:bg-slate-50 group"
                data-testid="hero-how-it-works-btn"
              >
                <Play className="w-4 h-4 mr-2 text-blue-600" />
                See how it works
              </Button>
            </div>
            
            {/* Trust logos */}
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">
                Works with
              </p>
              <div className="flex items-center gap-6">
                {partnerLogos.map((partner) => (
                  <img
                    key={partner.name}
                    src={partner.url}
                    alt={partner.name}
                    className="h-6 md:h-8 partner-logo"
                    data-testid={`partner-logo-${partner.name.toLowerCase()}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Right: Action Inbox Visual */}
          <div className="animate-fade-in-up stagger-2 action-inbox-mock" data-testid="action-inbox-mock">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 font-['Manrope']">Action Inbox</h3>
                      <p className="text-xs text-slate-500">3 prioritised actions</p>
                    </div>
                  </div>
                  <span className="badge-early-access">Live</span>
                </div>
                
                {/* Action Cards */}
                <div className="space-y-3">
                  {/* Action 1 - High Priority */}
                  <div className="action-card bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-blue-200 cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-xs font-medium text-red-600">High Priority</span>
                      </div>
                      <span className="text-xs text-slate-500">Criteo</span>
                    </div>
                    <p className="text-sm font-medium text-slate-900 mb-2">
                      Reduce bid on "wireless headphones" -15%
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                        <span>Est. +$420 ROAS</span>
                      </div>
                      <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                        Apply →
                      </button>
                    </div>
                  </div>
                  
                  {/* Action 2 - Medium Priority */}
                  <div className="action-card bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-blue-200 cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <span className="text-xs font-medium text-amber-600">Medium Priority</span>
                      </div>
                      <span className="text-xs text-slate-500">DoorDash</span>
                    </div>
                    <p className="text-sm font-medium text-slate-900 mb-2">
                      Increase budget on "kitchen appliances" +20%
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                        <span>Est. +$180 revenue</span>
                      </div>
                      <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                        Apply →
                      </button>
                    </div>
                  </div>
                  
                  {/* Action 3 - Completed */}
                  <div className="action-card bg-green-50/50 rounded-xl p-4 border border-green-100">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          Paused underperforming ad set
                        </p>
                        <p className="text-xs text-green-600">Applied 2 min ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decorative cards */}
              <div className="absolute -right-4 -bottom-4 w-full h-full bg-slate-100 rounded-2xl -z-10" />
              <div className="absolute -right-8 -bottom-8 w-full h-full bg-slate-50 rounded-2xl -z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
