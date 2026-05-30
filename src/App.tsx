import React, { useState } from "react";
import LandingView from "./components/LandingView";
import BrowseView from "./components/BrowseView";
import ProductDetailView from "./components/ProductDetailView";
import DashboardView from "./components/DashboardView";
import AdaptiveIcon from "./components/AdaptiveIcon";
import { PageState } from "./types";

export default function App() {
  const [page, setPage] = useState<PageState>("landing");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModelId, setSelectedModelId] = useState("nexus-7");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Routing and query propagation handler
  const handleNavigate = (targetPage: PageState, extraData?: string) => {
    setIsMobileMenuOpen(false);
    
    if (targetPage === "browse") {
      setSearchQuery(extraData || "");
    } else if (targetPage === "detail") {
      setSelectedModelId(extraData || "nexus-7");
    }
    
    setPage(targetPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-[#131b2e]">
      
      {/* Brand Header Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#c3c9b4]/20 select-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          
          {/* Logo Brand Brand */}
          <div
            onClick={() => handleNavigate("landing")}
            className="flex items-center gap-2.5 cursor-pointer hover:opacity-90 active:scale-98 transition-all group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-[#064E3B] text-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-all duration-300">
              <AdaptiveIcon name="sparkles" size={20} className="text-[#81B441]" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-black text-[#131b2e] leading-tight text-lg tracking-tight">
                FORGE <span className="text-[#81B441]">AI</span>
              </span>
              <span className="text-[9px] font-bold text-[#434939]/70 uppercase tracking-widest leading-none">
                Performance Assets
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links tabs */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => handleNavigate("landing")}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                page === "landing"
                  ? "bg-[#81b441]/10 text-[#406900]"
                  : "text-[#434939]/80 hover:bg-[#f2f3ff] hover:text-[#131b2e]"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => handleNavigate("browse")}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                page === "browse"
                  ? "bg-[#81b441]/10 text-[#406900]"
                  : "text-[#434939]/80 hover:bg-[#f2f3ff] hover:text-[#131b2e]"
              }`}
            >
              Browse Models
            </button>
            <button
              onClick={() => handleNavigate("detail")}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                page === "detail"
                  ? "bg-[#81b441]/10 text-[#406900]"
                  : "text-[#434939]/80 hover:bg-[#f2f3ff] hover:text-[#131b2e]"
              }`}
            >
              Live Sandbox
            </button>
            <button
              onClick={() => handleNavigate("dashboard")}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                page === "dashboard"
                  ? "bg-[#81b441]/10 text-[#406900]"
                  : "text-[#434939]/80 hover:bg-[#f2f3ff] hover:text-[#131b2e]"
              }`}
            >
              Creator Hub
            </button>
          </nav>

          {/* Right Header Controls / Profile */}
          <div className="hidden md:flex items-center gap-4 shrink-0 pointer-events-auto">
            <div className="flex flex-col items-end leading-none">
              <span className="text-xs font-bold text-[#131b2e]">Felix Jancuk</span>
              <span className="text-[10px] text-[#10B981] font-bold uppercase tracking-wider mt-0.5">
                Developer Acc
              </span>
            </div>

            <img
              alt="Workspace profile trigger click"
              onClick={() => handleNavigate("dashboard")}
              className="w-10 h-10 rounded-full border border-[#c3c9b4]/50 cursor-pointer object-cover shadow-sm hover:ring-2 hover:ring-[#81b441] transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlfH3_xTA9vjot3PMG_KZCvl5kP-8mxuX1YIKAFJWpaI5QnlojWNrIbZADfVQ80_zNqq9WQiSRr8XHsAWj0nTgfUaqZFILyruzWUymOvqrCkUL8rnmkynTnaKxjxmtA7tqk1p3ZfyAWndU-FhCc4d_aCi-wF-N-7fjZZIlZgcLm0h5y3OA1bt8Swm8pgFKKJpzoQGk6MSTkktD0Xr4fMFqI24wsnA2Iqs_xqLe4QQ1zjar5WTzviQ2uhC8mDEad6JTlBrSeyuSfAE"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Mobile Hamburguer trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#131b2e] hover:bg-[#f2f3ff] rounded-xl cursor-pointer"
            title="Expand mobile navigational tray"
          >
            <AdaptiveIcon name={isMobileMenuOpen ? "close" : "menu"} size={22} />
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-[#c3c9b4]/20 p-4 space-y-2 flex flex-col shadow-xl z-50">
            <button
              onClick={() => handleNavigate("landing")}
              className={`w-full text-left py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider ${
                page === "landing" ? "bg-[#81b441]/10 text-[#406900]" : "text-[#434939] hover:bg-[#f2f3ff]"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => handleNavigate("browse")}
              className={`w-full text-left py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider ${
                page === "browse" ? "bg-[#81b441]/10 text-[#406900]" : "text-[#434939] hover:bg-[#f2f3ff]"
              }`}
            >
              Browse Models
            </button>
            <button
              onClick={() => handleNavigate("detail")}
              className={`w-full text-left py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider ${
                page === "detail" ? "bg-[#81b441]/10 text-[#406900]" : "text-[#434939] hover:bg-[#f2f3ff]"
              }`}
            >
              Live Sandbox
            </button>
            <button
              onClick={() => handleNavigate("dashboard")}
              className={`w-full text-left py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider ${
                page === "dashboard" ? "bg-[#81b441]/10 text-[#406900]" : "text-[#434939] hover:bg-[#f2f3ff]"
              }`}
            >
              Creator Hub
            </button>
          </div>
        )}
      </header>

      {/* Main Container Wrapper */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 sm:px-10 py-10">
        {page === "landing" && <LandingView onNavigate={handleNavigate} />}
        {page === "browse" && <BrowseView initialSearchQuery={searchQuery} onNavigate={handleNavigate} />}
        {page === "detail" && <ProductDetailView modelId={selectedModelId} onNavigate={handleNavigate} />}
        {page === "dashboard" && <DashboardView />}
      </main>

      {/* Footer Branding section */}
      <footer className="bg-[#111827] text-white border-t border-slate-800 py-12 select-none shrink-0 mt-auto">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#81B441] text-white flex items-center justify-center font-bold">
                F
              </div>
              <span className="font-sans font-black text-white text-lg tracking-tight">
                FORGE <span className="text-[#81B441]">AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Serving the highest performance artificial intelligence parameters for web, mobile, and server workloads with sub-ms efficiency.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">Marketplace</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => handleNavigate("browse")} className="hover:text-white transition-colors cursor-pointer text-left">Large Language Models</button></li>
              <li><button onClick={() => handleNavigate("browse")} className="hover:text-white transition-colors cursor-pointer text-left">Computer Vision Models</button></li>
              <li><button onClick={() => handleNavigate("browse")} className="hover:text-white transition-colors cursor-pointer text-left">Audio & Speech Diffusion</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">Developers</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => handleNavigate("dashboard")} className="hover:text-white transition-colors cursor-pointer text-left">Creator Hub Access</button></li>
              <li><a href="#licensing" onClick={(e) => { e.preventDefault(); alert("Licenses are managed using secure web tokens."); }} className="hover:text-white transition-colors text-left">Licensing Rules</a></li>
              <li><a href="#uptime" onClick={(e) => { e.preventDefault(); alert("Uptime is currently verified at 99.99%."); }} className="hover:text-white transition-colors text-left">API Live Status</a></li>
            </ul>
          </div>

          <div className="space-y-4 select-text">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4 leading-none">Stay Updated</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to the Forge AI weekly newsletter to receive latency reports and newly verified model indices.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="developer@work.com"
                className="bg-slate-800 border-none px-3 py-2.5 rounded-lg text-xs flex-1 text-white outline-none focus:ring-1 focus:ring-[#81b441]"
              />
              <button
                onClick={() => alert("Success! Check your inbox for confirmation token.")}
                className="bg-[#81b441] hover:bg-[#6c9735] text-white font-bold text-xs px-4 rounded-lg cursor-pointer"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
