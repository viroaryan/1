import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft, Search, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Nirvana vs DuckDuckGo Browser — Search Integration vs Gecko Power",
  description:
    "An objective comparison between Nirvana Browser and DuckDuckGo Browser on Android. Dedicated search browser vs full GeckoView extension platform.",
};

export default function DuckDuckGoComparisonPage() {
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
          <span className="micro-label text-brand">Privacy Product Comparison</span>
          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal">
            Nirvana vs DuckDuckGo Browser
          </h1>
          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            DuckDuckGo offers a popular privacy-oriented mobile browser. Here is an honest technical contrast with Nirvana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">DuckDuckGo is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Users who exclusively use DuckDuckGo search and want a simple &quot;Burn Button&quot; animation to quickly clear cookies on mobile devices using the system WebView.
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-brand/20 shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Nirvana is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Users who want a full independent browser engine (GeckoView rather than system Android WebView), full uBlock Origin WebExtension capabilities, and search engine choice.
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
          <h3 className="text-xl font-serif-display text-charcoal">Gecko Engine vs Android System WebView</h3>
          <p className="text-xs sm:text-sm text-charcoal-soft leading-relaxed">
            The standard DuckDuckGo Android browser relies on Google&apos;s Android System WebView to render web pages. In contrast, Nirvana bundles its own dedicated GeckoView rendering engine. This ensures that web page parsing, JavaScript execution, and tracking containment are completely independent of Google&apos;s system components.
          </p>
        </div>
      </div>
    </div>
  );
}
