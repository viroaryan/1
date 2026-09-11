"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Scale,
  Check,
  X,
  Minus,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Shield,
  ArrowRight,
} from "lucide-react";

interface ComparisonRow {
  category: string;
  criterion: string;
  nirvana: string;
  nirvanaStatus: "yes" | "partial" | "no";
  chrome: string;
  chromeStatus: "yes" | "partial" | "no";
  firefox: string;
  firefoxStatus: "yes" | "partial" | "no";
  brave: string;
  braveStatus: "yes" | "partial" | "no";
  mullvad: string;
  mullvadStatus: "yes" | "partial" | "no";
  zen: string;
  zenStatus: "yes" | "partial" | "no";
}

export default function CompareMasterPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const rows: ComparisonRow[] = [
    {
      category: "privacy",
      criterion: "Telemetry Architecture",
      nirvana: "Stripped & Minimized",
      nirvanaStatus: "yes",
      chrome: "Extensive Ad & Sync Profiling",
      chromeStatus: "no",
      firefox: "Standard Opt-Out Diagnostics",
      firefoxStatus: "partial",
      brave: "Privacy Preserving (P3A)",
      braveStatus: "yes",
      mullvad: "Zero Telemetry (Strict)",
      mullvadStatus: "yes",
      zen: "Zero Telemetry",
      zenStatus: "yes",
    },
    {
      category: "privacy",
      criterion: "Total Cookie Protection",
      nirvana: "Built-in (GeckoView)",
      nirvanaStatus: "yes",
      chrome: "Third-party Cookie Deprecation",
      chromeStatus: "partial",
      firefox: "Built-in Native",
      firefoxStatus: "yes",
      brave: "Partitioned Shields",
      braveStatus: "yes",
      mullvad: "Per-Domain Isolation",
      mullvadStatus: "yes",
      zen: "Built-in Native",
      zenStatus: "yes",
    },
    {
      category: "extensions",
      criterion: "Mobile Android Extensions",
      nirvana: "Full uBlock & Addons",
      nirvanaStatus: "yes",
      chrome: "Disabled on Android",
      chromeStatus: "no",
      firefox: "Supported Addons",
      firefoxStatus: "yes",
      brave: "Shields Only (No WebExt)",
      braveStatus: "partial",
      mullvad: "Desktop Only (No Mobile)",
      mullvadStatus: "no",
      zen: "Desktop Only (No Mobile)",
      zenStatus: "no",
    },
    {
      category: "extensions",
      criterion: "Ad Blocking Default",
      nirvana: "uBlock Origin Enabled",
      nirvanaStatus: "yes",
      chrome: "None (Manifest V3 Limits)",
      chromeStatus: "no",
      firefox: "ETP (Requires Extension)",
      firefoxStatus: "partial",
      brave: "Brave Shields Built-in",
      braveStatus: "yes",
      mullvad: "uBlock Origin Pre-bundled",
      mullvadStatus: "yes",
      zen: "Requires User Install",
      zenStatus: "partial",
    },
    {
      category: "platform",
      criterion: "Desktop Availability",
      nirvana: "Mobile Focused (Planned)",
      nirvanaStatus: "partial",
      chrome: "Full Mac/Win/Linux/ChromeOS",
      chromeStatus: "yes",
      firefox: "Full Mac/Win/Linux",
      firefoxStatus: "yes",
      brave: "Full Mac/Win/Linux",
      braveStatus: "yes",
      mullvad: "Full Mac/Win/Linux",
      mullvadStatus: "yes",
      zen: "Full Mac/Win/Linux",
      zenStatus: "yes",
    },
    {
      category: "platform",
      criterion: "Underlying Engine",
      nirvana: "GeckoView 153 (Independent)",
      nirvanaStatus: "yes",
      chrome: "Blink (Google Chromium)",
      chromeStatus: "partial",
      firefox: "Gecko (Mozilla)",
      firefoxStatus: "yes",
      brave: "Blink (Google Chromium)",
      braveStatus: "partial",
      mullvad: "Gecko (Mozilla/Tor Base)",
      mullvadStatus: "yes",
      zen: "Gecko (Mozilla Base)",
      zenStatus: "yes",
    },
    {
      category: "ergonomics",
      criterion: "Bottom Toolbar on Mobile",
      nirvana: "Native Single-Handed Toggle",
      nirvanaStatus: "yes",
      chrome: "Top-Only Fixed",
      chromeStatus: "no",
      firefox: "Top or Bottom Toggle",
      firefoxStatus: "yes",
      brave: "Bottom Bar Available",
      braveStatus: "yes",
      mullvad: "N/A (No Mobile)",
      mullvadStatus: "no",
      zen: "N/A (No Mobile)",
      zenStatus: "no",
    },
    {
      category: "ergonomics",
      criterion: "Delete Browsing Data on Quit",
      nirvana: "Granular Automatic Purge",
      nirvanaStatus: "yes",
      chrome: "Manual Clear Only",
      chromeStatus: "no",
      firefox: "Configurable On Quit",
      firefoxStatus: "yes",
      brave: "Configurable On Exit",
      braveStatus: "yes",
      mullvad: "Session Purged on Close",
      mullvadStatus: "yes",
      zen: "Configurable On Exit",
      zenStatus: "yes",
    },
    {
      category: "sync",
      criterion: "Cross-Device Sync Maturity",
      nirvana: "In Development",
      nirvanaStatus: "partial",
      chrome: "Mature Google Account Sync",
      chromeStatus: "yes",
      firefox: "Mature End-to-End Firefox Sync",
      firefoxStatus: "yes",
      brave: "Sync Chain (No Accounts)",
      braveStatus: "yes",
      mullvad: "No Sync by Design",
      mullvadStatus: "no",
      zen: "Firefox Sync Compatible",
      zenStatus: "yes",
    },
  ];

  const filteredRows =
    activeCategory === "all"
      ? rows
      : rows.filter((r) => r.category === activeCategory);

  const renderBadge = (status: "yes" | "partial" | "no", text: string) => {
    if (status === "yes") {
      return (
        <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>{text}</span>
        </span>
      );
    }
    if (status === "partial") {
      return (
        <span className="inline-flex items-center gap-1.5 text-amber-700 font-medium">
          <Minus className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>{text}</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 text-zinc-400">
        <X className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
        <span>{text}</span>
      </span>
    );
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 lg:px-12 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12 text-left">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="apple-badge">
            <Scale className="w-3.5 h-3.5 text-zinc-600" />
            <span>Honest Comparative Analysis</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
            No browser is best at everything.
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Here is where each browser stands. We refuse to publish rigged comparison charts where our product artificially scores 100% on every dimension. Every browser represents deliberate architectural trade-offs.
          </p>
        </div>

        {/* Competitor Profile Hub Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { name: "Chrome", href: "/compare/chrome", note: "Ecosystem vs Privacy" },
            { name: "Firefox", href: "/compare/firefox", note: "Parent Lineage" },
            { name: "Brave", href: "/compare/brave", note: "Chromium Shields" },
            { name: "Mullvad", href: "/compare/mullvad", note: "Tor-Derived Hardening" },
            { name: "Zen", href: "/compare/zen", note: "Desktop Vertical Tabs" },
            { name: "Vivaldi", href: "/compare/vivaldi", note: "Power Customization" },
            { name: "DuckDuckGo", href: "/compare/duckduckgo", note: "Search Focus" },
            { name: "Safari", href: "/compare/safari", note: "Apple Ecosystem" },
            { name: "Opera", href: "/compare/opera", note: "Sidebar Features" },
          ].map((c, i) => (
            <Link
              key={i}
              href={c.href}
              className="p-3.5 rounded-xl apple-card-light transition-colors hover:border-zinc-300 group text-left"
            >
              <div className="text-xs font-semibold text-zinc-900 flex items-center justify-between">
                <span>vs {c.name}</span>
                <ArrowRight className="w-3 h-3 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
              </div>
              <div className="text-[11px] text-zinc-500 mt-0.5 font-normal">{c.note}</div>
            </Link>
          ))}
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-zinc-200 pb-4">
          {[
            { id: "all", label: "All Dimensions" },
            { id: "privacy", label: "Privacy & Telemetry" },
            { id: "extensions", label: "Extensions & Ad Blocking" },
            { id: "platform", label: "Platform & Engine" },
            { id: "ergonomics", label: "Mobile Ergonomics" },
            { id: "sync", label: "Sync & Accounts" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs transition-colors ${
                activeCategory === cat.id
                  ? "bg-zinc-900 text-white font-medium shadow-xs"
                  : "bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200 font-normal"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Master Comparison Table */}
        <div className="apple-card-light overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-zinc-50 text-zinc-900 border-b border-zinc-200">
                  <th className="p-4 sm:p-5 font-semibold text-zinc-900 w-1/5">Criterion</th>
                  <th className="p-4 sm:p-5 font-semibold text-zinc-950 bg-zinc-100/80 border-x border-zinc-200 w-1/5">
                    Nirvana (Android)
                  </th>
                  <th className="p-4 sm:p-5 font-medium text-zinc-600">Google Chrome</th>
                  <th className="p-4 sm:p-5 font-medium text-zinc-600">Mozilla Firefox</th>
                  <th className="p-4 sm:p-5 font-medium text-zinc-600">Brave Browser</th>
                  <th className="p-4 sm:p-5 font-medium text-zinc-600">Mullvad Browser</th>
                  <th className="p-4 sm:p-5 font-medium text-zinc-600">Zen Browser</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {filteredRows.map((r, i) => (
                  <tr key={i} className="hover:bg-zinc-50/50 transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-zinc-900">
                      {r.criterion}
                    </td>
                    <td className="p-4 sm:p-5 bg-zinc-50/60 border-x border-zinc-200">
                      {renderBadge(r.nirvanaStatus, r.nirvana)}
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-600">
                      {renderBadge(r.chromeStatus, r.chrome)}
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-600">
                      {renderBadge(r.firefoxStatus, r.firefox)}
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-600">
                      {renderBadge(r.braveStatus, r.brave)}
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-600">
                      {renderBadge(r.mullvadStatus, r.mullvad)}
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-600">
                      {renderBadge(r.zenStatus, r.zen)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Honest Summary Note */}
        <div className="apple-card-light p-6 sm:p-8 space-y-2 border-dashed">
          <div className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">
            Where Competitors Excel Over Nirvana
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed font-normal">
            If you require an all-in-one desktop and mobile browser with seamless cloud tab sync across 5 devices, <strong>Mozilla Firefox</strong> or <strong>Google Chrome</strong> is currently a more mature solution. If you want maximum desktop vertical tab workspaces, <strong>Zen Browser</strong> is extraordinary. Nirvana is specifically focused on delivering the calmest, cleanest, and most ergonomic privacy browser on <strong>Android smartphones</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

