import React from "react";
import Link from "next/link";
import { Shield, ArrowLeft, Search, Network, Lock, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Nirvana Nivro — Future Privacy Browser Concept",
  description:
    "Product overview of Nirvana Nivro (In Development). An experimental laboratory project exploring multi-network privacy routing and decoupled search ecosystems.",
};

export default function NirvanaNivroPage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12 text-left">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-charcoal-muted hover:text-charcoal"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Ecosystem
        </Link>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="micro-label text-brand">Laboratory Exploration</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-300">
              STATUS: IN DEVELOPMENT / CONCEPT
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Nirvana Nivro
          </h1>

          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            An advanced privacy browser concept exploring experimental networking topologies, independent search index aggregation, and multi-hop routing.
          </p>
        </div>

        {/* Factuality Notice: Current vs Planned */}
        <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-2">
          <div className="flex items-center gap-2 font-semibold text-amber-900">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Clear Distinction: Concept vs Released Software</span>
          </div>
          <p className="leading-relaxed">
            Nirvana Nivro is an <strong>in-development research project</strong>. The capabilities described below are engineering prototypes and theoretical architectures, NOT features in the current general release of Nirvana Browser. Furthermore, we explicitly state that no networking protocol can guarantee &quot;100% absolute anonymity.&quot;
          </p>
        </div>

        {/* Conceptual Explorations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Search className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Aggregated Privacy Search
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Researching dynamic client-side query multiplexing across Brave Search, DuckDuckGo, and SearXNG instances without exposing source IPs.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Network className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Experimental Tunneling
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Investigating lightweight WireGuard and multi-hop encrypted proxy relays directly integrated into the network transport layer.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Lock className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Fingerprint Randomization
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Prototyping subtle noise injection into canvas, WebGL, and audio context APIs to disrupt browser fingerprinting attempts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

