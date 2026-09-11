import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft, HeartHandshake, Shield } from "lucide-react";

export const metadata = {
  title: "Nirvana vs Mozilla Firefox — Shared DNA & Independent Direction",
  description:
    "An objective comparison between Nirvana Browser and upstream Mozilla Firefox. Shared GeckoView engine heritage vs Nirvana mobile-first ergonomics and stripped telemetry.",
};

export default function FirefoxComparisonPage() {
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
          <span className="micro-label text-brand">Shared Heritage & Lineage</span>
          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal">
            Nirvana vs Mozilla Firefox
          </h1>
          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Understanding the bond between upstream Firefox and Nirvana&apos;s independent mobile craft.
          </p>
        </div>

        {/* Best For */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Mozilla Firefox is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Users who want an established, multi-platform browser with mature end-to-end encrypted Firefox Sync across desktop and mobile, backed by the Mozilla Foundation.
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-brand/20 shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Nirvana is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Android users seeking a calm, clutter-free mobile UI with uBlock Origin enabled out-of-the-box and telemetry minimized where technically feasible.
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
            <h3 className="text-xl font-serif-display text-charcoal">The Upstream Connection</h3>
            <p className="text-xs sm:text-sm text-charcoal-soft leading-relaxed">
              Nirvana is not a competitor seeking to replace Mozilla. Nirvana is proud to be built upon Mozilla&apos;s GeckoView engine. Mozilla does the monumental work of maintaining the world&apos;s premier independent rendering engine. Nirvana takes that engine and applies tailored mobile design, custom icon systems, and refined privacy defaults.
            </p>
            <div className="pt-2">
              <Link
                href="/mozilla-attribution"
                className="text-xs font-mono text-brand hover:underline"
              >
                Read our full Mozilla & Firefox Attribution statement →
              </Link>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
            <h3 className="text-xl font-serif-display text-charcoal">Key Differences in Implementation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-charcoal-muted leading-relaxed">
              <div>
                <strong className="text-charcoal block mb-1">Telemetry & Diagnostics:</strong>
                Upstream Firefox includes diagnostic telemetry by default (which can be opted out). Nirvana deactivates and strips unnecessary telemetry hooks at compile time.
              </div>
              <div>
                <strong className="text-charcoal block mb-1">Ad Blocking Default:</strong>
                Upstream Firefox includes Enhanced Tracking Protection, but users must manually install uBlock Origin. Nirvana bundles and enables uBlock Origin right away.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

