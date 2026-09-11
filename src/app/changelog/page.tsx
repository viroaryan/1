"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, Shield, Sparkles, Zap, Wrench, CheckCircle2 } from "lucide-react";

export default function ChangelogPage() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const releases = [
    {
      version: "v1.0.2",
      build: "Build #2016178885",
      engine: "GeckoView 153.0.4-20260810162159 · Android Components 153.0",
      date: "August 10, 2026",
      target: "Android 16 Ready",
      highlights:
        "Engine upgrade to GeckoView 153.0.4, total cookie protection hardening, bottom address bar stabilization, and updated uBlock Origin filter rules.",
      categories: ["UI", "PRIVACY", "PERFORMANCE", "SECURITY", "FIXES"],
      changes: [
        {
          type: "PRIVACY",
          text: "Deactivated unnecessary upstream background diagnostic beacons and telemetry pings.",
        },
        {
          type: "UI",
          text: "Stabilized the single-handed bottom address bar transitions across Android 16 predictive back gestures.",
        },
        {
          type: "SECURITY",
          text: "Incorporated upstream GeckoView 153.0.4 critical security advisories and WebAssembly sandbox patches.",
        },
        {
          type: "PERFORMANCE",
          text: "Reduced background tab memory overhead by 18% through aggressive script suspension.",
        },
        {
          type: "FIXES",
          text: "Fixed a crash when switching app icons between Classic and Aurora Borealis on select OEM Android skins.",
        },
      ],
    },
    {
      version: "v1.0.1",
      build: "Build #2016142100",
      engine: "GeckoView 152.0.2 · Android Components 152.0",
      date: "June 24, 2026",
      target: "Android 8.0 - 15",
      highlights:
        "Initial uBlock Origin bundling, improved Delete on Quit checkboxes, and dark reader extension verification.",
      categories: ["UI", "PRIVACY", "FIXES"],
      changes: [
        {
          type: "PRIVACY",
          text: "Implemented granular Delete on Quit dialog with individual toggles for tabs, history, cookies, and cache.",
        },
        {
          type: "UI",
          text: "Refined the unified bottom-sheet menu for faster access to passwords and extensions.",
        },
        {
          type: "FIXES",
          text: "Resolved an issue where custom search engine selections were reset after clearing cache.",
        },
      ],
    },
    {
      version: "v1.0.0",
      build: "Build #2016100012",
      engine: "GeckoView 150.0.1 · Android Components 150.0",
      date: "March 15, 2026",
      target: "Public Release",
      highlights:
        "Inaugural public release of Nirvana Browser. Forked from Firefox, built with GeckoView, featuring Calm Computing aesthetics.",
      categories: ["UI", "PRIVACY", "PERFORMANCE"],
      changes: [
        {
          type: "PRIVACY",
          text: "Initial independent build with Total Cookie Protection and telemetry minimization.",
        },
        {
          type: "UI",
          text: "Calm Computing design system debut: ivory, graphite, and liquid glass navigation.",
        },
        {
          type: "PERFORMANCE",
          text: "Optimized cold start launch times on mid-range Android chipsets.",
        },
      ],
    },
  ];

  const filters = ["ALL", "UI", "PRIVACY", "PERFORMANCE", "SECURITY", "FIXES"];

  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12 text-left">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Clock className="w-3.5 h-3.5" />
            <span>Release History & Build Log</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Release Changelog
          </h1>

          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Every build of Nirvana Browser is documented with technical precision: engine versions, privacy patches, UI refinements, and stability fixes.
          </p>
        </div>

        {/* Filter Strip */}
        <div className="flex flex-wrap items-center gap-2 border-b border-black/[0.08] pb-4">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
                activeFilter === f
                  ? "bg-charcoal text-white font-semibold"
                  : "bg-white text-charcoal-muted hover:text-charcoal border border-black/[0.05]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-12 relative before:absolute before:top-4 before:bottom-4 before:left-3 sm:before:left-4 before:w-0.5 before:bg-black/[0.08]">
          {releases.map((rel, idx) => {
            const visibleChanges =
              activeFilter === "ALL"
                ? rel.changes
                : rel.changes.filter((c) => c.type === activeFilter);

            if (activeFilter !== "ALL" && visibleChanges.length === 0) {
              return null;
            }

            return (
              <div key={idx} className="relative pl-8 sm:pl-12 space-y-4 group">
                {/* Timeline Dot */}
                <div className="absolute top-1.5 left-1.5 sm:left-2.5 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-brand shadow-sm" />

                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/[0.05] pb-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-serif-display text-charcoal">
                          {rel.version}
                        </h2>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-black/[0.04] text-charcoal-muted">
                          {rel.build}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-brand mt-0.5">
                        {rel.engine}
                      </div>
                    </div>
                    <div className="text-xs font-mono text-charcoal-muted">
                      {rel.date} · {rel.target}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-soft leading-relaxed font-medium">
                    {rel.highlights}
                  </p>

                  <div className="space-y-2 pt-2">
                    {visibleChanges.map((change, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-start gap-2.5 text-xs text-charcoal-muted leading-relaxed"
                      >
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase font-semibold shrink-0 mt-0.5 ${
                            change.type === "PRIVACY"
                              ? "bg-emerald-100 text-emerald-800"
                              : change.type === "UI"
                              ? "bg-purple-100 text-purple-800"
                              : change.type === "SECURITY"
                              ? "bg-rose-100 text-rose-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {change.type}
                        </span>
                        <span>{change.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

