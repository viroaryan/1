import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft, Check, X, Shield, Globe2 } from "lucide-react";

export const metadata = {
  title: "Nirvana vs Google Chrome — Honest Browser Comparison",
  description:
    "An objective comparison between Nirvana Browser and Google Chrome. Analyzing Google ecosystem integration vs independent Gecko privacy.",
};

export default function ChromeComparisonPage() {
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
          <span className="micro-label text-brand">Side-by-Side Analysis</span>
          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal">
            Nirvana vs Google Chrome
          </h1>
          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Comparing Google&apos;s dominant commercial browser with Nirvana&apos;s independent privacy architecture.
          </p>
        </div>

        {/* Best For & Quick Verdict */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Google Chrome is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Users deeply embedded in Google Workspace, Gmail, Google Pay, and requiring universal cross-platform syncing across Windows, Mac, iOS, Android, and Chromebooks.
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-brand/20 shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Nirvana is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Android users seeking a calm mobile web free from Google telemetry, with built-in uBlock Origin and single-handed bottom address bar ergonomics.
            </div>
          </div>
        </div>

        {/* Detailed Breakdown Sections */}
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
            <h3 className="text-xl font-serif-display text-charcoal">Strengths & Advantages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-charcoal-muted leading-relaxed">
              <div>
                <strong className="text-charcoal block mb-1">Google Chrome:</strong>
                Industry standard web compatibility, blazing fast V8 engine execution, unparalleled developer tooling, native Google autofill and password sync.
              </div>
              <div>
                <strong className="text-charcoal block mb-1">Nirvana Browser:</strong>
                Zero commercial profile logging, GeckoView independent engine, uBlock Origin extension support on mobile Android, Total Cookie Protection.
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
            <h3 className="text-xl font-serif-display text-charcoal">Weaknesses & Trade-Offs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-charcoal-muted leading-relaxed">
              <div>
                <strong className="text-charcoal block mb-1">Google Chrome:</strong>
                Aggressive telemetry pipelines, user behavior monetization, complete absence of extension support on Android, fixed top address bar.
              </div>
              <div>
                <strong className="text-charcoal block mb-1">Nirvana Browser:</strong>
                No native desktop browser release yet (Android-first), smaller developer team than Google, no proprietary cloud sync infrastructure yet.
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
            <h3 className="text-xl font-serif-display text-charcoal">Privacy & Telemetry Model</h3>
            <p className="text-xs sm:text-sm text-charcoal-soft leading-relaxed">
              Chrome is fundamentally engineered to support Google&apos;s digital advertising and telemetry business model. While Chrome provides basic incognito and sandbox isolation, your usage is intrinsically tied to Google identity. Nirvana strips out background telemetry beacons and enforces strict per-domain cookie containers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
