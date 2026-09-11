import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft, ShieldCheck, Smartphone } from "lucide-react";

export const metadata = {
  title: "Nirvana vs Apple Safari — Platform Ecosystems & Mobile Openness",
  description:
    "An objective comparison between Nirvana Browser on Android and Apple Safari on iOS. Closed ecosystem integration vs open Android Gecko modularity.",
};

export default function SafariComparisonPage() {
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
          <span className="micro-label text-brand">Platform Boundaries</span>
          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal">
            Nirvana vs Apple Safari
          </h1>
          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Apple Safari is deeply integrated into iOS and macOS. Here is how Nirvana on Android compares in privacy, extensions, and freedom.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Apple Safari is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              iPhone, iPad, and Mac users who rely on iCloud Keychain, AirDrop, Apple Pay, and battery optimization tailored directly to Apple Silicon hardware.
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-brand/20 shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Nirvana is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Android users who want an open Gecko engine, real uBlock Origin content filtering, and platform independence without hardware vendor lock-in.
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
          <h3 className="text-xl font-serif-display text-charcoal">Platform Exclusivity</h3>
          <p className="text-xs sm:text-sm text-charcoal-soft leading-relaxed">
            Apple Safari is exclusive to Apple devices and cannot be run on Android phones or Windows PCs. Nirvana is designed specifically for Android users who deserve first-class privacy, bottom toolbar ergonomics, and full WebExtension capabilities on open hardware.
          </p>
        </div>
      </div>
    </div>
  );
}
