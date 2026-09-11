import React from "react";
import Link from "next/link";
import { CheckCircle2, Clock, Sparkles, Layers, ArrowRight, ShieldCheck, Compass, GitBranch, Terminal } from "lucide-react";

export const metadata = {
  title: "Product Roadmap — Nirvana Browser & Ecosystem",
  description:
    "Explore the public engineering trajectory of Nirvana Browser: Current stable release, Next milestone, In Development tools, Experimental research, and Future horizons.",
};

export default function RoadmapPage() {
  const milestones = [
    {
      version: "v1.0.2 Stable",
      phase: "CURRENT",
      tag: "Shipped & Audited",
      statusBadge: "Shipped",
      statusStyle: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      icon: CheckCircle2,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50 border-emerald-200",
      title: "Core Privacy Architecture & Stable Release",
      subtitle: "Flagship production release on Google Play and GitHub for Android 8.0 through Android 16.",
      items: [
        "GeckoView 153.0.4 engine upstream integration",
        "Total Cookie Protection enabled by default (Partitioned State)",
        "uBlock Origin native extension bundling out-of-the-box",
        "Configurable bottom address bar ergonomics for one-handed reach",
        "Granular Delete on Quit data purges (cache, cookies, history)",
        "Aurora Borealis launcher icon system and OLED dark theme",
      ],
    },
    {
      version: "v1.1.0 Milestone",
      phase: "NEXT",
      tag: "Q2 2026",
      statusBadge: "In Progress",
      statusStyle: "bg-blue-50 text-blue-700 border-blue-200/80",
      icon: GitBranch,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50 border-blue-200",
      title: "Performance Synchronization & Extension Library",
      subtitle: "Engine optimization, verified add-ons expansion, and enhanced privacy compliance reporting.",
      items: [
        "GeckoView 154 / 155 engine synchronization and security patches",
        "Additional verified extensions (SponsorBlock, Violentmonkey)",
        "Expanded reader view typography scaling and line-height controls",
        "Global Privacy Control (GPC) compliance verification dashboard",
      ],
    },
    {
      version: "Ecosystem v0.9",
      phase: "IN DEVELOPMENT",
      tag: "Active Engineering",
      statusBadge: "Active Development",
      statusStyle: "bg-purple-50 text-purple-700 border-purple-200/80",
      icon: Layers,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50 border-purple-200",
      title: "Companion Utility Ecosystem",
      subtitle: "Lightweight single-purpose companion applications and cryptographic synchronization.",
      items: [
        "Nirvana Focus: Single-tab ephemeral link opener for messaging apps",
        "Nirvana OpenStore: ~30MB curated open-source discovery repository",
        "Biometric password vault backup with encrypted Argon2 key derivation",
        "End-to-End Encrypted Firefox Sync compatibility bridge",
      ],
    },
    {
      version: "Core Privacy Labs",
      phase: "EXPERIMENTAL",
      tag: "Research & Prototyping",
      statusBadge: "Experimental",
      statusStyle: "bg-amber-50 text-amber-700 border-amber-200/80",
      icon: Sparkles,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50 border-amber-200",
      title: "On-Device Intelligence & Query Obfuscation",
      subtitle: "Hardware-accelerated client-side intelligence and anti-fingerprinting research.",
      items: [
        "Nirvana Nivro: Multi-provider search query randomization and routing",
        "Local on-device neural summarization powered by Android NPU",
        "Custom DNS over HTTPS encrypted upstream presets (Mullvad, Quad9)",
        "Canvas and WebGL fingerprint noise injection prototypes",
      ],
    },
    {
      version: "Horizon Phase",
      phase: "FUTURE",
      tag: "Architecture Exploration",
      statusBadge: "Planned",
      statusStyle: "bg-zinc-100 text-zinc-700 border-zinc-200",
      icon: Compass,
      iconColor: "text-zinc-600",
      iconBg: "bg-zinc-100 border-zinc-200",
      title: "Cross-Platform & Decentralized Protocols",
      subtitle: "Expanding beyond mobile into desktop environments and distributed web protocols.",
      items: [
        "Nirvana Perl: Peer-to-peer WebRTC encrypted direct messaging client",
        "Nirvana Desktop: Architecture study for Linux, macOS, and Windows",
        "Decentralized web protocol research (IPFS, Gemini, ENS)",
      ],
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12 text-left">
        {/* Header */}
        <div className="space-y-4">
          <div className="apple-badge">
            <Clock className="w-3.5 h-3.5 text-zinc-600" />
            <span>Product Roadmap</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
            Engineering Milestones
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl">
            Our public engineering trajectory. We do not invent artificial launch deadlines; we ship when code is stable, verified, and audited against privacy leaks.
          </p>
        </div>

        {/* Milestone Timeline Cards */}
        <div className="space-y-6">
          {milestones.map((m, idx) => {
            const IconComponent = m.icon;
            return (
              <div
                key={idx}
                className="apple-card-light p-7 sm:p-9 space-y-6"
              >
                {/* Milestone Top Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-5">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-zinc-100 text-zinc-800 border border-zinc-200">
                        {m.version}
                      </span>
                      <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${m.statusStyle}`}>
                        {m.statusBadge}
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">
                        • {m.tag}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 pt-1">
                      {m.title}
                    </h2>
                    <p className="text-sm text-zinc-500 font-normal">
                      {m.subtitle}
                    </p>
                  </div>

                  <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border ${m.iconBg} ${m.iconColor}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Milestone Items Grid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {m.items.map((item, iIdx) => (
                    <li
                      key={iIdx}
                      className="flex items-start gap-3 text-sm text-zinc-700 bg-zinc-50/70 p-3 rounded-xl border border-zinc-200/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-zinc-800 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="apple-card-light p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-dashed">
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-zinc-900">
              Contribute or inspect the source code
            </h3>
            <p className="text-sm text-zinc-500 font-normal">
              Nirvana Browser is 100% open source under Mozilla Public License 2.0.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://github.com/viroaryan"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-ghost text-xs"
            >
              GitHub Repository
            </a>
            <Link
              href="/download"
              className="apple-btn-primary text-xs"
            >
              Download Latest
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
