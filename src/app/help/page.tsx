"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Search,
  Shield,
  Layers,
  Puzzle,
  KeyRound,
  Sliders,
  HelpCircle,
  Smartphone,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export default function HelpCenterPage() {
  const [query, setQuery] = useState("");

  const categories = [
    {
      name: "Getting Started",
      icon: Smartphone,
      guides: [
        { title: "First-time setup & onboarding", time: "2 min read" },
        { title: "Setting Nirvana as your default Android browser", time: "1 min read" },
        { title: "Importing bookmarks from other browsers", time: "3 min read" },
      ],
    },
    {
      name: "Privacy & Protection",
      icon: Shield,
      guides: [
        { title: "Configuring Total Cookie Protection", time: "3 min read" },
        { title: "Enabling Delete on Quit for maximum session privacy", time: "2 min read" },
        { title: "How Global Privacy Control (GPC) signals work", time: "4 min read" },
      ],
    },
    {
      name: "Extensions & uBlock",
      icon: Puzzle,
      guides: [
        { title: "Managing uBlock Origin filter lists on mobile", time: "3 min read" },
        { title: "Installing Dark Reader for nighttime reading", time: "2 min read" },
        { title: "Extension process sandboxing & security reviews", time: "4 min read" },
      ],
    },
    {
      name: "Ergonomics & Layout",
      icon: Sliders,
      guides: [
        { title: "Moving the address bar to the bottom of the screen", time: "1 min read" },
        { title: "Selecting Aurora Borealis and custom launcher icons", time: "2 min read" },
        { title: "Configuring simple vs expanded toolbar views", time: "2 min read" },
      ],
    },
    {
      name: "Passwords & Vault",
      icon: KeyRound,
      guides: [
        { title: "Enabling biometric fingerprint unlocks for autofill", time: "2 min read" },
        { title: "Exporting and backing up your local credential vault", time: "3 min read" },
        { title: "Threat model: why cloud sync is disabled by default", time: "4 min read" },
      ],
    },
    {
      name: "Troubleshooting",
      icon: HelpCircle,
      guides: [
        { title: "Resolving site breakage under Strict Tracking Protection", time: "3 min read" },
        { title: "Clearing stuck cache and local storage", time: "2 min read" },
        { title: "How to extract Android crash logs for team review", time: "3 min read" },
      ],
    },
  ];

  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-6xl mx-auto space-y-16 text-left">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Support & Documentation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Nirvana Help Center
          </h1>

          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Clear, step-by-step guides for mastering Nirvana&apos;s privacy settings, extension setup, layout ergonomics, and troubleshooting.
          </p>
        </div>

        {/* Search Header */}
        <div className="max-w-2xl relative">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-black/[0.08] shadow-sm focus-within:ring-2 focus-within:ring-brand/30">
            <Search className="w-5 h-5 text-charcoal-muted shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search help topics, error messages, or guides..."
              className="flex-1 text-sm bg-transparent outline-none text-charcoal placeholder:text-charcoal-muted/60"
            />
          </div>
        </div>

        {/* Guides Categorical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#F7F7F3] text-brand">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-serif-display text-charcoal">
                      {cat.name}
                    </h3>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {cat.guides.map((g, gIdx) => (
                      <li key={gIdx} className="group">
                        <Link
                          href="/faq"
                          className="flex items-center justify-between text-xs text-charcoal-muted hover:text-brand transition-colors py-1"
                        >
                          <span className="leading-snug">{g.title}</span>
                          <span className="text-[10px] font-mono shrink-0 ml-2 opacity-60">
                            {g.time}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-black/[0.04]">
                  <Link
                    href="/faq"
                    className="text-xs font-mono text-brand hover:underline inline-flex items-center gap-1"
                  >
                    View related answers →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

