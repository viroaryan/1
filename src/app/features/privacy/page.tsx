import React from "react";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  Lock,
  EyeOff,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileText,
  Flame,
  ArrowRight,
} from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";

export const metadata = {
  title: "Privacy Architecture & Data Transparency — Nirvana Browser",
  description:
    "An exhaustive technical breakdown of what Nirvana Browser collects, what it never collects, and how we minimize upstream telemetry pipelines.",
};

export default function PrivacyFeaturePage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Technical Privacy Transparency</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Your browsing. Your space.
          </h1>

          <p className="text-lg sm:text-xl text-charcoal-soft font-light leading-relaxed max-w-3xl">
            We refuse to make vague marketing claims like &quot;100% anonymous&quot; or &quot;military-grade unhackable.&quot; Instead, we publish our exact data boundaries and explain the mechanics of our GeckoView privacy architecture.
          </p>
        </div>

        {/* 3 Columns: What Nirvana Collects / Does Not / Required */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* What Nirvana Collects */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-charcoal-muted uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>What We Collect</span>
            </div>
            <h3 className="text-2xl font-serif-display text-charcoal">
              Zero Profiling
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Nirvana collects <strong>no personal profiles</strong>, no user advertising IDs, and no browsing trails. We do not operate remote behavioral analytics servers.
            </p>
            <ul className="space-y-2 text-xs font-mono text-charcoal-soft pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                No account required to browse
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                No search query logging
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Telemetry disabled by default
              </li>
            </ul>
          </div>

          {/* What Nirvana NEVER Collects */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-charcoal-muted uppercase">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>What We Never Collect</span>
            </div>
            <h3 className="text-2xl font-serif-display text-charcoal">
              Strict Non-Collection
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Under no circumstance do we collect, process, sell, or monetize any of the following:
            </p>
            <ul className="space-y-2 text-xs font-mono text-charcoal-soft pt-2">
              <li className="flex items-center gap-2">
                <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                Your browsing history
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                Your IP address or geolocation
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                Your passwords or autofill data
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                Hardware device fingerprints
              </li>
            </ul>
          </div>

          {/* Required For Core Functionality */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-charcoal-muted uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>On-Device Storage</span>
            </div>
            <h3 className="text-2xl font-serif-display text-charcoal">
              Local Machine State
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              To render websites and remember your preferences, the browser stores data strictly on your phone:
            </p>
            <ul className="space-y-2 text-xs font-mono text-charcoal-soft pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                Cached image & style assets
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                Active tabs and saved bookmarks
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                Session cookies (isolated per site)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                Can be purged on quit instantly
              </li>
            </ul>
          </div>
        </div>

        {/* Deep Dive on Telemetry Minimization */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.06] space-y-6 text-left">
          <span className="micro-label text-brand">Technical Implementation</span>
          <h2 className="text-3xl font-serif-display text-charcoal">
            How We Modified Upstream Telemetry
          </h2>
          <div className="space-y-4 text-sm text-charcoal-soft leading-relaxed">
            <p>
              In standard upstream distributions of modern browser codebases, extensive diagnostics (telemetry pings, crash reporting beacons, experiment rollouts, and sponsored tiles) operate in the background to provide engineering telemetry back to base organizations.
            </p>
            <p>
              When forking the repository, our team audited these pipelines. Where technically viable without compromising rendering stability or crash safety, we set internal flags to nullify diagnostic beacons, disconnected default marketing channels, and prevented silent background network requests.
            </p>
            <p>
              Because browser engines are massive multi-million-line codebases, we do not claim &quot;zero telemetry&quot; as an absolute marketing slogan. Instead, we pledge active diligence: stripping every data-sharing element we identify and subjecting every new build to network proxy inspection.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono">
            <Link
              href="/features/protection"
              className="text-brand hover:underline inline-flex items-center gap-1"
            >
              Total Cookie Protection Details →
            </Link>
            <Link
              href="/features/privacy-on-quit"
              className="text-brand hover:underline inline-flex items-center gap-1"
            >
              Delete on Quit Mechanism →
            </Link>
            <Link
              href="/privacy"
              className="text-brand hover:underline inline-flex items-center gap-1"
            >
              Official Legal Privacy Policy →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

