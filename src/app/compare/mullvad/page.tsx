import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft, ShieldCheck, Lock } from "lucide-react";

export const metadata = {
  title: "Nirvana vs Mullvad Browser — Threat Modeling & Usability",
  description:
    "An objective comparison between Nirvana Browser and Mullvad Browser. Tor-derived anti-fingerprinting vs daily-driver mobile privacy.",
};

export default function MullvadComparisonPage() {
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
          <span className="micro-label text-brand">Threat Modeling Comparison</span>
          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal">
            Nirvana vs Mullvad Browser
          </h1>
          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Mullvad Browser is a collaboration between the Tor Project and Mullvad VPN designed for extreme anonymity. Here is how its threat model differs from Nirvana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Mullvad Browser is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Desktop users needing advanced anti-fingerprinting protection that mimics Tor Browser (without using the Tor network) to resist state-level tracking during sensitive sessions.
            </div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-brand/20 shadow-sm space-y-2">
            <div className="text-xs font-mono text-brand font-semibold uppercase">Nirvana is Best For</div>
            <div className="text-sm font-medium text-charcoal">
              Android smartphone users who need a pleasant daily-driver browser with bookmarks, passwords, and modern ergonomics, while keeping trackers and ad networks blocked.
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
            <h3 className="text-xl font-serif-display text-charcoal">Daily Usability vs Hardened Anonymity</h3>
            <p className="text-xs sm:text-sm text-charcoal-soft leading-relaxed">
              Mullvad Browser is intentionally stateless: by default, it does not persist bookmarks, history, or saved passwords between sessions, which can be inconvenient for casual daily mobile browsing. Furthermore, Mullvad Browser is currently desktop-only. Nirvana is engineered specifically for Android devices as a sustainable, privacy-respecting daily driver.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
