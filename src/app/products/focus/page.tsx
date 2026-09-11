import React from "react";
import Link from "next/link";
import { Sparkles, ArrowLeft, Shield, Clock, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Nirvana Focus — Disposable Single-Task Browsing",
  description:
    "Product overview of Nirvana Focus (Close Testing). An ephemeral single-tab browser designed to open links without leaving background cookies or clutter.",
};

export default function NirvanaFocusPage() {
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
            <span className="micro-label text-brand">Ecosystem Project</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
              STATUS: CLOSE TESTING
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Nirvana Focus
          </h1>

          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            A fast, disposable, single-tab browser designed for a single purpose: tap a link from your messages, read the page with zero distractions, and have the entire session vanish the moment you close it.
          </p>
        </div>

        {/* Development Status Card */}
        <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-2">
          <div className="font-semibold text-amber-900">Current Testing Phase</div>
          <p className="leading-relaxed">
            Nirvana Focus is currently in <strong>Closed Beta Testing</strong> with our internal contributor group. It is not yet available for general public download on Google Play. We are testing cold-start performance and automated memory reclamation.
          </p>
        </div>

        {/* Focus Architecture Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Clock className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Zero Tab Clutter
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Opens one link at a time. No tab trays, no 50-tab background clutter draining phone batteries.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Shield className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Instant Session Erasure
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Every session runs in temporary memory. Tapping the checkmark immediately wipes cookies, cache, and history.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Sparkles className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Distraction Shield
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Pre-configured with uBlock content blocking to load web articles instantaneously.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

