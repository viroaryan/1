import React from "react";
import Link from "next/link";
import { Store, ArrowLeft, Download, ShieldCheck, CheckCircle2, Code2 } from "lucide-react";

export const metadata = {
  title: "Nirvana OpenStore — Curated Open-Source Android Discovery",
  description:
    "Product overview of Nirvana OpenStore (In Development). A lightweight ~30MB discovery client connecting users to verified F-Droid and GitHub open-source apps.",
};

export default function NirvanaOpenStorePage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-[#F7F7F3] min-h-screen">
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
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-300">
              STATUS: IN DEVELOPMENT
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Nirvana OpenStore
          </h1>

          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            A lightweight, transparent open-source application discovery client designed to help everyday Android users find audited, privacy-respecting alternatives to commercial Big Tech apps.
          </p>
        </div>

        {/* Development Status Notice */}
        <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-200 text-blue-950 text-xs sm:text-sm space-y-2">
          <div className="font-semibold text-blue-900">Important Architectural Clarification</div>
          <p className="leading-relaxed">
            Nirvana OpenStore is <strong>in active development</strong>. It acts as an open index and client connecting directly to trusted upstream ecosystems such as F-Droid and verified GitHub releases. Nirvana does not claim to author or host every cataloged application. All listed third-party apps remain property of their respective open-source developers.
          </p>
        </div>

        {/* OpenStore Core Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Download className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Target ~30MB Client
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Designed to be compact, swift, and bloat-free, running smoothly without requiring background Google Play Services.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <ShieldCheck className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Exclusively Open Source
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Every indexed application must have verifiable public source code under OSI-approved free and open-source licenses.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Code2 className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Direct Package Verification
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Cryptographic APK signature checks verify that downloaded packages have not been tampered with in transit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
