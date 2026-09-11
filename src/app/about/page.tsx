import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe2, HeartHandshake, Shield, Sparkles, ArrowRight, EyeOff, Terminal } from "lucide-react";

export const metadata = {
  title: "About Nirvana — Independent Browser Laboratory",
  description:
    "Why Nirvana exists: restoring digital quietude, challenging commercial browser monopolies, and advancing open-source Gecko technology.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16 text-left">
        {/* Header */}
        <div className="space-y-4">
          <div className="apple-badge">
            <Globe2 className="w-3.5 h-3.5 text-zinc-600" />
            <span>Independent Browser Laboratory</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
            Why Nirvana exists.
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            The modern web is suffering from sensory overload and relentless tracking. We founded Nirvana to build a quiet sanctuary on your phone.
          </p>
        </div>

        {/* Narrative Essay */}
        <div className="space-y-6 text-base text-zinc-700 leading-relaxed font-normal apple-card-light p-8 sm:p-10">
          <p>
            When we look at the browser landscape today, we see an alarming consolidation. More than 80% of all web traffic passes through a single corporate engine: Chromium. When a single advertising conglomerate controls the rendering engine of the global internet, user privacy is inevitably subordinated to ad-tech quarterly earnings.
          </p>

          <p>
            Mozilla Firefox remains the extraordinary counterweight to this monopoly. But on mobile devices, many users found existing options either cluttered with promotional tiles, difficult to use with one hand on tall phone screens, or lacking out-of-the-box ad blocking.
          </p>

          <p>
            Nirvana was born from a simple conviction: what if an independent team took Mozilla&apos;s battle-tested GeckoView engine, stripped away every unnecessary diagnostic beacon, redesigned the mobile interface for effortless thumb ergonomics, and packaged the world&apos;s best open-source blocker (uBlock Origin) directly into the core?
          </p>
        </div>

        {/* 3 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="apple-card-light p-6 sm:p-7 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-800 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900">
              Calm Computing
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Software that respects human attention. No push notifications, no noisy news feeds, and no manipulative dark patterns.
            </p>
          </div>

          <div className="apple-card-light p-6 sm:p-7 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-800 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900">
              Radical Honesty
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              We never make fake claims like &quot;100% unhackable&quot; or &quot;zero telemetry guarantee.&quot; We publish verified technical realities.
            </p>
          </div>

          <div className="apple-card-light p-6 sm:p-7 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-800 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900">
              Open Lineage
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              We credit Mozilla and upstream Firefox contributors openly, contributing to a diverse and competitive internet ecosystem.
            </p>
          </div>
        </div>

        {/* Founder & Team Transition Card */}
        <div className="apple-card-light p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-dashed">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-zinc-900">
              Meet the builders behind the code
            </h3>
            <p className="text-sm text-zinc-500 font-normal">
              Built by an independent team led by Abhiraj Aryan.
            </p>
          </div>
          <Link
            href="/team"
            className="apple-btn-primary text-xs inline-flex items-center gap-2 shrink-0"
          >
            <span>View The Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

