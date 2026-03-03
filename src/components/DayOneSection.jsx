import { Check, Monitor, Target, MousePointer, Bell } from "lucide-react";

export const DayOneSection = () => {
  const capabilities = [
    {
      icon: Monitor,
      title: "Multi-retailer dashboard",
      description: "Unified view across Criteo and more (CitrusAd, DoorDash coming soon)",
      status: "live",
    },
    {
      icon: Target,
      title: "Prioritised bid actions",
      description: "AI-powered recommendations ranked by potential impact",
      status: "live",
    },
    {
      icon: MousePointer,
      title: "One-click apply",
      description: "Execute changes instantly with full audit trail",
      status: "live",
    },
    {
      icon: Bell,
      title: "Performance alerts",
      description: "Get notified when metrics shift beyond your thresholds",
      status: "live",
    },
  ];

  return (
    <section className="section-spacing bg-white" data-testid="day-one-section">
      <div className="container-main">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
            Day-One Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-['Manrope'] mb-4">
            What you get on day one
          </h2>
          <p className="text-lg text-slate-600">
            No "beta fear" here. These features are live and ready for your campaigns.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="group flex gap-5 p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-100 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`day-one-capability-${index}`}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <cap.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-slate-900 font-['Manrope']">
                    {cap.title}
                  </h3>
                  {cap.status === "live" && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-medium">
                      <Check className="w-3 h-3" />
                      Live
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-100">
          <p className="text-sm text-slate-500 text-center">
            Additional RMN integrations and advanced push-back features are on our roadmap. 
            Early Access partners help shape what we build next.
          </p>
        </div>
      </div>
    </section>
  );
};
