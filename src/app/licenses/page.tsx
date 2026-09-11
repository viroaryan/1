import React from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Scale,
  ExternalLink,
  Code2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export const metadata = {
  title: "Open Source Licenses & Legal Accuracy",
  description:
    "Comprehensive breakdown of open-source licenses governing upstream Firefox source code, Nirvana independent modifications, third-party libraries, and trademark boundaries.",
};

export default function LicensesPage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Scale className="w-3.5 h-3.5" />
            <span>Legal Clarity & Open Source Standards</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Licenses & Notices
          </h1>

          <p className="text-lg sm:text-xl text-charcoal-soft font-light leading-relaxed">
            A precise, transparent accounting of the open-source licenses governing the components within Nirvana Browser and its upstream lineage.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4">
          <div className="micro-label text-charcoal font-semibold">Important Legal Clarification</div>
          <p className="text-sm text-charcoal-soft leading-relaxed">
            Firefox contains source code distributed under multiple free and open-source software licenses. Most Firefox source code is licensed under the <strong>Mozilla Public License 2.0 (MPL 2.0)</strong>, while specific individual subsystems and third-party dependencies utilize additional licenses (such as BSD, MIT, Apache 2.0, or LGPL). Not every component uses every license, nor is Nirvana automatically entirely under every Firefox-associated license.
          </p>
          <div className="p-3.5 rounded-2xl bg-[#FAFAF8] text-xs font-mono text-charcoal-muted border border-black/[0.04]">
            &quot;Firefox and Mozilla trademarks remain subject to their respective trademark terms.&quot;
          </div>
        </div>

        {/* 5-Part Architectural Separation */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif-display text-charcoal">
            Categorical License Separation
          </h2>

          {/* 1. Upstream Firefox/Mozilla Licensing */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-brand uppercase">
                Category 01
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-black/[0.04] text-charcoal-muted">
                Upstream
              </span>
            </div>
            <h3 className="text-xl font-serif-display text-charcoal">
              Upstream Firefox & Mozilla Engine Source Code
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-soft leading-relaxed">
              The primary browser engine components derived from Mozilla Firefox (including GeckoView, SpiderMonkey, and Android Components) are subject to the <strong>Mozilla Public License Version 2.0 (MPL 2.0)</strong>. In accordance with MPL 2.0 terms, any modifications made to existing MPL-covered files remain freely accessible under the same license terms.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono">
              <a
                href="https://www.mozilla.org/MPL/2.0/"
                target="_blank"
                rel="noreferrer"
                className="text-brand hover:underline inline-flex items-center gap-1"
              >
                Mozilla Public License 2.0 <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.mozilla.org/about/legal/licensing/"
                target="_blank"
                rel="noreferrer"
                className="text-brand hover:underline inline-flex items-center gap-1"
              >
                Mozilla Licensing Overview <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://hg.mozilla.org/mozilla-central"
                target="_blank"
                rel="noreferrer"
                className="text-brand hover:underline inline-flex items-center gap-1"
              >
                Firefox Source Code <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 2. Nirvana-Added Code */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-brand uppercase">
                Category 02
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-brand/10 text-brand">
                Nirvana Modifications
              </span>
            </div>
            <h3 className="text-xl font-serif-display text-charcoal">
              Nirvana Independent Code & Enhancements
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-soft leading-relaxed">
              Original frontend UI components, configuration layers, telemetry stripping hooks, custom theme engines, and mobile ergonomic modifications created independently by the Nirvana team are maintained and licensed in accordance with their respective open-source terms in our public repositories.
            </p>
          </div>

          {/* 3. Third-Party Dependencies */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-brand uppercase">
                Category 03
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-black/[0.04] text-charcoal-muted">
                Dependencies
              </span>
            </div>
            <h3 className="text-xl font-serif-display text-charcoal">
              Third-Party Libraries & Bundled Extensions
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-soft leading-relaxed">
              Included extensions and third-party modules retain their respective author copyrights and licenses:
            </p>
            <ul className="space-y-2 text-xs font-mono text-charcoal-muted pt-1">
              <li>• <strong>uBlock Origin:</strong> GNU General Public License v3.0 (GPLv3) by Raymond Hill (gorhill).</li>
              <li>• <strong>Android Open Source Project (AOSP):</strong> Apache License 2.0.</li>
              <li>• <strong>BoringSSL / Cryptographic Modules:</strong> OpenSSL / BSD 3-Clause.</li>
              <li>• <strong>Various System Libraries:</strong> MIT, BSD, and LGPL where applicable.</li>
            </ul>
          </div>

          {/* 4. Branding & Trademarks */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-brand uppercase">
                Category 04
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-black/[0.04] text-charcoal-muted">
                Trademarks
              </span>
            </div>
            <h3 className="text-xl font-serif-display text-charcoal">
              Branding, Logos & Trademarks
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-soft leading-relaxed">
              The NIRVANA name, circular emblem logo, website assets, and distinctive trade dress are property of the Nirvana team. While source code is freely accessible under open-source licenses, trademarks and brand identities are protected to avoid consumer confusion regarding the origin of the software.
            </p>
          </div>

          {/* 5. Open Source Notices */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-brand uppercase">
                Category 05
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-black/[0.04] text-charcoal-muted">
                Compliance
              </span>
            </div>
            <h3 className="text-xl font-serif-display text-charcoal">
              In-App Notices & Source Requests
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-soft leading-relaxed">
              A complete copy of all license texts, notices, and source disclosures is packaged directly into every Nirvana release. You can view these at any time within the browser by navigating to: <br />
              <code className="text-brand font-mono text-xs bg-black/[0.04] px-2 py-0.5 rounded mt-2 inline-block">
                Settings → About Nirvana → Licensing Information
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

