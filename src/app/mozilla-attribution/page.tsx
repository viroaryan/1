import React from "react";
import Link from "next/link";
import {
  HeartHandshake,
  ShieldCheck,
  ExternalLink,
  Code2,
  FileText,
  Flame,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export const metadata = {
  title: "Built on Open Source — Mozilla & Firefox Attribution",
  description:
    "Official attribution and acknowledgment of Mozilla and the Firefox open-source contributors upon whose foundational engineering Nirvana Browser is built.",
};

export default function MozillaAttributionPage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Open Source Lineage & Gratitude</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            BUILT ON OPEN SOURCE
          </h1>

          <p className="text-lg sm:text-xl text-charcoal-soft font-light leading-relaxed">
            Nirvana Browser is based on the Firefox open-source codebase. We are grateful to Mozilla and the Firefox contributors whose open-source work makes further independent development possible.
          </p>
        </div>

        {/* Legal Disclaimer & Separation Banner */}
        <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-xs sm:text-sm space-y-3">
          <div className="flex items-center gap-2 font-semibold text-amber-900">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Clear Distinction of Origin & Non-Endorsement</span>
          </div>
          <p className="leading-relaxed">
            Nirvana Browser is an <strong>independent project</strong> developed by Abhiraj Aryan and the Nirvana team. It is not an official Mozilla product, nor is it affiliated with, sponsored by, or endorsed by the Mozilla Corporation or the Mozilla Foundation. Firefox® and Mozilla® are registered trademarks of the Mozilla Foundation.
          </p>
        </div>

        {/* Upstream vs Nirvana Work Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upstream Firefox Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="micro-label text-charcoal">Upstream Foundation</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/[0.04] text-charcoal-muted">
                Mozilla / Firefox
              </span>
            </div>
            <h3 className="text-2xl font-serif-display text-charcoal">
              The Mozilla Firefox Codebase
            </h3>
            <ul className="space-y-2.5 text-xs text-charcoal-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>GeckoView Engine:</strong> High-performance, standards-compliant web rendering runtime independent of Chromium/Blink.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>SpiderMonkey JS:</strong> Mature, battle-tested JavaScript and WebAssembly virtual execution environment.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Multi-Process Architecture:</strong> Tab isolation, crash containment, and modern sandboxing security primitives.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Total Cookie Protection:</strong> Cryptographic state partitioning isolating trackers per third-party boundary.
                </span>
              </li>
            </ul>
            <div className="pt-2">
              <a
                href="https://hg.mozilla.org/mozilla-central"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-brand hover:underline inline-flex items-center gap-1"
              >
                Mozilla Source Repository <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Nirvana Independent Work Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-brand/20 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="micro-label text-brand">Nirvana Modifications</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand/10 text-brand">
                Independent Lab
              </span>
            </div>
            <h3 className="text-2xl font-serif-display text-charcoal">
              Nirvana Independent Work
            </h3>
            <ul className="space-y-2.5 text-xs text-charcoal-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span>
                  <strong>Telemetry Minimization:</strong> Deactivating and stripping unnecessary diagnostic and usage telemetry pipelines where technically possible.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span>
                  <strong>Calm Computing UI/UX:</strong> Mobile-first interface overhaul featuring single-handed bottom address bar and clean layout rules.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span>
                  <strong>Native uBlock Integration:</strong> Pre-configured open-source ad and script filtering straight from the first launch.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <span>
                  <strong>Custom Icon System:</strong> Aurora Borealis and bespoke visual themes customized for calm Android aesthetics.
                </span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/licenses"
                className="text-xs font-mono text-brand hover:underline inline-flex items-center gap-1"
              >
                View Licensing Breakdown →
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Attribution Text */}
        <div className="p-8 rounded-3xl bg-white border border-black/[0.06] space-y-6 text-sm text-charcoal-soft leading-relaxed">
          <h2 className="text-2xl font-serif-display text-charcoal">
            Mozilla & Firefox Attribution
          </h2>

          <p>
            The software world is richer, more competitive, and more secure because Mozilla spent decades championing open standards and an independent browser engine. Without Gecko and the open-source ethos of the Mozilla community, the modern web would be a monoculture dominated by a single corporate rendering engine.
          </p>

          <p>
            When we set out to build Nirvana, we chose Firefox not because we wanted a carbon copy, but because we wanted to honor the world-class engineering of GeckoView while catering to users who seek an even quieter, less cluttered, and more ergonomically focused mobile experience.
          </p>

          <div className="p-4 rounded-2xl bg-[#F7F7F3] font-mono text-xs text-charcoal-muted space-y-2 border border-black/[0.04]">
            <div className="font-semibold text-charcoal">Official Trademark & Copyright Notice:</div>
            <div>
              &quot;Firefox&quot; and &quot;Mozilla&quot; are registered trademarks of the Mozilla Foundation in the U.S. and other countries. The Mozilla source code is distributed under the Mozilla Public License v. 2.0 (MPL 2.0). Source code for Mozilla components is available at{" "}
              <a
                href="https://www.mozilla.org/MPL/"
                target="_blank"
                rel="noreferrer"
                className="text-brand underline"
              >
                mozilla.org/MPL/
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

