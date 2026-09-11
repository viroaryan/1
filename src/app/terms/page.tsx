import React from "react";
import Link from "next/link";
import { Scale, FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Use — Nirvana Browser",
  description:
    "Official terms and conditions for using Nirvana Browser and associated independent software products.",
};

export default function TermsOfUsePage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-[#F7F7F3] min-h-screen">
      <div className="max-w-3xl mx-auto space-y-12 text-left">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Scale className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Terms of Use
          </h1>

          <p className="text-sm font-mono text-charcoal-muted">
            Last Updated: August 2026 · Version 1.0
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-8 text-sm text-charcoal-soft leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-serif-display text-charcoal">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or accessing Nirvana Browser, you agree to be bound by these Terms of Use and our open-source software licenses. If you do not agree with these terms, do not install or use the application.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-display text-charcoal">
              2. Open Source Licensing & Upstream Code
            </h2>
            <p>
              Nirvana Browser contains source code subject to open-source licenses, primarily the Mozilla Public License 2.0 (MPL 2.0). Nothing in these Terms limits your rights under the applicable open-source licenses for components governed by such terms. Full license information is available at{" "}
              <Link href="/licenses" className="text-brand underline font-mono text-xs">
                /licenses
              </Link>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-display text-charcoal">
              3. Trademark & Brand Ownership
            </h2>
            <p>
              The NIRVANA name, brand mark, logo, and distinctive design elements are proprietary trademarks of the Nirvana project. You may not use Nirvana trademarks without prior written authorization in a manner likely to cause confusion. &quot;Firefox&quot; and &quot;Mozilla&quot; are registered trademarks of the Mozilla Foundation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-display text-charcoal">
              4. Disclaimer of Warranties
            </h2>
            <p>
              NIRVANA BROWSER IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
