import React, { useState, useEffect, useRef } from "react";
import AdaptiveIcon from "./AdaptiveIcon";
import { VERSION_HISTORY, REVIEWS_DISTRIBUTION } from "../data";

interface ProductDetailProps {
  modelId?: string;
  onNavigate: (page: string) => void;
}

export default function ProductDetailView({ modelId = "nexus-7", onNavigate }: ProductDetailProps) {
  const [promptInput, setPromptInput] = useState(
    "Analyze market trends for sustainable apparel in APAC region."
  );
  
  // Terminal logs state
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "// Initializing Nexus-7 Neural Engine...",
    "> Loading dataset: retail_q4_global.parquet",
    "> Model ready. Awaiting prompt..."
  ]);
  const [isRunning, setIsRunning] = useState(false);
  const [showPurchaseDialog, setShowPurchaseDialog] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  
  // Custom interactive results counter
  const [licensesSold, setLicensesSold] = useState(3);

  const logsEndRef = useRef<HTMLDivElement>(null);

  // Dynamic licensing ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setLicensesSold((prev) => prev + (Math.random() > 0.7 ? 1 : 0));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Sticky Buy Bar scroll controller
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 420) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CLI Playground Simulator Execution
  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    
    // Add prompt user log first
    setTerminalLogs((prev) => [
      ...prev,
      `user@nexus:~$ ${promptInput}`,
      "> Initiated sales forecasting simulation..."
    ]);

    const lines = [
      "> Analyzing market dynamics and regional datasets...",
      "> Processing 14.2M vectorized apparel trend embeddings...",
      "> Cross-referencing APAC trade variables & supply lines...",
      "> Correlation found: Sustainable demand indicates +12.4% sales delta in Q4.",
      "> Recommended action: Double-down on direct-to-consumer (DTC) channels.",
      ">> Forecast simulation complete. Predictive accuracy rating: 99.4%"
    ];

    let currentLineIndex = 0;
    
    const printNextLine = () => {
      if (currentLineIndex < lines.length) {
        setTerminalLogs((prev) => [...prev, lines[currentLineIndex]]);
        currentLineIndex++;
        setTimeout(printNextLine, 1200);
      } else {
        setIsRunning(false);
      }
    };

    setTimeout(printNextLine, 1000);
  };

  // Scroll terminal logs to bottom automatic
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalLogs]);

  return (
    <div className="space-y-12 pb-20 relative">
      {/* Breadcrumb Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[#434939] text-[11px] font-bold uppercase tracking-wider mb-3">
            <span>Marketplace</span>
            <AdaptiveIcon name="chevron_right" size={10} className="text-[#434939]/40" />
            <span>Autonomous Agents</span>
            <AdaptiveIcon name="chevron_right" size={10} className="text-[#434939]/40" />
            <span className="text-[#406900]">Nexus-7 Sales Optimizer</span>
          </div>

          <h1 className="font-sans font-black text-[#131b2e] text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none mb-2">
            Nexus-7 Sales Optimizer
          </h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-[#adedd3] px-2.5 py-1 rounded text-[#306d58] font-black text-xs">
              <AdaptiveIcon name="star" size={12} className="fill-current" />
              <span>4.9 (1.2k Reviews)</span>
            </div>
            <span className="text-[#434939]/70 text-xs font-semibold">By Quantum Dynamics • Updated 2 days ago</span>
          </div>
        </div>

        <div className="flex gap-3 shrink-0">
          <button className="flex items-center gap-2 border border-[#c3c9b4] hover:bg-[#f2f3ff] px-5 py-2.5 rounded-xl text-xs font-bold text-[#131b2e] transition-all cursor-pointer">
            <AdaptiveIcon name="share" size={16} />
            <span>Share</span>
          </button>
          <button className="flex items-center gap-2 border border-[#c3c9b4] hover:bg-[#f2f3ff] px-5 py-2.5 rounded-xl text-xs font-bold text-[#131b2e] transition-all cursor-pointer">
            <AdaptiveIcon name="heart" size={16} />
            <span>Wishlist</span>
          </button>
        </div>
      </div>

      {/* Main Grid Details column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Play Area: Left Column */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Interactive Live Playground terminal card */}
          <section className="bg-white border border-[#c3c9b4]/30 rounded-2xl overflow-hidden shadow-md">
            <div className="px-6 py-4 border-b border-[#c3c9b4]/20 flex items-center justify-between bg-[#f2f3ff]/50">
              <div className="flex items-center gap-2">
                <AdaptiveIcon name="terminal" className="text-[#406900]" size={18} />
                <span className="font-bold text-sm text-[#131b2e] font-sans">Live Playground</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></span>
                <span className="text-[10px] font-bold text-[#434939]/80 uppercase tracking-widest">
                  Real-time Instance
                </span>
              </div>
            </div>

            {/* Simulated interactive CLI */}
            <div className="p-6">
              <div className="bg-[#0F172A] rounded-xl p-6 min-h-[320px] max-h-[400px] overflow-y-auto flex flex-col font-mono text-xs text-[#10B981] border border-slate-800 shadow-inner custom-scrollbar relative">
                {/* Simulated CLI toolbar window indicators */}
                <div className="absolute top-4 left-4 flex gap-1.5 opacity-60">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                </div>
                <span className="absolute top-3.5 right-4 text-[9px] font-bold text-[#F1F5F9]/30 uppercase tracking-widest leading-none">
                  nexus_cli_v2.0.4
                </span>

                <div className="mt-6 flex-1 space-y-2 select-text">
                  {terminalLogs.map((log, i) => (
                    <div
                      key={i}
                      className={`${
                        log.startsWith("user@nexus")
                          ? "text-[#fff] font-bold border-b border-white/5 pb-1 mt-3"
                          : log.startsWith(">>")
                          ? "text-[#81B441] font-bold"
                          : "text-[#10B981]"
                      }`}
                    >
                      {log}
                    </div>
                  ))}
                  {isRunning && (
                    <div className="text-white animate-pulse flex items-center gap-1.5 mt-2">
                      <span className="w-1.5 h-3 bg-white block"></span>
                      <span>Processing pipeline nodes...</span>
                    </div>
                  )}
                  <div ref={logsEndRef} />
                </div>
              </div>

              {/* TextInput sandbox form */}
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  placeholder="Enter a custom sales simulation prompt or variables..."
                  disabled={isRunning}
                  className="flex-1 bg-[#f2f3ff] text-xs font-semibold text-[#131b2e] px-4 py-3 border border-[#c3c9b4]/20 focus:ring-2 focus:ring-[#81b441]/20 rounded-xl outline-none"
                />

                <button
                  onClick={runSimulation}
                  disabled={isRunning || !promptInput.trim()}
                  className="bg-[#064E3B] hover:bg-[#03291f] disabled:opacity-50 text-white font-bold text-xs px-6 py-3 rounded-xl flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer select-none shrink-0"
                >
                  <AdaptiveIcon name="zap" size={14} />
                  <span>{isRunning ? "Running..." : "Run Simulation"}</span>
                </button>
              </div>
            </div>
          </section>

          {/* Technical Specs Dashboard metrics */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#c3c9b4]/30 shadow-sm flex flex-col gap-2">
              <span className="text-xs font-bold text-[#434939] uppercase tracking-wider">Inference Speed</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-[#406900]">124</span>
                <span className="text-sm font-semibold text-[#434939]">ms</span>
              </div>
              <div className="w-full h-1 bg-[#f2f3ff] rounded-full overflow-hidden">
                <div className="h-full bg-[#81b441] w-[85%] rounded-full"></div>
              </div>
              <span className="text-[10px] font-bold text-[#10B981]">98th percentile performance</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#c3c9b4]/30 shadow-sm flex flex-col gap-2">
              <span className="text-xs font-bold text-[#434939] uppercase tracking-wider">Reasoning Accuracy</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-[#406900]">99.4</span>
                <span className="text-sm font-semibold text-[#434939]">%</span>
              </div>
              <div className="w-full h-1 bg-[#f2f3ff] rounded-full overflow-hidden">
                <div className="h-full bg-[#81b441] w-[99%] rounded-full"></div>
              </div>
              <span className="text-[10px] font-bold text-[#10B981]">Human-benchmarked 1.4x higher</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#c3c9b4]/30 shadow-sm flex flex-col gap-2">
              <span className="text-xs font-bold text-[#434939] uppercase tracking-wider">Throughput</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-[#406900]">2.4K</span>
                <span className="text-sm font-semibold text-[#434939]">tok/s</span>
              </div>
              <div className="w-full h-1 bg-[#f2f3ff] rounded-full overflow-hidden">
                <div className="h-full bg-[#81b441] w-[70%] rounded-full"></div>
              </div>
              <span className="text-[10px] font-bold text-[#10B981]">Turbo-optimized architecture</span>
            </div>
          </section>

          {/* Features Bento promo blocks */}
          <section className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7 bg-white p-8 rounded-2xl border border-[#c3c9b4]/30 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-[#131b2e]">Core Capabilities</h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start col-span-12">
                  <div className="bg-[#81b441]/10 p-2.5 rounded-xl text-[#406900] shrink-0">
                    <AdaptiveIcon name="analytics" size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#131b2e]">Predictive Sales Modeling</p>
                    <p className="text-xs text-[#434939] leading-relaxed mt-0.5">
                      Uses multi-agent logical blocks to forecast quarterly consumer pipelines and inventory demands with precision based on CRM pipelines.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 items-start col-span-12">
                  <div className="bg-[#81b441]/10 p-2.5 rounded-xl text-[#406900] shrink-0">
                    <AdaptiveIcon name="brain" size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#131b2e]">Behavioral Sentiment Sync</p>
                    <p className="text-xs text-[#434939] leading-relaxed mt-0.5">
                      Analyzes consumer email content, phone transcripts, and chats in real-time to adjust active sales scripts dynamically.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 items-start col-span-12">
                  <div className="bg-[#81b441]/10 p-2.5 rounded-xl text-[#406900] shrink-0">
                    <AdaptiveIcon name="sparkles" size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#131b2e]">Autonomous Pipeline Management</p>
                    <p className="text-xs text-[#434939] leading-relaxed mt-0.5">
                      Identifies critical bottleneck drop-offs in sales funnels and alerts high-performing account executives instantly.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
              <div className="bg-[#406900] p-6 rounded-2xl text-white shadow-md relative overflow-hidden flex-1 flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-xl pointer-events-none"></div>
                <AdaptiveIcon name="star" size={32} className="mb-4 text-[#81B441]" />
                <h4 className="font-bold text-base mb-1">Enterprise Ready</h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  Includes SOC2 Type II audit compliance, robust corporate SLAs, and 24/7 dedicated enterprise support.
                </p>
              </div>

              <div className="bg-[#adedd3] p-6 rounded-2xl text-[#306d58] shadow-sm flex-1 flex flex-col justify-center">
                <AdaptiveIcon name="globe" size={32} className="mb-4 text-[#306d58]/70" />
                <h4 className="font-bold text-base mb-1">Zero-Config Integration</h4>
                <p className="text-xs text-[#306d58]/80 leading-relaxed">
                  Frictionless native synchronizations with Salesforce, HubSpot pipelines, HubSpot, and Microsoft Dynamics.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Purchase Card & Meta Sidebar: Right Column */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Main Purchase sticky-like card */}
          <div className="bg-white p-8 rounded-2xl border-2 border-[#81b441] shadow-xl flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold text-[#434939] uppercase tracking-wider block">Starting from</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-[#131b2e]">$499</span>
                  <span className="text-xs font-semibold text-[#434939]">/mo</span>
                </div>
              </div>
              <div className="bg-[#81b441] text-white px-3 py-1 rounded-full text-xs font-bold leading-none select-none">
                Best Value
              </div>
            </div>

            <hr className="border-[#c3c9b4]/20" />

            {/* Checklist of premium inclusions */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#434939] font-medium">
                <AdaptiveIcon name="check_circle" className="text-[#10B981] shrink-0" size={16} />
                <span>Unlimited Inference Cycles</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#434939] font-medium">
                <AdaptiveIcon name="check_circle" className="text-[#10B981] shrink-0" size={16} />
                <span>Multi-Agent Orchestration</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#434939] font-medium">
                <AdaptiveIcon name="check_circle" className="text-[#10B981] shrink-0" size={16} />
                <span>Priority GPU Pipeline Queue</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <button
                onClick={() => setShowPurchaseDialog(true)}
                className="bg-[#064E3B] hover:bg-[#03271d] active:scale-95 text-white w-full py-4 rounded-xl font-bold text-sm sm:text-base tracking-wide transition-all shadow-lg text-center cursor-pointer select-none"
              >
                Get Access Now
              </button>
              <button
                onClick={() => alert("Book a free technical session with an engineer: dev@quantumdynamics.io")}
                className="border border-[#c3c9b4] w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-[#131b2e] hover:bg-[#f2f3ff] transition-all cursor-pointer select-none"
              >
                Book Technical Demo
              </button>
            </div>

            {/* Micro avatars ofjoined enterprise accounts */}
            <div className="pt-4 border-t border-[#c3c9b4]/20 flex items-center justify-between gap-4">
              <div className="flex -space-x-3">
                <img
                  alt="Enterprise lead avatar"
                  className="w-8 h-8 rounded-full border-2 border-white filter hover:scale-105 transition-all"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj8Uh2gMT3uxS4V4kZB8z_sw_5fhfkKy5vg3Qn0PPP4W_l5F5qunpIYUHGGbwAKE0sKbvAPaQo7KW0WjZ-EyZsajqqUJpGK_iupo2HYpmv-Z1j013Q4yTwqyjpP7TBcMr-bz2R5TGOfKsVgzjGA1Gmt-c--VhLMAGFSTm5MkVQf9xtWbrs0-bbq8IWsvz9sn3RYBUZi3uNBiy9xF867uK9SaQH4XFw7q64jaPGZ6sqzge4pzQEPEPK9FS61flef9sXzVN6NmfMO3o"
                  referrerPolicy="no-referrer"
                />
                <img
                  alt="Enterprise lead avatar"
                  className="w-8 h-8 rounded-full border-2 border-white filter hover:scale-105 transition-all"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF1MCRWKtFYgZlePm5EPNbvbA4c8WjKfTEnx1Y5JVqFazmKsgLRqczgOG5OL8SJE_cYR9F9oAC5FhrkT7eG71FYUdV4Y-k3nTHm0Mx6DO1lXyUM_Beq3ZfzPv8066z8fYV77KNu3znZOgKEfnGermi7nWgpOzFoOR3UbJyLSsrVZdiUIgR3Osisr91XQs_2KSU6gBtXXt_9e8DDfy0vBUBC32zwAEMeII2RF6g8QZdpog3VIubrYwsB8neDAwlXZXSzVUf1kCWkBQ"
                  referrerPolicy="no-referrer"
                />
                <img
                  alt="Enterprise lead avatar"
                  className="w-8 h-8 rounded-full border-2 border-white filter hover:scale-105 transition-all"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDas23-bxNiCfOWCpCqYf4dU2aGtPbYuiloihZ909HbF8Br45TIyOFlHLzaSVPbeJbLw7vEx5PMZWuoZPZJzPeg0osGwr2IgnLVII6urqquvKE6KhcAuXj5ZBt6Myg-B3clHY94MrkdKoBmHl2gCnqt3rwsj--nlDkX50sqP_-yD2HSsEoWTfPrqMEuPI_-P40JRgf8_KQfZf0qMUl4KBZ_5RJcrdN4ejaGCtGDtBfNuqbsSLRPwuiT2e5sCyhjhAJ6rxaurgYAMBo"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] font-bold text-[#434939]/70 text-right leading-none max-w-[140px]">
                Joined by 400+ enterprises this month
              </span>
            </div>
          </div>

          {/* Version History logs list */}
          <div className="bg-white p-6 rounded-2xl border border-[#c3c9b4]/30 shadow-sm flex flex-col gap-6">
            <h3 className="text-lg font-black text-[#131b2e]">Version History</h3>
            <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[#c3c9b4]/20 select-text">
              {VERSION_HISTORY.map((log) => (
                <div key={log.version} className="relative flex flex-col">
                  {/* Timeline bullet nodes */}
                  <div className={`absolute left-[-21px] top-1 w-5 h-5 rounded-full flex items-center justify-center ring-4 ring-white ${log.isLatest ? "bg-[#adedd3] text-[#306d58]" : "bg-[#f2f3ff] text-[#434939]"}`}>
                    <AdaptiveIcon name={log.iconName} size={10} className={log.isLatest ? "fill-current" : ""} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold text-[#131b2e]">{log.version}</span>
                    {log.isLatest && (
                      <span className="text-[9px] font-extrabold text-[#406900] bg-[#81b441]/10 px-2 py-0.5 rounded uppercase tracking-wider">
                        Latest
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-semibold text-[#434939]/50 leading-none mt-0.5 mb-2">{log.date}</span>
                  <p className="text-xs text-[#434939] leading-relaxed font-medium">
                    {log.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Review Distributions ratings card */}
          <div className="bg-white p-6 rounded-2xl border border-[#c3c9b4]/30 shadow-sm flex flex-col gap-4">
            <h3 className="text-sm font-bold text-[#434939] uppercase tracking-wider font-sans">Model Integrity</h3>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center select-none">
                <span className="text-4xl font-extrabold text-[#121c2c]">4.9</span>
                <div className="flex text-yellow-500 gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <AdaptiveIcon key={i} name="star" className="fill-current" size={12} />
                  ))}
                </div>
              </div>

              <div className="flex-1 space-y-2">
                {REVIEWS_DISTRIBUTION.map((dist) => (
                  <div key={dist.stars} className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#434939] w-3">{dist.stars}</span>
                    <div className="flex-1 h-2 bg-[#f2f3ff] rounded-full overflow-hidden">
                      <div className="h-full bg-[#81b441] rounded-full" style={{ width: `${dist.percentage}%` }}></div>
                    </div>
                    <span className="text-[10px] font-semibold text-[#434939]/70 w-8 text-right">
                      {dist.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Pop-up buy dialog */}
      {showPurchaseDialog && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[90] animate-fade-in select-none">
          <div className="bg-white max-w-md w-full rounded-2xl p-6 shadow-2xl relative border border-[#c3c9b4]/20 space-y-6">
            <div className="text-center space-y-2 select-text">
              <div className="w-12 h-12 rounded-full bg-[#adedd3] text-[#306d58] flex items-center justify-center mx-auto mb-4">
                <AdaptiveIcon name="check" size={24} />
              </div>
              <h3 className="font-extrabold text-[#131b2e] text-xl">Thank you for subscribing!</h3>
              <p className="text-xs text-[#434939]/80 leading-relaxed">
                Your Enterprise licensing credentials for <span className="font-bold text-[#131b2e]">Nexus-7 Sales Optimizer</span> have been securely dispatched to <span className="font-semibold text-[#131b2e]">felix@gmail.com</span>. We look forward to optimizing your sales funnel.
              </p>
            </div>
            
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => alert("Check API Secrets panel in settings to extract authorization tokens.")}
                className="w-full bg-[#064E3B] hover:bg-[#032a20] text-white font-bold text-xs py-3 rounded-xl shadow cursor-pointer text-center"
              >
                Access API Key Credentials
              </button>
              <button
                onClick={() => setShowPurchaseDialog(false)}
                className="w-full border border-[#c3c9b4] text-[#131b2e] font-bold text-xs py-3 rounded-xl hover:bg-[#f2f3ff] cursor-pointer text-center"
              >
                Return to Product Page
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Conversions Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-[#c3c9b4]/40 shadow-2xl transition-all duration-300 pointer-events-auto transform select-none ${
          showStickyBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col select-text">
              <span className="text-[#131b2e] font-sans font-black text-sm">Nexus-7 Sales Optimizer</span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                <span className="text-[10px] font-bold text-[#306d58] uppercase tracking-wider">
                  {licensesSold} licenses sold this hour
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col items-end">
              <span className="font-sans font-black text-2xl text-[#131b2e]">$499.00</span>
              <span className="text-[9px] font-bold text-[#434939]/70 uppercase tracking-widest">Billed monthly</span>
            </div>
            <button
              onClick={() => setShowPurchaseDialog(true)}
              className="bg-[#064E3B] hover:bg-[#03291e] active:scale-95 text-white px-6 sm:px-10 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <AdaptiveIcon name="shopping_cart" size={16} />
              <span>Subscribe Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
