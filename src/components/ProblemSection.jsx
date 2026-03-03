import { AlertTriangle, Clock, LineChart, Layers } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
  {
    icon: LineChart,
    stat: "72%",
    label: "of retail media spend is driven by sales objectives",
    source: "IAB 2024"
  },
  {
    icon: Layers,
    stat: "3-11",
    label: "RMNs managed per agency — fragmentation is accelerating",
    source: "eMarketer"
  },
  {
    icon: AlertTriangle,
    stat: "44%",
    label: "rate their RMN experience as 'good' — declining YoY",
    source: "Forrester"
  },
  {
    icon: Clock,
    stat: "8+ hrs",
    label: "per week lost to manual optimization across dashboards",
    source: "Industry Survey"
  }];


  return (
    <section className="section-spacing bg-slate-50" data-testid="problem-section">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-['Manrope'] mb-4">
            Retail media is broken
          </h2>
          <p className="text-lg text-slate-600">Brands and agencies are drowning in dashboards while sales performance suffers.

          </p>
        </div>

        {/* Problem Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) =>
          <div
            key={index}
            className="stat-card bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
            data-testid={`problem-stat-${index}`}>

              <div className="feature-icon-bg mb-4">
                <problem.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2 font-['Manrope']">
                {problem.stat}
              </div>
              <p className="text-sm text-slate-600 mb-3">
                {problem.label}
              </p>
              <span className="text-xs text-slate-400">{problem.source}</span>
            </div>
          )}
        </div>

        {/* Pain Point Summary */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            You need <span className="font-semibold text-slate-700">action</span>, not another dashboard. 
            You need <span className="font-semibold text-slate-700">execution</span>, not more reports.
          </p>
        </div>
      </div>
    </section>);

};