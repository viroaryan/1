"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, ChevronUp, Search, ExternalLink } from "lucide-react";
import { SageMatchaBackground } from "@/components/ui/AtmosphericBackground";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      q: "What is Nirvana Browser?",
      a: "Nirvana Browser is an independent, privacy-first web browser for Android devices built from the Firefox open-source codebase. It is designed to offer a quieter, cleaner web experience with single-handed bottom toolbar ergonomics, built-in uBlock Origin, and minimized telemetry.",
    },
    {
      q: "Is Nirvana based on Firefox?",
      a: "Yes. Nirvana is based on the Mozilla Firefox open-source codebase, utilizing Mozilla's high-performance GeckoView rendering engine and SpiderMonkey JavaScript runtime under the Mozilla Public License 2.0 (MPL 2.0).",
    },
    {
      q: "Does Mozilla own Nirvana?",
      a: "No. Nirvana is an independent project created and led by Abhiraj Aryan and a small dedicated team. It is not owned, operated, or officially endorsed by the Mozilla Corporation or the Mozilla Foundation.",
    },
    {
      q: "How is Nirvana different from Firefox?",
      a: "While retaining the world-class GeckoView engine, Nirvana redesigns the user interface for mobile ergonomics (including bottom address bar placement and clean layout rules), strips out unnecessary diagnostic and telemetry beacons where technically possible, bundles uBlock Origin out-of-the-box, and introduces unique calm aesthetic themes like Aurora Borealis.",
    },
    {
      q: "Does Nirvana support extensions?",
      a: "Yes. Unlike most Android browsers built on Chromium that disable extensions, Nirvana supports full desktop-class Gecko WebExtensions on Android through the GeckoView add-on framework.",
    },
    {
      q: "Does Nirvana support uBlock Origin?",
      a: "Yes. uBlock Origin is fully supported and enabled out-of-the-box to provide CPU- and battery-efficient ad and tracking script filtering from your very first launch.",
    },
    {
      q: "What search engines can I use?",
      a: "Nirvana lets you choose freely between Google, DuckDuckGo, Microsoft Bing, and Wikipedia. You can switch your search provider globally in Settings or per-query right from the address bar switcher.",
    },
    {
      q: "Does Nirvana collect telemetry?",
      a: "Our team has audited upstream diagnostic pipelines and deactivated or stripped unnecessary telemetry beacons, ad identifiers, and usage tracking hooks. We do not operate remote user profiling servers. However, because browser engines are massive multi-million line codebases, we avoid misleading claims like '100% zero telemetry' and instead provide verified network transparency.",
    },
    {
      q: "What data does Nirvana store on my device?",
      a: "Nirvana only stores local machine state necessary for web functionality: open tabs, saved bookmarks, cached images, and site cookies. All cookies are isolated using Total Cookie Protection, and everything can be configured to auto-purge upon quitting the app.",
    },
    {
      q: "Does Nirvana support VPN?",
      a: "VPN capability is currently an experimental concept in our laboratory roadmap (associated with the future Nirvana Nivro project). It is not currently deployed in the general release of Nirvana 1.0.2.",
    },
    {
      q: "Is the VPN in beta?",
      a: "Yes, advanced network tunneling and VPN integration are in close testing and conceptual development. We never present unreleased network infrastructure as finished software.",
    },
    {
      q: "What is private browsing mode?",
      a: "Private browsing creates an ephemeral session that stores no cookies, history, or cached assets to device storage. When you close your private tabs, the entire session container is wiped from RAM.",
    },
    {
      q: "What happens when I enable delete-on-quit?",
      a: "When enabled in Settings, swiping Nirvana away from your Android recent apps tray triggers an automated purge of your chosen categories: open tabs, browsing history, cookies, cached files, and site permissions.",
    },
    {
      q: "Is Nirvana open source?",
      a: "Yes. Nirvana is committed to open-source software. The upstream browser engine is available under the Mozilla Public License 2.0, and our public modifications are accessible on GitHub.",
    },
    {
      q: "What licenses are used?",
      a: "Upstream Firefox source code is governed primarily by the Mozilla Public License 2.0 (MPL 2.0), alongside components under BSD, MIT, Apache 2.0, and LGPL. Included extensions like uBlock Origin are under GPLv3. You can review our full breakdown on our /licenses page.",
    },
    {
      q: "Where can I download Nirvana?",
      a: "Nirvana is available for official download on the Google Play Store (org.nirvana) for all devices running Android 8.0 through Android 16. Direct verified APK packages are also provided on our /download page.",
    },
    {
      q: "How can I report a bug or crash?",
      a: "You can report bugs directly via our GitHub repository issues, on our community Telegram group, or through our interactive feedback form at /suggestions.",
    },
    {
      q: "How can I contribute to Nirvana?",
      a: "We welcome contributions in Android engineering, Gecko debugging, UI/UX design, translation, and QA testing. Visit our /contribute page to get started.",
    },
    {
      q: "How can I join the team?",
      a: "We are actively looking for passionate open-source builders, developers, and designers. Fill out the application form on our /join page to connect directly with founder Abhiraj Aryan.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen overflow-hidden theme-light-surface">
      <SageMatchaBackground />
      <div className="relative z-10 pt-28 pb-24 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto space-y-12 text-left">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answers & Transparency</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Honest, precise answers to common questions about Nirvana Browser, our Firefox roots, licensing, privacy model, and community.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-black/[0.08] shadow-sm focus-within:ring-2 focus-within:ring-brand/30">
            <Search className="w-5 h-5 text-charcoal-muted shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or keywords (e.g., telemetry, uBlock, licenses, Mozilla)..."
              className="flex-1 text-sm bg-transparent outline-none text-charcoal placeholder:text-charcoal-muted/60"
            />
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-black/[0.06] shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-serif-display text-charcoal">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-charcoal-muted shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal-muted leading-relaxed border-t border-black/[0.04]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? */}
        <div className="p-8 rounded-3xl liquid-glass border border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-serif-display text-charcoal">
              Have a question not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
              Connect directly with our community on Telegram or submit a suggestion.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="https://t.me/nirvanabrowser"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-brand text-white text-xs font-mono uppercase tracking-wider hover:bg-brand-hover shadow-sm"
            >
              Ask on Telegram
            </a>
            <Link
              href="/suggestions"
              className="px-5 py-2.5 rounded-full bg-white border border-black/[0.08] text-charcoal text-xs font-mono uppercase tracking-wider hover:bg-black/[0.03]"
            >
              Feedback
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

