import { useState, useMemo } from "react";
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  ChevronDown,
  ChevronUp,
  Info,
  Calendar
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const CALENDAR_URL = "https://calendar.app.google/o6GAK7fuKVvLW7PU9";

// Configuration defaults
const CONFIG = {
  currency: "AUD",
  weeksPerMonth: 4.33,
  hourlyRate: 75, // Fixed assumption
  scenarios: {
    conservative: {
      label: "Conservative",
      timeReduction: 0.20,
      performanceUplift: 0.15,
    },
    base: {
      label: "Base",
      timeReduction: 0.35,
      performanceUplift: 0.25,
    },
    aggressive: {
      label: "Aggressive",
      timeReduction: 0.50,
      performanceUplift: 0.35,
    },
  },
  pricing: {
    charterAccess: {
      oneTime: 999,
      months: 12,
    },
    standard: {
      monthly: 299,
    },
  },
};

export const CalculatorSection = ({ onGetEarlyAccess }) => {
  // Input states
  const [monthlySpend, setMonthlySpend] = useState(10000);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState(10);
  const [productMargin, setProductMargin] = useState(30);
  
  // UI states
  const [scenario, setScenario] = useState("base");
  const [viewMode, setViewMode] = useState("monthly");
  const [pricingMode, setPricingMode] = useState("charter");
  const [showAssumptions, setShowAssumptions] = useState(false);
  
  // Get current scenario config
  const currentScenario = CONFIG.scenarios[scenario];
  
  // Calculations
  const calculations = useMemo(() => {
    const totalMonthlyHours = manualHoursPerWeek * CONFIG.weeksPerMonth;
    
    // Operational Savings
    const hoursSavedPerMonth = totalMonthlyHours * currentScenario.timeReduction;
    const labourSavingsPerMonth = hoursSavedPerMonth * CONFIG.hourlyRate;
    
    // Incremental Uplift (Efficiency gain on spend)
    const incrementalValue = monthlySpend * currentScenario.performanceUplift;
    const incrementalProfit = incrementalValue * (productMargin / 100);
    
    // Pricing
    let opterooMonthlyFee;
    if (pricingMode === "charter") {
      opterooMonthlyFee = CONFIG.pricing.charterAccess.oneTime / CONFIG.pricing.charterAccess.months;
    } else {
      opterooMonthlyFee = CONFIG.pricing.standard.monthly;
    }
    
    // Summary Metrics
    const totalBenefitPerMonth = labourSavingsPerMonth + incrementalProfit;
    const netBenefitPerMonth = Math.max(0, totalBenefitPerMonth - opterooMonthlyFee);
    const roiMultiple = opterooMonthlyFee > 0 ? netBenefitPerMonth / opterooMonthlyFee : 0;
    
    // Payback period
    let paybackMonths;
    if (pricingMode === "charter") {
      paybackMonths = totalBenefitPerMonth > 0 ? CONFIG.pricing.charterAccess.oneTime / totalBenefitPerMonth : Infinity;
    } else {
      paybackMonths = totalBenefitPerMonth > opterooMonthlyFee ? 1 : Infinity;
    }
    
    return {
      totalMonthlyHours,
      hoursSavedPerMonth,
      labourSavingsPerMonth,
      incrementalValue,
      incrementalProfit,
      totalBenefitPerMonth,
      netBenefitPerMonth,
      roiMultiple,
      paybackMonths,
      opterooMonthlyFee,
    };
  }, [monthlySpend, manualHoursPerWeek, productMargin, scenario, pricingMode]);
  
  // Format helpers
  const formatCurrency = (value, decimals = 0) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: CONFIG.currency,
      maximumFractionDigits: decimals,
    }).format(value);
  };
  
  const formatNumber = (value, decimals = 1) => {
    return value.toFixed(decimals);
  };
  
  // Get display value based on view mode
  const getDisplayValue = (monthlyValue) => {
    return viewMode === "annual" ? monthlyValue * 12 : monthlyValue;
  };
  
  const periodLabel = viewMode === "annual" ? "year" : "month";

  return (
    <TooltipProvider>
      <section 
        className="section-spacing bg-gradient-to-b from-blue-50 to-white" 
        data-testid="calculator-section"
        id="roi-calculator"
      >
        <div className="container-main">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
              ROI Calculator
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-['Manrope'] mb-4">
              Is Opteroo worth it for you?
            </h2>
            <p className="text-lg text-slate-600">
              Calculate your operational savings and incremental profit potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Inputs */}
            <div className="lg:col-span-5 space-y-6">
              {/* Monthly Spend */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  <Label className="font-semibold text-slate-900">Monthly Retail Media Spend</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 text-slate-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">Total monthly spend across all retail media networks you manage.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>$0</span>
                    <span>$35k</span>
                  </div>
                  <Slider
                    value={[monthlySpend]}
                    onValueChange={(v) => setMonthlySpend(v[0])}
                    max={35000}
                    min={0}
                    step={500}
                    data-testid="spend-slider"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-slate-900">{formatCurrency(monthlySpend)}</span>
                    <span className="text-slate-500">/month</span>
                  </div>
                </div>
              </div>

              {/* Manual Hours */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <Label className="font-semibold text-slate-900">Weekly Manual Work</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 text-slate-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">Hours spent per week on manual tasks like bidding, reporting, and monitoring dashboards.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>0h</span>
                    <span>38h</span>
                  </div>
                  <Slider
                    value={[manualHoursPerWeek]}
                    onValueChange={(v) => setManualHoursPerWeek(v[0])}
                    max={38}
                    min={0}
                    step={1}
                    data-testid="hours-slider"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-slate-900">{manualHoursPerWeek}h</span>
                    <span className="text-slate-500">/week</span>
                  </div>
                </div>
              </div>

              {/* Product Margin */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <Label className="font-semibold text-slate-900">Average Product Margin %</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 text-slate-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">Average profit margin on products sold via retail media (e.g., 30% for FMCG, 50% for electronics accessories).</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>5%</span>
                    <span>70%</span>
                  </div>
                  <Slider
                    value={[productMargin]}
                    onValueChange={(v) => setProductMargin(v[0])}
                    max={70}
                    min={5}
                    step={1}
                    data-testid="margin-slider"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-slate-900">{productMargin}%</span>
                    <span className="text-slate-500 text-sm">(e.g., 30% for FMCG)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Results */}
            <div className="lg:col-span-7 space-y-6">
              {/* Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Scenario Toggle */}
                <div className="flex items-center gap-1 bg-white rounded-lg border border-slate-200 p-1">
                  {Object.entries(CONFIG.scenarios).map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => setScenario(key)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        scenario === key
                          ? "bg-blue-600 text-white shadow-sm"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                      data-testid={`scenario-${key}`}
                    >
                      {val.label}
                    </button>
                  ))}
                </div>
                
                {/* View Toggle */}
                <div className="flex items-center gap-1 bg-white rounded-lg border border-slate-200 p-1">
                  <button
                    onClick={() => setViewMode("monthly")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      viewMode === "monthly"
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setViewMode("annual")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      viewMode === "annual"
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    Annual
                  </button>
                </div>
              </div>

              {/* Hero Results Card */}
              <div className="bg-white rounded-2xl border-2 border-blue-100 shadow-xl overflow-hidden">
                {/* Net Benefit Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-white">
                  <p className="text-blue-100 text-sm font-medium mb-1">Net Benefit / {periodLabel}</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-bold font-['Manrope']">
                      {formatCurrency(getDisplayValue(calculations.netBenefitPerMonth))}
                    </span>
                  </div>
                </div>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100">
                  <div className="px-6 py-5 text-center">
                    <p className="text-sm text-slate-500 mb-1">ROI Multiple</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {formatNumber(calculations.roiMultiple, 1)}x
                    </p>
                  </div>
                  <div className="px-6 py-5 text-center">
                    <p className="text-sm text-slate-500 mb-1">Payback</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {calculations.paybackMonths === Infinity 
                        ? "N/A" 
                        : `${formatNumber(calculations.paybackMonths, 1)} mo`}
                    </p>
                  </div>
                  <div className="px-6 py-5 text-center">
                    <p className="text-sm text-slate-500 mb-1">Hours Saved</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {formatNumber(getDisplayValue(calculations.hoursSavedPerMonth), 0)}h
                    </p>
                  </div>
                </div>
                
                {/* Breakdown */}
                <div className="p-6 space-y-4">
                  {/* Operational Savings */}
                  <div className="bg-slate-50 rounded-xl p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-slate-900">Operational Savings</span>
                      </div>
                      <span className="text-xl font-bold text-green-600">
                        {formatCurrency(getDisplayValue(calculations.labourSavingsPerMonth))}
                      </span>
                    </div>
                  </div>
                  
                  {/* Incremental Uplift */}
                  <div className="bg-slate-50 rounded-xl p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-slate-900">Incremental Uplift</span>
                      </div>
                      <span className="text-xl font-bold text-green-600">
                        {formatCurrency(getDisplayValue(calculations.incrementalProfit))}
                      </span>
                    </div>
                  </div>
                  
                  {/* Total vs Cost */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div>
                      <p className="text-sm text-slate-500">Total Benefit</p>
                      <p className="text-lg font-bold text-slate-900">
                        {formatCurrency(getDisplayValue(calculations.totalBenefitPerMonth))}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl text-slate-300">−</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500">Opteroo Cost</p>
                      <p className="text-lg font-bold text-slate-900">
                        {formatCurrency(getDisplayValue(calculations.opterooMonthlyFee))}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Pricing Mode */}
                <div className="px-6 pb-4">
                  <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-1">
                    <button
                      onClick={() => setPricingMode("charter")}
                      className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        pricingMode === "charter"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500"
                      }`}
                    >
                      Charter Access ($999 AUD/yr)
                    </button>
                    <button
                      onClick={() => setPricingMode("standard")}
                      className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        pricingMode === "standard"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500"
                      }`}
                    >
                      Standard ($299 AUD/mo)
                    </button>
                  </div>
                </div>
                
                {/* CTAs */}
                <div className="px-6 pb-6 space-y-3">
                  <Button
                    onClick={onGetEarlyAccess}
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6 text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all group"
                    data-testid="calculator-cta-btn"
                  >
                    Get Early Access
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <a
                    href={CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center rounded-full py-6 text-base border border-slate-200 hover:bg-slate-50 font-medium"
                    data-testid="calculator-walkthrough-btn"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book a Walkthrough
                  </a>
                </div>
                
                {/* Confidence Label */}
                <div className="px-6 pb-6">
                  <div className="bg-amber-50 border border-amber-100 rounded-lg p-3">
                    <p className="text-xs text-amber-800 text-center">
                      <span className="font-semibold">{currentScenario.label} estimate</span> — 
                      Results based on inputs and industry benchmarks. Validate via Early Access.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Assumptions Collapsible */}
              <Collapsible open={showAssumptions} onOpenChange={setShowAssumptions}>
                <CollapsibleTrigger className="flex items-center justify-between w-full bg-white rounded-xl p-4 border border-slate-200 hover:bg-slate-50 transition-colors">
                  <span className="font-medium text-slate-700">View Assumptions & Methodology</span>
                  {showAssumptions ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-2 bg-white rounded-xl p-6 border border-slate-200 space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Scenario Assumptions</p>
                      <table className="w-full text-slate-600">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Scenario</th>
                            <th className="text-right py-2">Time Reduction</th>
                            <th className="text-right py-2">Efficiency Uplift</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(CONFIG.scenarios).map(([key, val]) => (
                            <tr key={key} className={scenario === key ? "bg-blue-50" : ""}>
                              <td className="py-2">{val.label}</td>
                              <td className="text-right">{val.timeReduction * 100}%</td>
                              <td className="text-right">{val.performanceUplift * 100}%</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Fixed Assumptions</p>
                      <ul className="list-disc list-inside text-slate-600 space-y-1">
                        <li>Hourly labour cost: <strong>${CONFIG.hourlyRate}/hour</strong></li>
                        <li>Weeks per month: {CONFIG.weeksPerMonth}</li>
                        <li>Charter Access pro-rated over 12 months</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Calculation Methods</p>
                      <ul className="list-disc list-inside text-slate-600 space-y-1">
                        <li>Operational Savings = Hours saved × $75/hour</li>
                        <li>Incremental Uplift = Spend × Efficiency uplift % × Product margin %</li>
                        <li>Net Benefit = Total Benefit − Opteroo cost</li>
                      </ul>
                    </div>
                    <p className="text-slate-500 italic">
                      Estimates only. Actual results depend on your specific setup and retail media mix.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};
