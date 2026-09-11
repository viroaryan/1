import React from "react";
import Link from "next/link";
import {
  Code2,
  Github,
  HeartHandshake,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "Open Source Codebase & Principles — Nirvana Browser",
  description:
    "Explore the open-source ethos behind Nirvana Browser. Fork, build, inspect, and contribute to independent mobile browser technology.",
};

export default function OpenSourcePage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16 text-left">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Code2 className="w-3.5 h-3.5" />
            <span>Open Source Manifesto</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            The web must remain open.
          </h1>

          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Proprietary browsers turn users into products by locking rendering engines inside black-box binaries. Nirvana is founded on radical transparency and open collaboration.
          </p>
        </div>

        {/* 3 Pillars of Our Open Source Codebase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Code2 className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Inspectable Code
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Every telemetry modification, UI enhancement, and theme layer is open for public review and independent security audit.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <HeartHandshake className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Upstream Respect
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              We stand proudly upon Mozilla Firefox&apos;s open-source shoulders under the Mozilla Public License 2.0 (MPL 2.0).
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <ShieldCheck className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Reproducible Builds
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Our Gradle and Gecko build configurations ensure that the APK on your device matches the code in our public repositories.
            </p>
          </div>
        </div>

        {/* GitHub & Repository Hub */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-6">
          <h2 className="text-2xl font-serif-display text-charcoal">
            Source Code Repositories
          </h2>
          <p className="text-sm text-charcoal-soft leading-relaxed">
            Follow development progress, submit patches, inspect diffs, and clone the codebase:
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href="https://github.com/viroaryan"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-charcoal text-white text-xs font-mono uppercase tracking-wider hover:bg-brand transition-colors inline-flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>Explore on GitHub (@viroaryan)</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <Link
              href="/contribute"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full liquid-glass text-charcoal text-xs font-mono uppercase tracking-wider hover:bg-black/[0.03] transition-colors inline-flex items-center justify-center gap-2"
            >
              How to Contribute →
            </Link>
          </div>
        </div>

        {/* Legal Cross-links */}
        <div className="p-6 rounded-3xl bg-[#F2F1EC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-charcoal-muted">
          <span>Read complete licensing and trademark separations:</span>
          <div className="flex gap-4">
            <Link href="/mozilla-attribution" className="text-brand hover:underline">
              Mozilla Attribution
            </Link>
            <span>·</span>
            <Link href="/licenses" className="text-brand hover:underline">
              MPL 2.0 Notices
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

