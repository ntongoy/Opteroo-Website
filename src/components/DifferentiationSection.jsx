import { Check, X, Minus } from "lucide-react";

export const DifferentiationSection = () => {
  const comparisons = [
    {
      feature: "Multi-RMN aggregation",
      native: false,
      enterprise: true,
      opteroo: true,
    },
    {
      feature: "Prioritised actions",
      native: false,
      enterprise: "partial",
      opteroo: true,
    },
    {
      feature: "One-click push-back",
      native: false,
      enterprise: true,
      opteroo: true,
    },
    {
      feature: "SME-friendly pricing",
      native: "free",
      enterprise: false,
      opteroo: true,
    },
    {
      feature: "Quick onboarding (<1 day)",
      native: true,
      enterprise: false,
      opteroo: true,
    },
    {
      feature: "No contract lock-in",
      native: true,
      enterprise: false,
      opteroo: true,
    },
  ];

  const renderStatus = (value) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-green-600" />;
    } else if (value === false) {
      return <X className="w-5 h-5 text-red-400" />;
    } else if (value === "partial") {
      return <Minus className="w-5 h-5 text-amber-500" />;
    } else if (value === "free") {
      return <span className="text-xs text-slate-500">Free (limited)</span>;
    }
    return null;
  };

  return (
    <section className="section-spacing bg-slate-50" data-testid="differentiation-section">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
            Why Opteroo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-['Manrope'] mb-4">
            Not another dashboard. Not enterprise bloat.
          </h2>
          <p className="text-lg text-slate-600">
            See how Opteroo compares to the alternatives.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 p-6 border-b border-slate-100 bg-slate-50">
            <div className="font-semibold text-slate-900 font-['Manrope']">Feature</div>
            <div className="text-center">
              <div className="font-semibold text-slate-700">Native RMN</div>
              <div className="text-xs text-slate-500">Dashboards</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-700">Enterprise</div>
              <div className="text-xs text-slate-500">Platforms</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-blue-600 font-['Manrope']">Opteroo</div>
              <div className="text-xs text-slate-500">Action-first</div>
            </div>
          </div>

          {/* Table Body */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 gap-4 p-6 items-center ${
                index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
              } hover:bg-blue-50/30 transition-colors`}
              data-testid={`comparison-row-${index}`}
            >
              <div className="text-sm font-medium text-slate-700">
                {row.feature}
              </div>
              <div className="flex justify-center">
                {renderStatus(row.native)}
              </div>
              <div className="flex justify-center">
                {renderStatus(row.enterprise)}
              </div>
              <div className="flex justify-center comparison-highlight rounded-lg py-1">
                {renderStatus(row.opteroo)}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
              <X className="w-5 h-5 text-slate-400" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-2 font-['Manrope']">Native RMN Dashboards</h4>
            <p className="text-sm text-slate-600">
              Fragmented, manual, no cross-network view. You're stuck switching tabs.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
              <Minus className="w-5 h-5 text-amber-500" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-2 font-['Manrope']">Enterprise Platforms</h4>
            <p className="text-sm text-slate-600">
              Expensive, heavy setup, overkill for SMEs. 6-month contracts, complex onboarding.
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
              <Check className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-semibold text-slate-900 mb-2 font-['Manrope']">Opteroo</h4>
            <p className="text-sm text-slate-700">
              Action-first, execution-first, SME-friendly. Get started in minutes, pay as you grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
