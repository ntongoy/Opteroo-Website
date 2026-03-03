import { Check, Clock, Target, Type, DollarSign, Calendar, Monitor, Image } from "lucide-react";

export const ImprovementsSection = () => {
  const improvements = [
    {
      icon: Target,
      title: "Optimise Bids",
      description: "AI-powered bid recommendations to maximise ROAS across your campaigns",
      status: "live",
    },
    {
      icon: Type,
      title: "Manage Keywords",
      description: "Add, pause, and optimise keywords based on performance data",
      status: "coming_soon",
    },
    {
      icon: DollarSign,
      title: "Adjust Budgets",
      description: "Smart budget allocation and pacing recommendations",
      status: "coming_soon",
    },
    {
      icon: Calendar,
      title: "Ad Scheduling",
      description: "Optimise when your ads run for maximum impact",
      status: "coming_soon",
    },
  ];

  const adTypes = [
    {
      icon: Monitor,
      title: "Sponsored Products",
      description: "Full optimisation support for product listing ads across RMNs",
      status: "live",
    },
    {
      icon: Image,
      title: "On-site Display",
      description: "Banner and display ad optimisation across retail media networks",
      status: "coming_soon",
    },
  ];

  return (
    <section className="section-spacing bg-white" data-testid="improvements-section">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
            Improvements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-['Manrope'] mb-4">
            What Opteroo optimises
          </h2>
          <p className="text-lg text-slate-600">
            From bid management to budget allocation — one platform for all your retail media optimisations.
          </p>
        </div>

        {/* Improvement Types */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-slate-900 mb-6 font-['Manrope']">
            Optimisation Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {improvements.map((item, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 border transition-all duration-300 ${
                  item.status === "live"
                    ? "bg-white border-blue-200 hover:border-blue-300 hover:shadow-lg"
                    : "bg-slate-50 border-slate-200"
                }`}
                data-testid={`improvement-${index}`}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {item.status === "live" ? (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium">
                      <Check className="w-3 h-3" />
                      Live
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium">
                      <Clock className="w-3 h-3" />
                      Soon
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  item.status === "live"
                    ? "bg-blue-600"
                    : "bg-slate-300"
                }`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h4 className={`font-semibold mb-2 font-['Manrope'] ${
                  item.status === "live" ? "text-slate-900" : "text-slate-600"
                }`}>
                  {item.title}
                </h4>
                <p className={`text-sm ${
                  item.status === "live" ? "text-slate-600" : "text-slate-500"
                }`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ad Types */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-6 font-['Manrope']">
            Supported Ad Types
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adTypes.map((item, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  item.status === "live"
                    ? "bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:shadow-lg"
                    : "bg-slate-50 border-slate-200"
                }`}
                data-testid={`ad-type-${index}`}
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    item.status === "live"
                      ? "bg-blue-600 shadow-lg shadow-blue-600/20"
                      : "bg-slate-300"
                  }`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className={`text-xl font-semibold font-['Manrope'] ${
                        item.status === "live" ? "text-slate-900" : "text-slate-600"
                      }`}>
                        {item.title}
                      </h4>
                      {item.status === "live" ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                          <Check className="w-3 h-3" />
                          Live
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
                          <Clock className="w-3 h-3" />
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className={`${
                      item.status === "live" ? "text-slate-600" : "text-slate-500"
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Our roadmap is shaped by Early Access partners.{" "}
            <span className="text-blue-600 font-medium">Join to influence what we build next.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
