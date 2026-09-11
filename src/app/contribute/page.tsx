import React from "react";
import Link from "next/link";
import {
  Code2,
  Bug,
  Languages,
  PenTool,
  FileCheck,
  ShieldAlert,
  Share2,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Contribute to Nirvana — Open Source Participation Guide",
  description:
    "How to contribute to Nirvana Browser: code development, QA testing, UI design, localization translations, and security vulnerability reports.",
};

export default function ContributePage() {
  const ways = [
    {
      title: "Code & Architecture",
      icon: Code2,
      desc: "Help optimize GeckoView build flags, implement new WebExtension hooks, or refine Android Kotlin components.",
    },
    {
      title: "QA & Device Testing",
      icon: Bug,
      desc: "Test new releases across different Android skins (One UI, Pixel UI, OxygenOS, MIUI) to spot rendering bugs.",
    },
    {
      title: "UI / UX Design",
      icon: PenTool,
      desc: "Refine our Calm Computing visual language, design new app icons, and craft frictionless thumb interactions.",
    },
    {
      title: "Localization & Translation",
      icon: Languages,
      desc: "Translate Nirvana's interface and privacy explanations into 30+ regional and global languages.",
    },
    {
      title: "Documentation & Guides",
      icon: FileCheck,
      desc: "Write clear tutorials and FAQ answers helping everyday users escape commercial surveillance.",
    },
    {
      title: "Security Research",
      icon: ShieldAlert,
      desc: "Audit our network traffic, investigate third-party script containment, and responsibly report vulnerabilities.",
    },
  ];

  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-[#F7F7F3] min-h-screen">
      <div className="max-w-5xl mx-auto space-y-16 text-left">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Code2 className="w-3.5 h-3.5" />
            <span>Community Contribution</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            How you can help build Nirvana.
          </h1>

          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            You don&apos;t have to be a C++ browser engine compiler wizard to help. Independent software thrives through community testing, translation, design, and feedback.
          </p>
        </div>

        {/* Contribution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ways.map((w, idx) => {
            const Icon = w.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-2.5 rounded-2xl bg-[#F7F7F3] text-brand w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif-display text-charcoal">
                    {w.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.06] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-serif-display text-charcoal">
              Start on GitHub
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              Fork the repository, review open issues, and join our builder community.
            </p>
          </div>

          <a
            href="https://github.com/viroaryan"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3.5 rounded-full bg-brand text-white text-xs font-mono uppercase tracking-wider hover:bg-brand-hover shadow-glow inline-flex items-center gap-2 shrink-0"
          >
            <span>View GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
