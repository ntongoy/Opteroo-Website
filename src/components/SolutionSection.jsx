import { Database, ListOrdered, Brain, Send, ArrowRight } from "lucide-react";

export const SolutionSection = () => {
  const capabilities = [
    {
      icon: Database,
      title: "Aggregates RMN data",
      description: "Pull from Criteo, CitrusAd, DoorDash & more into one view",
    },
    {
      icon: ListOrdered,
      title: "Prioritises actions",
      description: "Surface what matters most based on impact & urgency",
    },
    {
      icon: Brain,
      title: "Challenges with AI vs rules",
      description: "Smart recommendations you can trust and override",
    },
    {
      icon: Send,
      title: "Pushes changes back",
      description: "One-click apply with full approval workflow",
    },
  ];

  return (
    <section className="section-spacing bg-white" data-testid="solution-section">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Solution Overview */}
          <div className="animate-fade-in-up">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-['Manrope'] mb-6">
              Execution-first retail media optimisation
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Opteroo is an execution-first retail media optimisation layer that aggregates RMN data 
              into a prioritised <span className="font-semibold text-slate-800">Action Inbox</span> and 
              enables <span className="font-semibold text-slate-800">one-click push-back</span>.
            </p>
            
            {/* Key differentiator */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1 font-['Manrope']">
                    Not another reporting tool
                  </h4>
                  <p className="text-sm text-slate-600">
                    Opteroo focuses on actions and execution, not charts and exports. 
                    Less time analysing, more time driving results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`capability-${index}`}
              >
                <div className="feature-icon-bg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <cap.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 font-['Manrope']">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
