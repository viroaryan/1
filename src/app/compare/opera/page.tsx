import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft, Shield, Globe2 } from "lucide-react";

export const metadata = {
  title: "Nirvana vs Opera Browser — Built-in Commercial Services vs Open Trust",
  description:
    "An objective comparison between Nirvana Browser and Opera. Built-in sidebar services and proxy VPNs vs Nirvana's transparent open-source Gecko foundation.",
};

export default function OperaComparisonPage() {
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
          <span className="micro-label text-brand">Architecture & Ownership</span>
          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal">
            Nirvana vs Opera
          </h1>
          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Comparing Opera&apos;s commercial feature-packed browser with Nirvana&apos;s independent, open-source GeckoView architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Opera is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Users who appreciate extensive integrated commercial tools: built-in browser proxy &quot;VPN&quot;, social messaging sidebars, and crypto wallet features.
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-brand/20 shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Nirvana is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Users who prefer an open-source, non-corporate browser that refuses to monetize user attention through sponsored dials or bundled partner services.
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
          <h3 className="text-xl font-serif-display text-charcoal">Open Source Transparency</h3>
          <p className="text-xs sm:text-sm text-charcoal-soft leading-relaxed">
            Opera is a proprietary browser owned by a commercial consortium. In contrast, Nirvana Browser is based on the open-source GeckoView engine under the Mozilla Public License 2.0. Every line of browser engine logic is open for security audit and independent review.
          </p>
        </div>
      </div>
    </div>
  );
}
