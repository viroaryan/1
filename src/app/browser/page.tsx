import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Smartphone,
  Zap,
  Lock,
  Layers,
  Sparkles,
  Download,
  CheckCircle2,
  Sliders,
  ExternalLink,
  ChevronRight,
  Globe2,
  Puzzle,
  EyeOff,
  Cpu,
  Fingerprint,
} from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";

export const metadata = {
  title: "Nirvana Browser — Independent Gecko-Powered Mobile Browser",
  description:
    "Discover Nirvana Browser for Android. Engineered with GeckoView 153, single-handed bottom toolbar, uBlock Origin by default, and stripped telemetry.",
};

export default function BrowserPage() {
  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="apple-badge">
              <Globe2 className="w-3.5 h-3.5 text-zinc-600" />
              <span>Flagship Mobile Browser</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-zinc-900 leading-tight">
              Nirvana Browser
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-xl">
              An independent, privacy-first Android web browser built from the battle-tested Firefox open-source codebase. Rebuilt from the ground up to deliver a calmer, faster, and more private mobile web.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=org.nirvana"
                target="_blank"
                rel="noreferrer"
                className="apple-btn-primary text-xs flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Get on Google Play</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
              <Link
                href="/download"
                className="apple-btn-ghost text-xs"
              >
                Release Specs & APK
              </Link>
            </div>

            {/* Technical Metadata Pill Strip */}
            <div className="pt-3 flex flex-wrap items-center gap-2.5 text-xs text-zinc-600">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-zinc-200 shadow-xs font-medium">
                Version: <strong className="text-zinc-900 font-semibold">1.0.2</strong>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-zinc-200 shadow-xs font-medium">
                Engine: <strong className="text-zinc-900 font-semibold">GeckoView 153.0.4</strong>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-zinc-200 shadow-xs font-medium">
                Target: <strong className="text-zinc-900 font-semibold">Android 16 Ready</strong>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup
              src="/assets/screenshots/home.jpeg"
              alt="Nirvana Browser Home UI"
              caption="Live Android interface with 'You're Protected' shield indicator"
              priority
            />
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="apple-card-light p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-800 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900">
              Stripped Telemetry
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Deactivated telemetry pipes, advertising identifiers, and crash diagnostic beacons directly at the engine level.
            </p>
          </div>

          <div className="apple-card-light p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-800 flex items-center justify-center">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900">
              Thumb-Zone Reach
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Configurable bottom address bar. Reach search, tabs, and bookmarks naturally without one-handed strain.
            </p>
          </div>

          <div className="apple-card-light p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-800 flex items-center justify-center">
              <Puzzle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900">
              True WebExtensions
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              Full desktop-class Gecko extensions on mobile. Pre-bundled with uBlock Origin for instant content blocking.
            </p>
          </div>

          <div className="apple-card-light p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-800 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900">
              Memory Efficiency
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-normal">
              By blocking heavy tracking scripts and intrusive ads, pages load quicker and conserve CPU cycles and battery life.
            </p>
          </div>
        </div>

        {/* Dark Obsidian Telemetry Showcase Card */}
        <div className="apple-card-dark p-8 sm:p-12 text-left relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>GeckoView Partitioned Telemetry</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Architectural Independence
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
                Nirvana uses Mozilla&apos;s GeckoView 153.0.4 layout engine rather than Google Chromium / Blink. This preserves rendering engine diversity on the open web and prevents monopoly capture of web standards.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-2xl font-semibold text-white">0%</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Ad network trackers</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800">
                  <div className="text-2xl font-semibold text-white">100%</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Local cookie jars</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-semibold text-emerald-400">MPL 2.0</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Open source code</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-zinc-800 relative aspect-[16/10] bg-zinc-900">
                <Image
                  src="/assets/saas_browser_hero.jpg"
                  alt="Nirvana Browser Telemetry Analytics"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Real Screenshots Showcase Grid */}
        <div className="space-y-6 text-left">
          <div className="space-y-2">
            <div className="apple-badge">
              <Sparkles className="w-3.5 h-3.5 text-zinc-600" />
              <span>User Experience Tour</span>
            </div>
            <h2 className="text-3xl font-semibold text-zinc-900 tracking-tight">
              Designed for Silence and Clarity
            </h2>
            <p className="text-sm text-zinc-500 font-normal">
              Inspect the real Android user interface in high-definition captures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="apple-card-light p-5 flex flex-col items-center">
              <div className="relative w-full aspect-[9/18] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-200/80">
                <Image
                  src="/assets/screenshots/menu.jpeg"
                  alt="Nirvana Menu Sheet"
                  fill
                  sizes="300px"
                  className="object-cover object-top"
                />
              </div>
              <div className="text-left w-full pt-4">
                <div className="text-sm font-semibold text-zinc-900">Unified Bottom Sheet</div>
                <div className="text-xs text-zinc-500 mt-0.5 font-normal">Fast access to passwords, extensions, sync & settings</div>
              </div>
            </div>

            <div className="apple-card-light p-5 flex flex-col items-center">
              <div className="relative w-full aspect-[9/18] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-200/80">
                <Image
                  src="/assets/screenshots/delete-data.jpeg"
                  alt="Delete Browsing Data UI"
                  fill
                  sizes="300px"
                  className="object-cover object-top"
                />
              </div>
              <div className="text-left w-full pt-4">
                <div className="text-sm font-semibold text-zinc-900">Granular Data Purge</div>
                <div className="text-xs text-zinc-500 mt-0.5 font-normal">One-tap cleanup of open tabs, cookies, cache & permissions</div>
              </div>
            </div>

            <div className="apple-card-light p-5 flex flex-col items-center">
              <div className="relative w-full aspect-[9/18] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-200/80">
                <Image
                  src="/assets/screenshots/about-build.jpeg"
                  alt="About Nirvana Build Metadata"
                  fill
                  sizes="300px"
                  className="object-cover object-top"
                />
              </div>
              <div className="text-left w-full pt-4">
                <div className="text-sm font-semibold text-zinc-900">Engine Transparency</div>
                <div className="text-xs text-zinc-500 mt-0.5 font-normal">Direct access to MPL 2.0 licenses, rights & library audit</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="apple-card-light p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-dashed text-left">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-zinc-900">
              Ready to install Nirvana?
            </h3>
            <p className="text-sm text-zinc-500 font-normal">
              Available now on Google Play Store for all devices running Android 8.0 and above.
            </p>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=org.nirvana"
            target="_blank"
            rel="noreferrer"
            className="apple-btn-primary text-xs inline-flex items-center gap-2 shrink-0"
          >
            <Download className="w-4 h-4" />
            Install from Play Store
          </a>
        </div>
      </div>
    </div>
  );
}
