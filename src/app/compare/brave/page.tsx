import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Nirvana vs Brave Browser — Engine Independence & Shield Philosophies",
  description:
    "An objective comparison between Nirvana Browser and Brave. Chromium vs Gecko engines, built-in Shields vs WebExtensions, and crypto-free calm computing.",
};

export default function BraveComparisonPage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12 text-left">
        <Link
          href="/compare"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-charcoal-muted hover:text-charcoal"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Master Comparison Matrix
        </Link>

        <div className="space-y-3">
          <span className="micro-label text-brand">Architecture & Ethos</span>
          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal">
            Nirvana vs Brave Browser
          </h1>
          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Examining engine independence, WebExtension flexibility, and digital calmness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Brave is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Users who want an aggressive out-of-the-box Chromium ad-blocker with built-in Tor window options, Leo AI assistant, and opt-in Web3/rewards ecosystems.
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-brand/20 shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Nirvana is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Users who want an independent GeckoView engine (preventing Chromium web engine monoculture) and a calm experience completely free of crypto, tokens, or AI upsells.
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
            <h3 className="text-xl font-serif-display text-charcoal">Engine Diversity: Gecko vs Chromium</h3>
            <p className="text-xs sm:text-sm text-charcoal-soft leading-relaxed">
              Brave is built upon Google&apos;s open-source Chromium engine (Blink). While Brave heavily hardens Chromium, relying on Blink contributes to Google&apos;s dominance over web standards (such as Manifest V3 ad-blocker limitations). Nirvana uses GeckoView, preserving true engine diversity on the mobile web.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
            <h3 className="text-xl font-serif-display text-charcoal">Mobile Extensions</h3>
            <p className="text-xs sm:text-sm text-charcoal-soft leading-relaxed">
              Brave on Android does not support general browser extensions; users must rely entirely on Brave&apos;s built-in shield settings. Nirvana allows users to install verified Gecko WebExtensions (such as Dark Reader or custom filter lists) directly on their phones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

