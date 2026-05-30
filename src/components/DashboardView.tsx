import React, { useState } from "react";
import AdaptiveIcon from "./AdaptiveIcon";
import { REVENUE_GROWTH_DATA } from "../data";

interface InventoryAsset {
  id: string;
  name: string;
  version: string;
  framework: string;
  downloads: number;
  price: string;
  status: "Active" | "Under Review";
}

export default function DashboardView() {
  const [balance, setBalance] = useState<number>(4820.50);
  const [isProcessingPayout, setIsProcessingPayout] = useState(false);
  const [assets, setAssets] = useState<InventoryAsset[]>([
    {
      id: "as-1",
      name: "GPT-4 Turbo Agent Configurator",
      version: "v1.2.2",
      framework: "React 19",
      downloads: 2410,
      price: "$19.00",
      status: "Active"
    },
    {
      id: "as-2",
      name: "Diffusion 3.0 Master Prompts",
      version: "v4.0.0",
      framework: "Next.js 15",
      downloads: 512,
      price: "$5.00",
      status: "Active"
    },
    {
      id: "as-3",
      name: "SignalDenoise WebRTC Hook",
      version: "v0.8.1",
      framework: "Vue 3.5",
      downloads: 148,
      price: "$0.005/char",
      status: "Under Review"
    }
  ]);

  // Prompt generation modal state
  const [showPromptGenerator, setShowPromptGenerator] = useState(false);
  const [newPromptName, setNewPromptName] = useState("");
  const [newPromptFramework, setNewPromptFramework] = useState("React 19");
  const [newPromptPrice, setNewPromptPrice] = useState("$9.00");
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);

  // Request payout callback
  const handleRequestPayout = () => {
    if (isProcessingPayout || balance === 0) return;
    setIsProcessingPayout(true);
    
    setTimeout(() => {
      alert(`Success! $${balance.toFixed(2)} was securely routed to your connected routing bank.`);
      setBalance(0);
      setIsProcessingPayout(false);
    }, 2000);
  };

  // Publish a new model asset from floating generator
  const handlePublishPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPromptName.trim()) return;

    const newAsset: InventoryAsset = {
      id: `as-${Date.now()}`,
      name: newPromptName,
      version: "v1.0.0",
      framework: newPromptFramework,
      downloads: 0,
      price: newPromptPrice,
      status: "Active"
    };

    setAssets([newAsset, ...assets]);
    setShowPromptGenerator(false);
    setNewPromptName("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative select-none">
      
      {/* Secondary Sidebar Column Navigation */}
      <aside className="lg:col-span-3 flex lg:flex-col gap-1 w-full lg:sticky lg:top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-3 custom-scrollbar bg-white p-6 rounded-2xl border border-[#c3c9b4]/20 shadow-sm">
        <div className="hidden lg:flex items-center gap-3 mb-6 px-4">
          <div className="w-8 h-8 rounded-full bg-[#81b441] text-white flex items-center justify-center font-bold">
            C
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#131b2e] leading-tight font-sans">Creator Hub</span>
            <span className="text-[10px] text-[#10B981] font-bold uppercase tracking-wider leading-none">Level 4 Partner</span>
          </div>
        </div>

        <button className="flex-1 lg:flex-none flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold bg-[#81b441]/15 text-[#406900] transition-all cursor-pointer">
          <AdaptiveIcon name="dashboard" size={16} />
          <span>Dashboard</span>
        </button>

        <button
          onClick={() => alert("Library, statistics tracking, and settings are currently in read-only sandbox mode.")}
          className="flex-1 lg:flex-none flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-[#434939]/70 hover:bg-[#f2f3ff] hover:text-[#131b2e] transition-all cursor-pointer"
        >
          <AdaptiveIcon name="layers" size={16} />
          <span>My Library</span>
        </button>

        <button
          onClick={() => alert("Detailed analytic filters are accessible under Level 4 verified dashboard.")}
          className="flex-1 lg:flex-none flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-[#434939]/70 hover:bg-[#f2f3ff] hover:text-[#131b2e] transition-all cursor-pointer"
        >
          <AdaptiveIcon name="analytics" size={16} />
          <span>Analytics</span>
        </button>

        <button
          onClick={() => alert("History of payouts are currently protected under SOC2 licensing standards.")}
          className="flex-1 lg:flex-none flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-[#434939]/70 hover:bg-[#f2f3ff] hover:text-[#131b2e] transition-all cursor-pointer"
        >
          <AdaptiveIcon name="dollarsign" size={16} />
          <span>Earnings</span>
        </button>
      </aside>

      {/* Main Content Dashboard panel */}
      <section className="lg:col-span-9 space-y-8">
        
        {/* Top welcome layout header banner */}
        <div className="bg-[#0F172A] rounded-2xl p-8 relative overflow-hidden text-white border border-white/10 shadow-lg min-h-[160px] flex flex-col justify-center">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXznRQm5-CJAxzyr0hqgLbZPswXAughqno09r7WEcGYlWBKHQAHsNgdx-0_kc9j1KGp_RX-qhIbjOw_dRVZd8eWWaId0kb27cDQuFfLRQKAAR1ISoSN_4Vj8yEX5ox9_kXBVxOZTR8IGbU2NDxNUpvTdXjo1V-X4dvxFeyn8F8N4Lha5OpoSCwXhQiwdEp8e8i4fqJyhTuHS4W1P1frtFNskxL6KvV2x7YOW3-F8vbWHgjquRUeOm-RYG623epq0D8COn2pEO-_yo"
            alt="Dashboard geometric neural"
            className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="relative space-y-2 z-10 select-text">
            <h1 className="font-sans font-black text-2xl sm:text-3xl leading-none">Welcome back, Felix</h1>
            <p className="text-xs text-[#F1F5F9]/80 max-w-md leading-relaxed">
              Your prompt engineering library downloaded 5.2k times this week. You are on track for Level 5 tier rewards.
            </p>
          </div>
        </div>

        {/* Stats Bento Grid block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Total Sales */}
          <div className="bg-white p-6 rounded-2xl border border-[#c3c9b4]/30 shadow-sm flex flex-col justify-between h-36">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-[#434939] uppercase tracking-wider">Total Sales</span>
              <div className="w-8 h-8 rounded-lg bg-[#81b441]/10 flex items-center justify-center text-[#406900]">
                <AdaptiveIcon name="shopping_cart" size={16} />
              </div>
            </div>
            <div className="flex items-end justify-between mt-2 select-text">
              <span className="text-3xl font-extrabold text-[#111928]">1,248</span>
              <div className="flex items-center gap-1.5 text-xs text-[#10B981] font-bold">
                <AdaptiveIcon name="trending_up" size={14} />
                <span>+12%</span>
              </div>
            </div>
          </div>

          {/* Card 2: Average Rating */}
          <div className="bg-white p-6 rounded-2xl border border-[#c3c9b4]/30 shadow-sm flex flex-col justify-between h-36">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-[#434939] uppercase tracking-wider">Avg Rating</span>
              <div className="w-8 h-8 rounded-lg bg-[#10b981]/10 flex items-center justify-center text-[#10B981]">
                <AdaptiveIcon name="star" size={16} className="fill-current" />
              </div>
            </div>
            <div className="flex flex-col mt-2 select-text">
              <span className="text-3xl font-extrabold text-[#111928]">4.92</span>
              <div className="flex gap-0.5 mt-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <AdaptiveIcon key={i} name="star" className="fill-current" size={12} />
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Dynamic Balance with active button */}
          <div className="bg-white p-6 rounded-2xl border-2 border-[#10B981]/40 shadow-md flex flex-col justify-between h-36 relative overflow-hidden bg-gradient-to-br from-white to-[#10b981]/5">
            <div className="flex justify-between items-center z-10">
              <span className="text-xs font-bold text-[#434939] uppercase tracking-wider">Net Wallet Balance</span>
              <div className="w-8 h-8 rounded-lg bg-[#064E3B]/10 flex items-center justify-center text-[#064E3B]">
                <AdaptiveIcon name="dollarsign" size={16} />
              </div>
            </div>
            <div className="flex items-end justify-between mt-2 z-10 select-text">
              <span className="text-3xl font-black text-[#111928] font-mono">${balance.toFixed(2)}</span>
              <button
                onClick={handleRequestPayout}
                disabled={isProcessingPayout || balance === 0}
                className="bg-[#064E3B] hover:bg-[#032e23] disabled:opacity-50 text-white font-bold text-[10px] px-4 py-2 rounded-lg transition-all shadow active:scale-95 cursor-pointer flex-shrink-0"
              >
                {isProcessingPayout ? "Routing..." : balance === 0 ? "Processed" : "Request Payout"}
              </button>
            </div>
          </div>
        </div>

        {/* Analytics row visual growth bars & list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Revenue growth Bar chart column */}
          <div className="bg-white p-6 rounded-2xl border border-[#c3c9b4]/30 shadow-sm lg:col-span-8 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="space-y-0.5">
                <h3 className="text-base font-bold text-[#131b2e]">Revenue Growth</h3>
                <p className="text-[10px] leading-relaxed text-[#434939]/70 uppercase tracking-widest font-black">
                  Daily aggregate ledger analysis
                </p>
              </div>

              <div className="flex gap-2 bg-[#f2f3ff] rounded-lg p-0.5 border border-[#c3c9b4]/10 text-[10px] font-bold">
                <span className="bg-white text-[#406900] shadow rounded px-2.5 py-1">7D</span>
                <span className="text-[#434939]/60 px-2.5 py-1">30D</span>
                <span className="text-[#434939]/60 px-2.5 py-1">ALL</span>
              </div>
            </div>

            {/* Simulated custom interactive flexbox bars column chart */}
            <div className="flex items-end justify-between h-44 border-b border-[#c3c9b4]/20 pb-4 pt-4 px-4 select-none">
              {REVENUE_GROWTH_DATA.map((dat, index) => (
                <div
                  key={dat.day}
                  className="flex flex-col items-center gap-2 group w-8 relative"
                  onMouseEnter={() => setHoveredBarIndex(index)}
                  onMouseLeave={() => setHoveredBarIndex(null)}
                >
                  {/* Tooltip percentage indicators */}
                  {hoveredBarIndex === index && (
                    <div className="absolute top-[-36px] bg-[#121b2d] text-white px-2 py-1 rounded text-[9px] font-bold font-mono shadow">
                      +{dat.revenue}%
                    </div>
                  )}

                  {/* Visual Bar heights */}
                  <div
                    className="w-full bg-[#eef5ee] border-b-2 border-b-[#81b441] rounded-t-lg hover:bg-[#81b441]/25 transition-all duration-300 cursor-pointer"
                    style={{ height: `${dat.revenue}%` }}
                  ></div>
                  <span className="text-[10px] font-bold text-[#434939]/60">{dat.day}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-2 text-[11px] text-[#434939]/80 font-semibold leading-none pl-2">
              <AdaptiveIcon name="check_circle" className="text-[#10B981]" size={14} />
              <span>Revenue ledger sync fully validated with stripe on hourly intervals.</span>
            </div>
          </div>

          {/* Top assets sidebar card */}
          <div className="bg-white p-6 rounded-2xl border border-[#c3c9b4]/30 shadow-sm lg:col-span-4 flex flex-col gap-6">
            <h3 className="text-base font-bold text-[#131b2e]">Top Prompts</h3>

            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-[#81b441]/10 text-[#406900] flex items-center justify-center shrink-0">
                  <AdaptiveIcon name="sparkles" size={20} />
                </div>
                <div className="flex-1 min-w-0 select-text">
                  <p className="font-bold text-sm text-[#131b2e] truncate">GPT-4 Turbo Architecture</p>
                  <p className="text-xs text-[#434939]/70 select-text">481 sales • $29.00 each</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-[#81b441]/10 text-[#406900] flex items-center justify-center shrink-0">
                  <AdaptiveIcon name="brain" size={20} />
                </div>
                <div className="flex-1 min-w-0 select-text">
                  <p className="font-bold text-sm text-[#131b2e] truncate">Diffusion 3.0 Master</p>
                  <p className="text-xs text-[#434939]/70 select-text">312 sales • $15.00 each</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-[#81b441]/10 text-[#406900] flex items-center justify-center shrink-0">
                  <AdaptiveIcon name="cpu" size={20} />
                </div>
                <div className="flex-1 min-w-0 select-text">
                  <p className="font-bold text-sm text-[#131b2e] truncate">WASM OCR Parser</p>
                  <p className="text-xs text-[#434939]/70 select-text">94 sales • Free License</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory list table */}
        <div className="bg-white rounded-2xl border border-[#c3c9b4]/30 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-[#c3c9b4]/20 flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="text-base font-bold text-[#131b2e]">Active Inventories</h3>
              <p className="text-[10px] leading-none text-[#434939]/70 uppercase tracking-wider font-extrabold">
                Models and Assets management ledger
              </p>
            </div>
          </div>

          <div className="overflow-x-auto select-text">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#c3c9b4]/20 text-[10px] font-bold text-[#434939] uppercase tracking-wider bg-[#f2f3ff]/50">
                  <th className="px-6 py-4">Asset Details</th>
                  <th className="px-6 py-4">Framework</th>
                  <th className="px-6 py-4">Downloads</th>
                  <th className="px-6 py-4">Pricing</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c3c9b4]/10 text-xs font-semibold text-[#131b2e]">
                {assets.map((item) => (
                  <tr key={item.id} className="hover:bg-[#f2f3ff]/20 transition-all">
                    <td className="px-6 py-4">
                      <div className="flex flex-col select-text">
                        <span className="font-bold text-sm text-[#131b2e]">{item.name}</span>
                        <span className="text-[10px] text-[#434939]/50 block mt-0.5 font-sans leading-none">{item.version}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-[#f2f3ff] text-[#434939]/80 px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase">
                        {item.framework}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[#111928]">{item.downloads} downloads</td>
                    <td className="px-6 py-4 font-mono font-bold text-[#406900]">{item.price}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${item.status === "Active" ? "bg-[#10B981] animate-pulse" : "bg-yellow-500"}`}></span>
                        <span className="text-xs font-bold text-[#424854]">{item.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                       <button
                         onClick={() => alert(`Editing functionality is currently restricted under Level 4 verified dashboard.`)}
                         className="text-[#406900] hover:underline text-xs cursor-pointer"
                       >
                         Edit
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Floating Action Button for prompt generation */}
      <div className="fixed bottom-6 right-6 z-[80] select-none">
        <button
          onClick={() => setShowPromptGenerator(true)}
          className="bg-[#064E3B] text-white hover:bg-[#032a20] transition-all p-4 rounded-full shadow-2xl flex items-center justify-center relative group active:scale-95 cursor-pointer ring-4 ring-[#81b441]/15 leading-none"
          title="Create brand new prompt engineering asset"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#81B441] to-[#10B981] rounded-full blur opacity-15 animate-pulse"></div>
          <AdaptiveIcon name="sparkles" size={24} />
        </button>
      </div>

      {/* Interactive wizard prompt creation modal */}
      {showPromptGenerator && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm shadow flex items-center justify-center p-4 z-[90] animate-fade-in select-none">
          <div className="bg-white max-w-md w-full rounded-2xl p-6 shadow-2xl relative border border-[#c3c9b4]/10 space-y-6">
            <div className="flex justify-between items-center pb-2 border-b border-[#c3c9b4]/20">
              <div className="flex items-center gap-2">
                <AdaptiveIcon name="sparkles" className="text-[#406900]" size={18} />
                <h3 className="font-extrabold text-[#131b2e] text-lg font-sans">Assemble AI Prompt</h3>
              </div>
              <button
                onClick={() => setShowPromptGenerator(false)}
                className="text-[#434939] hover:text-[#111] cursor-pointer"
              >
                <AdaptiveIcon name="x" size={20} />
              </button>
            </div>

            <form onSubmit={handlePublishPrompt} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#434939] uppercase tracking-wider block">Prompt Name</label>
                <input
                  type="text"
                  placeholder="e.g. GPT-4 Web Crawler Optimizer"
                  value={newPromptName}
                  onChange={(e) => setNewPromptName(e.target.value)}
                  className="w-full bg-[#f2f3ff] text-xs font-medium text-[#131b2e] px-4 py-3 border border-[#c3c9b4]/20 focus:ring-2 focus:ring-[#81b441]/20 rounded-xl outline-none"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#434939] uppercase tracking-wider block">Target Framework</label>
                <select
                  value={newPromptFramework}
                  onChange={(e) => setNewPromptFramework(e.target.value)}
                  className="w-full bg-[#f2f3ff] text-xs font-medium text-[#131b2e] px-4 py-3 border border-[#c3c9b4]/20 focus:ring-2 focus:ring-[#81b441]/20 rounded-xl outline-none cursor-pointer"
                >
                  <option>React 19</option>
                  <option>Next.js 15</option>
                  <option>Vue 3.5</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#434939] uppercase tracking-wider block">License Price Model</label>
                <input
                  type="text"
                  placeholder="e.g. $12.00 or Free"
                  value={newPromptPrice}
                  onChange={(e) => setNewPromptPrice(e.target.value)}
                  className="w-full bg-[#f2f3ff] text-xs font-medium text-[#131b2e] px-4 py-3 border border-[#c3c9b4]/20 focus:ring-2 focus:ring-[#81b441]/20 rounded-xl outline-none"
                  required
                />
              </div>

              <div className="flex gap-3 pt-3 select-none pointer-events-auto">
                <button
                  type="button"
                  onClick={() => setShowPromptGenerator(false)}
                  className="flex-1 border border-[#c3c9b4] text-[#131b2e] font-bold text-xs py-3 rounded-xl hover:bg-[#f2f3ff] cursor-pointer text-center"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#064E3B] hover:bg-[#032e22] text-white font-bold text-xs py-3 rounded-xl shadow cursor-pointer text-center"
                >
                  Publish Asset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
