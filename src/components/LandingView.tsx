import React, { useState } from "react";
import { motion } from "motion/react";
import AdaptiveIcon from "./AdaptiveIcon";
import { PageState } from "../types";

interface LandingProps {
  onNavigate: (page: PageState, searchQuery?: string) => void;
}

export default function LandingView({ onNavigate }: LandingProps) {
  const [query, setQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate("browse", query);
  };

  const trendings = [
    "Mistral-7B Optimized",
    "Stable Diffusion XL Turbo",
    "Real-time Whisper"
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="px-4 max-w-7xl mx-auto pt-10 pb-4 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="font-sans font-extrabold text-[#131b2e] tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl max-w-4xl mx-auto">
            Forge the Future of <span className="text-[#81B441] bg-clip-text">Intelligence</span>
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#434939] max-w-2xl mx-auto leading-relaxed">
            The premier marketplace for high-performance AI models, engineered for latency-critical applications and unmatched accuracy.
          </p>
        </motion.div>

        {/* Magic AI Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#81B441] to-[#10B981] rounded-2xl blur-lg opacity-15 group-focus-within:opacity-25 transition duration-500"></div>
          
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex items-center bg-white border border-[#c3c9b4]/50 rounded-2xl p-2 shadow-xl focus-within:ring-2 focus-within:ring-[#81B441]/40 transition-all"
          >
            <AdaptiveIcon name="search" className="ml-3 text-[#434939] shrink-0" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Describe the model you need... e.g. 'Low-latency LLM for client apps'"
              className="w-full bg-transparent border-none focus:outline-none text-[#131b2e] font-sans text-sm sm:text-base py-3 px-3 placeholder:text-[#434939]/40"
            />
            <button
              type="submit"
              className="mr-1 bg-[#064E3B] hover:bg-[#043326] active:scale-95 text-white font-semibold text-xs sm:text-sm px-5 sm:px-7 py-3 rounded-xl flex items-center gap-2 transition-all shadow-md shrink-0 cursor-pointer"
            >
              <span>Forge AI</span>
              <AdaptiveIcon name="sparkles" size={16} />
            </button>
          </form>

          {/* Search suggestions */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <span className="text-xs font-semibold text-[#434939]/80 self-center">Trending:</span>
            {trendings.map((trend) => (
              <button
                key={trend}
                onClick={() => onNavigate("browse", trend)}
                className="text-xs font-semibold text-[#406900] hover:text-[#2f4f00] hover:underline transition-colors cursor-pointer bg-[#eef0ff]/40 hover:bg-[#eaedff] px-2.5 py-1 rounded-md"
              >
                {trend}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#f2f3ff] py-12 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e]">42k+</div>
            <div className="text-xs font-bold text-[#434939] uppercase tracking-widest mt-2">Active Users</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e]">12.5M</div>
            <div className="text-xs font-bold text-[#434939] uppercase tracking-widest mt-2">Inference Runs</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e]">$3.2M</div>
            <div className="text-xs font-bold text-[#434939] uppercase tracking-widest mt-2">Creator Earnings</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e]">99.9%</div>
            <div className="text-xs font-bold text-[#434939] uppercase tracking-widest mt-2">Platform Uptime</div>
          </div>
        </div>
      </section>

      {/* Performance Standards */}
      <section className="px-4 max-w-7xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#131b2e]">Performance Standards</h2>
          <p className="text-[#434939] text-sm">Filter by technical parameters to optimize runtime efficiency</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Latency Card */}
          <div className="bg-white p-6 rounded-2xl border border-[#c3c9b4]/20 hover:border-[#81B441] shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#81b441]/15 flex items-center justify-center text-[#406900] group-hover:scale-105 transition-transform duration-300">
                  <AdaptiveIcon name="zap" size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#131b2e]">Ultra-Low Latency</h3>
              </div>
              <p className="text-[#434939] text-sm leading-relaxed mb-6">
                Models optimized for real-time inference on edge devices and high-traffic APIs. Sub-20ms response times guaranteed.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-[#f2f3ff] px-3 py-1 rounded-full text-xs font-semibold text-[#434939]/80">ONNX</span>
              <span className="bg-[#f2f3ff] px-3 py-1 rounded-full text-xs font-semibold text-[#434939]/80">TensorRT</span>
              <span className="bg-[#f2f3ff] px-3 py-1 rounded-full text-xs font-semibold text-[#434939]/80">Edge</span>
            </div>
          </div>

          {/* Accuracy Card */}
          <div className="bg-white p-6 rounded-2xl border border-[#c3c9b4]/20 hover:border-[#81B441] shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#2b6954]/15 flex items-center justify-center text-[#2b6954] group-hover:scale-105 transition-transform duration-300">
                  <AdaptiveIcon name="check_circle" size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#131b2e]">Enterprise Accuracy</h3>
              </div>
              <p className="text-[#434939] text-sm leading-relaxed mb-6">
                Highest precision benchmarks for medical, legal, and financial sectors. Minimized hallucination rates.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-[#f2f3ff] px-3 py-1 rounded-full text-xs font-semibold text-[#434939]/80">F1 Score: 0.98</span>
              <span className="bg-[#f2f3ff] px-3 py-1 rounded-full text-xs font-semibold text-[#434939]/80">RAG-Ready</span>
            </div>
          </div>

          {/* Framework Card */}
          <div className="bg-white p-6 rounded-2xl border border-[#c3c9b4]/20 hover:border-[#81B441] shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#10B981]/15 flex items-center justify-center text-[#10B981] group-hover:scale-105 transition-transform duration-300">
                  <AdaptiveIcon name="cpu" size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#131b2e]">Universal Frameworks</h3>
              </div>
              <p className="text-[#434939] text-sm leading-relaxed mb-6">
                Seamless integration with your existing stack. PyTorch, TensorFlow, and JAX weights available for all models.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-[#f2f3ff] px-3 py-1 rounded-full text-xs font-semibold text-[#434939]/80">PyTorch</span>
              <span className="bg-[#f2f3ff] px-3 py-1 rounded-full text-xs font-semibold text-[#434939]/80">JAX</span>
              <span className="bg-[#f2f3ff] px-3 py-1 rounded-full text-xs font-semibold text-[#434939]/80">TF</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bento Grid */}
      <section className="px-4 max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#131b2e]">Top-Performing Models</h2>
          <button
            onClick={() => onNavigate("browse")}
            className="text-[#406900] font-bold text-sm flex items-center gap-1 hover:underline transition-all cursor-pointer"
          >
            <span>View Marketplace</span>
            <AdaptiveIcon name="arrow_forward" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Major Featured Card - Sparks Node Network background */}
          <div className="md:col-span-2 md:row-span-2 bg-[#0F172A] rounded-2xl overflow-hidden relative group border border-white/10 min-h-[460px] flex flex-col justify-end">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXznRQm5-CJAxzyr0hqgLbZPswXAughqno09r7WEcGYlWBKHQAHsNgdx-0_kc9j1KGp_RX-qhIbjOw_dRVZd8eWWaId0kb27cDQuFfLRQKAAR1ISoSN_4Vj8yEX5ox9_kXBVxOZTR8IGbU2NDxNUpvTdXjo1V-X4dvxFeyn8F8N4Lha5OpoSCwXhQiwdEp8e8i4fqJyhTuHS4W1P1frtFNskxL6KvV2x7YOW3-F8vbWHgjquRUeOm-RYG623epq0D8COn2pEO-_yo"
              alt="Neural network glow"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent pointer-events-none"></div>

            <div className="relative p-8 space-y-4 z-10">
              <span className="bg-[#81B441] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
                Featured Today
              </span>
              <h3 className="font-sans font-black text-white text-2xl sm:text-3xl">Mistral-Forge-8x7B</h3>
              <p className="text-[#F1F5F9]/80 text-sm max-w-md">
                Fine-tuned for technical documentation and code generation with 99.4% syntax accuracy. Quantized to 4-bit for rapid local inference.
              </p>
              <div className="flex gap-4 pt-2">
                <button
                  onClick={() => onNavigate("browse")}
                  className="bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg active:scale-95 transition-all cursor-pointer"
                >
                  Get Model
                </button>
                <button
                  onClick={() => onNavigate("detail")}
                  className="border border-white/30 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Card 1: Vision-Flow PRO */}
          <div className="md:col-span-2 bg-[#ffffff] rounded-2xl p-6 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 border border-[#c3c9b4]/20 border-l-4 border-l-[#81b441] shadow-sm">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h4 className="font-bold text-lg text-[#131b2e]">Vision-Flow PRO</h4>
                <p className="text-xs text-[#434939]/70">Computer Vision • Real-time processing</p>
              </div>
              <div className="flex items-center gap-1.5 bg-[#10B981]/15 px-3 py-1 rounded-full text-[#10B981]">
                <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wide">High Demand</span>
              </div>
            </div>

            <div className="my-6">
              <div className="flex items-center justify-between text-xs text-[#434939] mb-1.5 font-semibold">
                <span>Processing Time</span>
                <span className="text-[#406900] font-black">12ms</span>
              </div>
              <div className="w-full bg-[#f2f3ff] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#81b441] h-full w-[90%] rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between pointer-events-auto">
              <span className="text-xl font-extrabold text-[#406900]">$129.00</span>
              <button
                onClick={() => onNavigate("browse")}
                className="text-xs font-semibold text-[#10B981] hover:underline cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Secondary Card 2: Lingua-Sync Mini */}
          <div className="bg-white rounded-2xl p-6 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 border border-[#c3c9b4]/20 shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#2b6954]/10 flex items-center justify-center text-[#2b6954] mb-4">
                <AdaptiveIcon name="globe" size={20} />
              </div>
              <h4 className="font-bold text-sm text-[#131b2e] mb-1">Lingua-Sync Mini</h4>
              <p className="text-xs text-[#434939] line-clamp-2 leading-relaxed">
                Localized 40+ languages with zero-shot translation capability. Great for mobile runtimes.
              </p>
            </div>

            <div className="flex items-center gap-1.5 mt-4">
              <AdaptiveIcon name="star" className="text-yellow-500 fill-yellow-500" size={14} />
              <span className="text-xs font-bold text-[#131b2e]">4.9</span>
              <span className="text-[10px] text-[#434939]/60 font-medium">(1.2k sales)</span>
            </div>
          </div>

          {/* Secondary Card 3: Become a Creator */}
          <div
            onClick={() => onNavigate("dashboard")}
            className="bg-[#81b441] text-white rounded-2xl p-6 flex flex-col justify-center items-center text-center group cursor-pointer hover:brightness-105 active:scale-98 transition-all shadow-md"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:rotate-90 transition-transform duration-300">
              <AdaptiveIcon name="plus" size={24} />
            </div>
            <h4 className="font-bold text-lg">Become a Creator</h4>
            <p className="text-xs text-white/90 leading-relaxed mt-1">
              Join 500+ engineers selling prompt-assets and fine-tuned models.
            </p>
          </div>
        </div>
      </section>

      {/* Trustproof Indicators & Logos */}
      <section className="px-4 max-w-7xl mx-auto py-4">
        <div className="bg-white border border-[#c3c9b4]/30 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 justify-between shadow-sm">
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex -space-x-3 shrink-0">
              <img
                alt="Developer profile link"
                className="w-8 h-8 rounded-full border-2 border-white filter hover:scale-105 transition-all"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj8Uh2gMT3uxS4V4kZB8z_sw_5fhfkKy5vg3Qn0PPP4W_l5F5qunpIYUHGGbwAKE0sKbvAPaQo7KW0WjZ-EyZsajqqUJpGK_iupo2HYpmv-Z1j013Q4yTwqyjpP7TBcMr-bz2R5TGOfKsVgzjGA1Gmt-c--VhLMAGFSTm5MkVQf9xtWbrs0-bbq8IWsvz9sn3RYBUZi3uNBiy9xF867uK9SaQH4XFw7q64jaPGZ6sqzge4pzQEPEPK9FS61flef9sXzVN6NmfMO3o"
                referrerPolicy="no-referrer"
              />
              <img
                alt="Developer profile link"
                className="w-8 h-8 rounded-full border-2 border-white filter hover:scale-105 transition-all"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF1MCRWKtFYgZlePm5EPNbvbA4c8WjKfTEnx1Y5JVqFazmKsgLRqczgOG5OL8SJE_cYR9F9oAC5FhrkT7eG71FYUdV4Y-k3nTHm0Mx6DO1lXyUM_Beq3ZfzPv8066z8fYV77KNu3znZOgKEfnGermi7nWgpOzFoOR3UbJyLSsrVZdiUIgR3Osisr91XQs_2KSU6gBtXXt_9e8DDfy0vBUBC32zwAEMeII2RF6g8QZdpog3VIubrYwsB8neDAwlXZXSzVUf1kCWkBQ"
                referrerPolicy="no-referrer"
              />
              <img
                alt="Developer profile link"
                className="w-8 h-8 rounded-full border-2 border-white filter hover:scale-105 transition-all"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDas23-bxNiCfOWCpCqYf4dU2aGtPbYuiloihZ909HbF8Br45TIyOFlHLzaSVPbeJbLw7vEx5PMZWuoZPZJzPeg0osGwr2IgnLVII6urqquvKE6KhcAuXj5ZBt6Myg-B3clHY94MrkdKoBmHl2gCnqt3rwsj--nlDkX50sqP_-yD2HSsEoWTfPrqMEuPI_-P40JRgf8_KQfZf0qMUl4KBZ_5RJcrdN4ejaGCtGDtBfNuqbsSLRPwuiT2e5sCyhjhAJ6rxaurgYAMBo"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm font-semibold text-[#434939] leading-tight">
              <span className="font-extrabold text-[#131b2e]">582 developers</span> are browsing models right now.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 justify-center text-xs font-bold text-[#434939] uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <AdaptiveIcon name="check_circle" className="text-[#10B981]" size={16} />
              <span>Verified Assets</span>
            </div>
            <div className="flex items-center gap-1.5">
              <AdaptiveIcon name="shield" className="text-[#10B981]" size={16} />
              <span>Secure Licensing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <AdaptiveIcon name="helpcircle" className="text-[#10B981]" size={16} />
              <span>24/7 Expert Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
