import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Nirvana Browser",
  description:
    "Official, plain-language Privacy Policy for Nirvana Browser. What data stays on your device and how telemetry is minimized.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-[#F7F7F3] min-h-screen">
      <div className="max-w-3xl mx-auto space-y-12 text-left">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal Privacy Policy</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Privacy Policy
          </h1>

          <p className="text-sm font-mono text-charcoal-muted">
            Last Updated: August 2026 · Effective Date: Immediate
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-8 text-sm text-charcoal-soft leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-serif-display text-charcoal">
              1. Our Core Principle: Data Non-Collection
            </h2>
            <p>
              Nirvana Browser is engineered around the fundamental principle that what you read, search, and browse on the internet belongs exclusively to you. We do not maintain remote user databases, behavioral profiling servers, or advertising identification trackers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-display text-charcoal">
              2. Data Stored Exclusively on Your Device
            </h2>
            <p>
              To render websites and store your personal settings, Nirvana writes files locally to your smartphone&apos;s sandboxed application storage:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-charcoal-muted">
              <li>Open tabs and session state</li>
              <li>Saved bookmarks and download history</li>
              <li>Local encrypted password vault credentials</li>
              <li>HTTP cache files and website cookies (partitioned per site)</li>
            </ul>
            <p>
              This information is never transmitted to Nirvana servers. You have complete authority to delete this data at any time via Settings or by enabling &quot;Delete Browsing Data on Quit.&quot;
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-display text-charcoal">
              3. Telemetry & Diagnostic Data
            </h2>
            <p>
              Upstream Firefox contains various diagnostic and crash-reporting services. In Nirvana Browser, we have audited these mechanisms and deactivated or removed unnecessary usage telemetry and advertising beacons where technically feasible. We do not collect search queries, URLs visited, or IP addresses.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-display text-charcoal">
              4. Third-Party Search & Websites
            </h2>
            <p>
              When you use a third-party search engine (such as Google, DuckDuckGo, or Bing) or visit a website, that provider processes your search query or web traffic according to their own independent privacy policy. Nirvana shields your connection with Total Cookie Protection and uBlock Origin to prevent cross-site correlation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-display text-charcoal">
              5. Contact Regarding Privacy
            </h2>
            <p>
              If you have technical questions regarding our privacy implementation or wish to inspect our network proxy logs, contact our team at:{" "}
              <a
                href="mailto:privacy@nirvanabrowser.com"
                className="text-brand underline font-mono text-xs"
              >
                privacy@nirvanabrowser.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
