import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft, Sparkles, Layers } from "lucide-react";

export const metadata = {
  title: "Nirvana vs Zen Browser — Independent Gecko Innovation",
  description:
    "An objective comparison between Nirvana Browser and Zen Browser. Desktop vertical tab workspaces vs mobile Android calm ergonomics.",
};

export default function ZenComparisonPage() {
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
          <span className="micro-label text-brand">Modern Gecko Projects</span>
          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal">
            Nirvana vs Zen Browser
          </h1>
          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Both Nirvana and Zen represent the cutting edge of independent innovation built on the Firefox/Gecko engine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Zen Browser is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Desktop power users on macOS, Windows, and Linux who want an Arc-style vertical tab sidebar, tab split view grids, and workspace switching powered by Gecko.
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-brand/20 shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Nirvana is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Android mobile users who want single-handed bottom toolbar controls, pre-configured uBlock Origin, and calm, quiet mobile web navigation.
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
          <h3 className="text-xl font-serif-display text-charcoal">Complementary Ecosystems</h3>
          <p className="text-xs sm:text-sm text-charcoal-soft leading-relaxed">
            Rather than competing directly, Zen and Nirvana solve different ends of the modern browser puzzle. Zen pioneers radical vertical tab and split view interfaces for large desktop monitors, while Nirvana reimagines thumb ergonomics and quiet computing for mobile phones. Both celebrate the independence and security of Gecko.
          </p>
        </div>
      </div>
    </div>
  );
}

