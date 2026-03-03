import { Download, ListChecks, Sparkles, Rocket, ChevronRight } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Download,
      number: "01",
      title: "Collect",
      description: "Aggregate data from all your RMNs into one unified view",
    },
    {
      icon: ListChecks,
      number: "02",
      title: "Decide",
      description: "Review prioritised actions in your Action Inbox",
    },
    {
      icon: Sparkles,
      number: "03",
      title: "Challenge",
      description: "AI-powered recommendations you can trust or override",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Execute",
      description: "Push-back changes to RMNs with one-click approval",
    },
  ];

  return (
    <section 
      id="how-it-works" 
      className="section-spacing bg-slate-50"
      data-testid="how-it-works-section"
    >
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-['Manrope'] mb-4">
            From chaos to clarity in four steps
          </h2>
          <p className="text-lg text-slate-600">
            The Opteroo workflow that transforms how you manage retail media.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 -translate-y-1/2" style={{ top: '80px' }} />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
                data-testid={`step-${index}`}
              >
                <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-blue-100 transition-all duration-300 relative z-10">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {step.number}
                    </span>
                    {index < steps.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-slate-300 hidden md:block" />
                    )}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-600/20">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-['Manrope']">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Push-back callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 border border-slate-200 shadow-sm">
            <Rocket className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">
              <span className="text-blue-600 font-semibold">Push-back</span> is what makes Opteroo different — execute, don't just observe.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
