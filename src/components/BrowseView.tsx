import React, { useState, useMemo } from "react";
import { MODELS_DATA } from "../data";
import { AIModel, PageState } from "../types";
import AdaptiveIcon from "./AdaptiveIcon";

interface BrowseProps {
  initialSearchQuery?: string;
  onNavigate: (page: PageState, selectedModelId?: string) => void;
}

export default function BrowseView({ initialSearchQuery = "", onNavigate }: BrowseProps) {
  // Filters state
  const [search, setSearch] = useState(initialSearchQuery);
  const [frameworks, setFrameworks] = useState<string[]>(["React 19"]);
  const [modelTypes, setModelTypes] = useState<string[]>(["Computer Vision", "LLM", "Audio Diffusion"]);
  const [maxLatency, setMaxLatency] = useState<number>(200); // Latency default < 200ms
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<string>("Most Popular");

  const frameworksOptions = ["React 19", "Next.js 15", "Vue 3.5"];
  const modelTypesOptions = ["LLM", "Computer Vision", "Audio Diffusion"];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clearSearchAndFilters = () => {
    setSearch("");
    setFrameworks(["React 19"]);
    setModelTypes(["Computer Vision", "LLM", "Audio Diffusion"]);
    setMaxLatency(500);
    setSortBy("Most Popular");
  };

  const toggleFramework = (framework: string) => {
    if (frameworks.includes(framework)) {
      setFrameworks(frameworks.filter((f) => f !== framework));
    } else {
      setFrameworks([...frameworks, framework]);
    }
  };

  const toggleModelType = (type: string) => {
    if (modelTypes.includes(type)) {
      setModelTypes(modelTypes.filter((t) => t !== type));
    } else {
      setModelTypes([...modelTypes, type]);
    }
  };

  // Perform filtration and sorting in memo
  const filteredModels = useMemo(() => {
    let result = [...MODELS_DATA];

    // Search query match
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.tagline.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q) ||
          m.type.toLowerCase().includes(q) ||
          m.frameworks.some((f) => f.toLowerCase().includes(q))
      );
    }

    // Framework check matching: if frameworks filter is active, check intersections
    if (frameworks.length > 0) {
      result = result.filter((m) =>
        m.frameworks.some((mf) =>
          frameworks.some((f) => mf.toLowerCase().includes(f.toLowerCase().split(" ")[0]))
        )
      );
    }

    // Model type filtration
    if (modelTypes.length > 0) {
      result = result.filter((m) => modelTypes.includes(m.type));
    } else {
      result = []; // no types checked = no models
    }

    // Latency filtration
    result = result.filter((m) => m.latency <= maxLatency);

    // Sorting
    if (sortBy === "Most Popular") {
      result.sort((a, b) => b.downloads - a.downloads);
    } else if (sortBy === "Latency: Low to High") {
      result.sort((a, b) => a.latency - b.latency);
    } else if (sortBy === "Rating: High to Low") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.numericPrice - b.numericPrice);
    }

    return result;
  }, [search, frameworks, modelTypes, maxLatency, sortBy]);

  return (
    <div className="flex gap-8 items-start">
      {/* Sidebar Filters */}
      <aside className="w-72 shrink-0 hidden lg:flex flex-col gap-8 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-3 custom-scrollbar bg-white/70 p-6 rounded-2xl border border-[#c3c9b4]/20 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-[#131b2e]">Filters</h2>
          <button
            onClick={clearSearchAndFilters}
            className="text-[#406900] text-xs font-bold hover:underline cursor-pointer"
          >
            Clear all
          </button>
        </div>

        {/* Search bar inside Sidebar */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold text-[#434939] uppercase tracking-wider">Search Keywords</h3>
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search features..."
              className="w-full bg-[#f2f3ff] border-none focus:ring-2 focus:ring-[#81b441]/20 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#131b2e] placeholder:text-[#434939]/30"
            />
            <AdaptiveIcon name="search" className="absolute left-3 top-3 text-[#434939]/40" size={14} />
          </div>
        </div>

        {/* Framework Group */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-[#434939] uppercase tracking-wider">Framework</h3>
          <div className="space-y-2">
            {frameworksOptions.map((fw) => (
              <label key={fw} className="flex items-center gap-3 group cursor-pointer">
                <input
                  type="checkbox"
                  checked={frameworks.includes(fw)}
                  onChange={() => toggleFramework(fw)}
                  className="rounded border-[#c3c9b4] text-[#10B981] focus:ring-[#10B981] w-4 h-4 cursor-pointer"
                />
                <span className="text-xs font-medium text-[#131b2e] group-hover:text-[#406900] transition-colors">
                  {fw}
                </span>
                <span className="ml-auto text-[10px] text-[#434939]/50 font-semibold bg-[#f2f3ff] px-2 py-0.5 rounded">
                  {fw === "React 19" ? 124 : fw === "Next.js 15" ? 86 : 42}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Model Type Group */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-[#434939] uppercase tracking-wider">Model Type</h3>
          <div className="space-y-2">
            {modelTypesOptions.map((type) => (
              <label key={type} className="flex items-center gap-3 group cursor-pointer">
                <input
                  type="checkbox"
                  checked={modelTypes.includes(type)}
                  onChange={() => toggleModelType(type)}
                  className="rounded border-[#c3c9b4] text-[#10B981] focus:ring-[#10B981] w-4 h-4 cursor-pointer"
                />
                <span className="text-xs font-medium text-[#131b2e] group-hover:text-[#406900] transition-colors">
                  {type}
                </span>
                <span className="ml-auto text-[10px] text-[#434939]/50 font-semibold bg-[#f2f3ff] px-2 py-0.5 rounded">
                  {type === "LLM" ? 312 : type === "Computer Vision" ? 56 : 19}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Latency Range */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-bold text-[#434939] uppercase tracking-wider">Latency Limit</h3>
            <span className="text-xs font-bold text-[#406900]">{maxLatency < 1000 ? `< ${maxLatency}ms` : "1s"}</span>
          </div>
          <input
            type="range"
            min="10"
            max="1000"
            step="10"
            value={maxLatency}
            onChange={(e) => setMaxLatency(Number(e.target.value))}
            className="w-full h-1 bg-[#e2e7ff] hover:bg-[#dae2fd] rounded-full appearance-none accent-[#10B981] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-[#434939]/50 font-bold uppercase">
            <span>10ms</span>
            <span>1s (max)</span>
          </div>
        </div>

        {/* Core Web Vitals widget */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-bold text-[#434939] uppercase tracking-wider font-sans">Core Web Vitals</h3>
          <div className="p-4 bg-[#f2f3ff] rounded-xl border border-[#c3c9b4]/20 space-y-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="text-xs font-extrabold text-[#1a2e1f]">Vital Score: High Priority</span>
            </div>
            <p className="text-[10px] leading-relaxed text-[#434939]/70 italic">
              Showing models fully optimized for LCP (Largest Contentful Paint) under 2.5s.
            </p>
          </div>
        </div>
      </aside>

      {/* Main Results Container */}
      <section className="flex-1 flex flex-col gap-6">
        {/* Toolbar Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/40 p-4 rounded-2xl border border-[#c3c9b4]/10 shadow-sm">
          <div>
            <h1 className="text-xl sm:text-2xl font-sans font-black text-[#131b2e]">
              Found {filteredModels.length} {filteredModels.length === 1 ? "result" : "results"}
            </h1>
            <p className="text-xs text-[#434939] mt-0.5">Optimized for high-concurrency cloud deployments.</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* View Mode Grid/List buttons */}
            <div className="flex bg-[#f2f3ff] border border-[#c3c9b4]/30 rounded-xl p-1 gap-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 px-3 rounded-lg transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-white shadow-md text-[#406900]"
                    : "text-[#434939]/60 hover:text-[#131b2e]"
                }`}
                title="Grid layout view"
              >
                <AdaptiveIcon name="listfilter" size={14} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 px-3 rounded-lg transition-all cursor-pointer ${
                  viewMode === "list"
                    ? "bg-white shadow-md text-[#406900]"
                    : "text-[#434939]/60 hover:text-[#131b2e]"
                }`}
                title="List layout view"
              >
                <AdaptiveIcon name="menu" size={14} />
              </button>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#f2f3ff] border border-[#c3c9b4]/30 rounded-xl px-4 py-2 text-xs font-semibold text-[#131b2e] focus:outline-none focus:ring-2 focus:ring-[#81b441]/30 cursor-pointer"
            >
              <option>Most Popular</option>
              <option>Latency: Low to High</option>
              <option>Rating: High to Low</option>
              <option>Price: Low to High</option>
            </select>
          </div>
        </div>

        {/* Empty layout state */}
        {filteredModels.length === 0 && (
          <div className="text-center py-20 bg-white border border-[#c3c9b4]/20 rounded-2xl shadow-sm space-y-4">
            <div className="w-16 h-16 bg-[#f2f3ff] text-[#434939]/40 rounded-full flex items-center justify-center mx-auto">
              <AdaptiveIcon name="filter" size={28} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-lg text-[#131b2e]">No models match your filter</h3>
              <p className="text-xs text-[#434939] max-w-md mx-auto leading-relaxed">
                Try loosening your latency limits or clearing framework selections to discover matching models.
              </p>
            </div>
            <button
              onClick={clearSearchAndFilters}
              className="bg-[#064E3B] hover:bg-[#043326] active:scale-95 text-white font-semibold text-xs px-6 py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Grid and List container mapping */}
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              : "flex flex-col gap-4"
          }`}
        >
          {filteredModels.map((model) => (
            <article
              key={model.id}
              onClick={() => onNavigate("detail", model.id)}
              className={`bg-white border hover:border-[#81B441] hover:shadow-lg transition-all duration-300 rounded-2xl p-6 flex cursor-pointer group relative overflow-hidden ${
                viewMode === "grid" ? "flex-col gap-4 justify-between" : "flex-row items-center gap-6 justify-between"
              }`}
            >
              {/* Top Row / Header */}
              <div className={`flex justify-between items-start ${viewMode === "list" ? "shrink-0 w-1/4" : "w-full"}`}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f2f3ff] flex items-center justify-center text-[#406900] group-hover:bg-[#81b441]/10 group-hover:scale-105 transition-all">
                    <AdaptiveIcon name={model.avatarIcon} size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#131b2e] group-hover:text-[#406900] transition-colors leading-tight">
                      {model.name}
                    </h3>
                    <p className="text-[11px] text-[#434939]/60 font-medium leading-none mt-1">
                      {model.type}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tagline/Description */}
              <div className={`${viewMode === "list" ? "flex-1 px-4 border-l border-r border-[#c3c9b4]/10" : ""}`}>
                <h4 className="text-xs font-bold text-[#131b2e] line-clamp-1">{model.tagline}</h4>
                <p className="text-xs text-[#434939] line-clamp-2 mt-1 leading-relaxed">
                  {model.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 py-3 border-t border-b border-[#c3c9b4]/10 my-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#434939]/50 uppercase tracking-wide">Latency</span>
                    <span className="text-sm font-extrabold text-[#10B981] block">{model.latency}ms avg</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#434939]/50 uppercase tracking-wide">
                      {model.throughput ? "Throughput" : "CWV Score"}
                    </span>
                    <span className="text-sm font-extrabold text-[#406900] block">
                      {model.throughput ? `${model.throughput} t/s` : `${model.cwvScore}/100`}
                    </span>
                  </div>
                </div>

                {/* Framework Labels */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {model.frameworks.map((fw) => (
                    <span
                      key={fw}
                      className="px-2 py-0.5 bg-[#f2f3ff] text-[#434939]/80 rounded text-[10px] font-bold tracking-tight"
                    >
                      {fw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price Action Footer block */}
              <div className={`flex items-center justify-between mt-auto pt-4 ${viewMode === "list" ? "w-1/4 select-none shrink-0" : ""}`}>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-[#131b2e] leading-none">{model.price}</span>
                  <span className="text-[10px] text-[#434939]/70 font-semibold">{model.priceUnit}</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate("detail", model.id);
                  }}
                  className="bg-[#064E3B] hover:bg-[#043326] text-white text-xs font-semibold px-4 py-2 rounded-xl scale-100 active:scale-95 transition-all shadow-md cursor-pointer shrink-0"
                >
                  {model.numericPrice === 0 ? "Get Code" : "Deploy Now"}
                </button>
              </div>

              {/* Verified Badge Header right */}
              {model.isVerified && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#adedd3] text-[#306d58] px-2 py-0.5 rounded text-[10px] font-extrabold">
                  <AdaptiveIcon name="check_circle" size={10} />
                  <span>Verified</span>
                </div>
              )}
              {model.auditPassed && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#eaedff] text-[#283044] px-2 py-0.5 rounded text-[10px] font-extrabold">
                  <AdaptiveIcon name="shield" size={10} />
                  <span>Audit Pass</span>
                </div>
              )}
              {model.isSOTA && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#81b441] text-white px-2 py-0.5 rounded text-[10px] font-extrabold">
                  <AdaptiveIcon name="sparkles" size={10} />
                  <span>SOTA</span>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
