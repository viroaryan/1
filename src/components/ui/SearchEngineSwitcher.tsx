"use client";

import React, { useState } from "react";
import { Search, ExternalLink, ShieldCheck, Check } from "lucide-react";

interface SearchEngine {
  id: string;
  name: string;
  badge: string;
  description: string;
  privacy: string;
  color: string;
}

export default function SearchEngineSwitcher() {
  const engines: SearchEngine[] = [
    {
      id: "ddg",
      name: "DuckDuckGo",
      badge: "Privacy Focused",
      description: "No profiling, no tracker logs, uncompromised query independence.",
      privacy: "Strictly Non-tracking",
      color: "bg-orange-50 border-orange-200 text-orange-700",
    },
    {
      id: "google",
      name: "Google Search",
      badge: "Broadest Index",
      description: "World-class indexing, query suggestions, and rich media results.",
      privacy: "Isolated by Nirvana Cookie Shield",
      color: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      id: "bing",
      name: "Microsoft Bing",
      badge: "Deep Enterprise & Web",
      description: "Rich contextual answers, image search, and comprehensive catalog.",
      privacy: "Isolated by Nirvana Cookie Shield",
      color: "bg-cyan-50 border-cyan-200 text-cyan-700",
    },
    {
      id: "wikipedia",
      name: "Wikipedia (en)",
      badge: "Knowledge First",
      description: "Direct reference lookup without ad intermediation or search engine SEO noise.",
      privacy: "Non-profit Open Web",
      color: "bg-stone-50 border-stone-200 text-stone-700",
    },
  ];

  const [selectedEngine, setSelectedEngine] = useState<SearchEngine>(engines[0]);
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-3xl mx-auto rounded-3xl liquid-glass border border-black/[0.08] p-6 sm:p-8 shadow-float">
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-black/[0.06]">
        <div>
          <span className="micro-label text-brand">Search Independence</span>
          <h4 className="text-xl font-serif-display text-charcoal mt-0.5">
            You Choose Your Gateway to Information
          </h4>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white border border-black/[0.06] text-charcoal-muted">
          No Search Monopoly
        </span>
      </div>

      {/* Interactive Search Bar Simulation */}
      <div className="mt-6 relative">
        <div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-white border border-black/[0.08] shadow-sm focus-within:ring-2 focus-within:ring-brand/30 transition-all">
          <Search className="w-5 h-5 text-charcoal-muted shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search with ${selectedEngine.name} or type URL...`}
            className="flex-1 text-sm bg-transparent outline-none text-charcoal placeholder:text-charcoal-muted/60"
          />
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/[0.04] text-charcoal-muted">
            {selectedEngine.name}
          </span>
        </div>
      </div>

      {/* Engine Selection Chips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        {engines.map((engine) => {
          const isSelected = selectedEngine.id === engine.id;
          return (
            <button
              key={engine.id}
              onClick={() => setSelectedEngine(engine)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between gap-2 ${
                isSelected
                  ? "bg-white border-brand shadow-md ring-1 ring-brand/30"
                  : "bg-white/60 hover:bg-white border-black/[0.05] hover:border-black/[0.12]"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-sm font-semibold text-charcoal flex items-center gap-2">
                  {engine.name}
                  {isSelected && <Check className="w-4 h-4 text-brand" />}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${engine.color}`}>
                  {engine.badge}
                </span>
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                {engine.description}
              </p>
              <div className="text-[10px] font-mono text-charcoal-faded flex items-center gap-1 pt-1 border-t border-black/[0.04]">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                {engine.privacy}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-black/[0.06] text-xs text-charcoal-muted flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[11px]">
        <span>Nirvana does not index or monetize your queries.</span>
        <span>Set default or switch per tab in Settings.</span>
      </div>
    </div>
  );
}
