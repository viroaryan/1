import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft, Sliders, Shield } from "lucide-react";

export const metadata = {
  title: "Nirvana vs Vivaldi Browser — Feature Density vs Calm Simplicity",
  description:
    "An objective comparison between Nirvana Browser and Vivaldi. Extreme customization and productivity tools vs Nirvana's minimalist calm computing.",
};

export default function VivaldiComparisonPage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-[#F7F7F3] min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12 text-left">
        <Link
          href="/compare"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-charcoal-muted hover:text-charcoal"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Master Comparison Matrix
        </Link>

        <div className="space-y-3">
          <span className="micro-label text-brand">Philosophy Contrast</span>
          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal">
            Nirvana vs Vivaldi
          </h1>
          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Vivaldi offers arguably the most feature-dense browser in existence. Nirvana takes the opposite philosophical path: radical restraint and quietude.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Vivaldi is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Extreme power users who want hundreds of granular toggles, built-in notes, mail client, calendar, tab stacking, and side panels.
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-brand/20 shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Nirvana is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Users who feel overwhelmed by complex feature menus and prefer a lightweight, serene mobile browser that gets out of the way.
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
          <h3 className="text-xl font-serif-display text-charcoal">Engine Heritage</h3>
          <p className="text-xs sm:text-sm text-charcoal-soft leading-relaxed">
            Vivaldi is based on Chromium, while Nirvana is based on GeckoView. While Vivaldi does admirable work shielding users from trackers, choosing Nirvana actively supports engine diversity on the open web.
          </p>
        </div>
      </div>
    </div>
  );
}
