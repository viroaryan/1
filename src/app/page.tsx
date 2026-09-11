import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
  Download,
  CheckCircle2,
  Lock,
  Puzzle,
  EyeOff,
  Sliders,
  Smartphone,
  Layers,
  HeartHandshake,
  Github,
  Send,
  Instagram,
  ExternalLink,
  ChevronRight,
  Flame,
  Globe2,
  Search,
  BookOpen,
  KeyRound,
} from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";
import ProtectionDemo from "@/components/ui/ProtectionDemo";
import SearchEngineSwitcher from "@/components/ui/SearchEngineSwitcher";
import FounderProfileCard from "@/components/ui/FounderProfileCard";
import TeamMemberUiverseCard from "@/components/ui/TeamMemberUiverseCard";
import SocialCubeWidget from "@/components/ui/SocialCubeWidget";
import EcosystemWaveCard from "@/components/ui/EcosystemWaveCard";
import Nirvana3DCoin from "@/components/ui/Nirvana3DCoin";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden pt-20">
      {/* =========================================================================
          SCREEN 01: MODERN MINIMALIST (APPLE / SF PRO) HERO
      ========================================================================= */}
      <section className="relative min-h-[88vh] flex items-center justify-center px-6 sm:px-10 lg:px-14 xl:px-16 py-16 lg:py-20 overflow-hidden">
        {/* Subtle Ambient Light Glow */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] atmospheric-bloom opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Apple-style Minimal Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-xs text-charcoal">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-medium tracking-tight text-charcoal">
                Nirvana Browser · Android 16 Ready · GeckoView 153.0.4
              </span>
            </div>

            {/* Apple/SF Pro Clean Typography */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-charcoal leading-[1.04]">
              Private. Fast. <br />
              <span className="text-brand font-normal">Beautiful.</span>
            </h1>

            <p className="text-base sm:text-xl text-charcoal-soft font-normal max-w-xl leading-relaxed">
              A browser built for a quieter web. An independent Android browser powered by Mozilla&apos;s open-source GeckoView engine, modified to strip away tracking dossiers and commercial telemetry.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="https://play.google.com/store/apps/details?id=org.nirvana"
                target="_blank"
                rel="noreferrer"
                className="apple-btn-primary px-7 py-3.5 rounded-full text-xs font-medium tracking-wide inline-flex items-center gap-2.5 shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download for Android</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <Link
                href="/browser"
                className="apple-btn-ghost px-6 py-3.5 rounded-full text-xs font-medium tracking-wide inline-flex items-center gap-2"
              >
                <span>Explore Browser</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Micro verification badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-charcoal-muted">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                GeckoView 153.0.4 Upstream Engine
              </span>
              <span className="hidden sm:inline text-black/20">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                uBlock Origin Native
              </span>
              <span className="hidden sm:inline text-black/20">·</span>
              <span className="font-medium">100% Free & Open Source</span>
            </div>
          </div>

          {/* Right Column: Solid Static Android Phone Mockup + Floating 3D Nirvana Token */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            <div className="relative z-10 w-full max-w-[340px] flex justify-center">
              <PhoneMockup
                src="/assets/screenshots/home.jpeg"
                alt="Nirvana Browser Home Screen"
                caption="Official Nirvana 1.0.2 home screen with shortcut hubs & noise-free cards"
                priority
              />

              {/* Floating 3D Rotating Nirvana Coin (Uiverse black-rabbit-68 with Nirvana Emblem) */}
              <div className="hidden sm:flex absolute -bottom-5 -left-10 lg:-left-12 xl:-left-16 z-20 items-center gap-3 p-3 pl-3.5 pr-4 rounded-3xl bg-white/95 backdrop-blur-xl border border-black/[0.08] shadow-float pointer-events-auto transition-all duration-300 hover:scale-105">
                <Nirvana3DCoin size={70} />
                <div className="text-left space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-charcoal">
                      Nirvana Token
                    </span>
                  </div>
                  <p className="text-[10px] text-charcoal-muted font-medium leading-tight">
                    GeckoView Core 153.0
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile 3D Coin Badge */}
            <div className="sm:hidden flex items-center gap-3 mt-6 p-3 px-4 rounded-2xl bg-white/90 border border-black/[0.08] shadow-xs">
              <Nirvana3DCoin size={48} />
              <div className="text-left">
                <div className="text-xs font-semibold text-charcoal flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Nirvana 3D Core
                </div>
                <div className="text-[11px] text-charcoal-muted">Autonomous · Zero Telemetry</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 01.5: MODERN SAAS DASHBOARD SHOWCASE (RICH GRAPHIC ASSET)
      ========================================================================= */}
      <section className="py-16 px-6 sm:px-12 bg-transparent border-y border-black/[0.06]">
        <div className="max-w-6xl mx-auto space-y-8 text-center">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-brand font-semibold">
              On-Device Telemetry & Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-charcoal">
              Granular Telemetry & Threat Visibility
            </h2>
            <p className="text-sm sm:text-base text-charcoal-soft max-w-xl mx-auto">
              Know exactly what scripts, tracking requests, and third-party cookies are intercepted in real-time.
            </p>
          </div>

          {/* High-End Studio SaaS Dashboard Graphic */}
          <div className="relative rounded-3xl overflow-hidden border border-black/[0.08] shadow-float bg-[#111116]">
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/9]">
              <Image
                src="/assets/saas_browser_hero.jpg"
                alt="Nirvana Browser Telemetry and Privacy Analytics Dashboard"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 02 & 03: THE PROBLEM — DIGITAL ATMOSPHERE AUDIT
      ========================================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 bg-transparent border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto space-y-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/[0.06] text-xs font-medium text-charcoal-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <span>Digital Atmosphere Audit</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-charcoal leading-tight">
            The modern web got loud.
          </h2>

          <p className="text-base sm:text-lg text-charcoal-soft max-w-2xl mx-auto leading-relaxed">
            Every page you visit today triggers dozens of invisible auction bid requests, third-party cookies, intrusive overlay popups, sticky autoplay videos, and battery-draining telemetry scripts.
          </p>

          {/* Minimalist Metric Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 pt-4">
            {[
              { title: "Cross-Site Trackers", count: "40+ / page", icon: EyeOff },
              { title: "Fingerprinting", count: "Canvas & Audio", icon: Lock },
              { title: "Autoplay Video Ads", count: "Bandwidth Theft", icon: Flame },
              { title: "Cookie Consent Walls", count: "Dark Patterns", icon: Sliders },
              { title: "Unnecessary Telemetry", count: "Device Logging", icon: Shield },
              { title: "RAM Degradation", count: "Script Bloat", icon: Zap },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-4 rounded-2xl apple-card-light text-left space-y-2"
                >
                  <Icon className="w-4 h-4 text-rose-600" />
                  <div className="text-xs font-semibold text-charcoal">{item.title}</div>
                  <div className="text-[11px] font-mono text-charcoal-muted">{item.count}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 04: SILENCE — LESS NOISE. MORE WEB.
      ========================================================================= */}
      <section className="py-28 sm:py-36 px-6 sm:px-12 text-center flex flex-col items-center justify-center bg-transparent border-b border-black/[0.06]">
        <div className="max-w-3xl mx-auto space-y-5">
          <span className="text-xs font-mono uppercase tracking-wider text-brand font-semibold">
            The Calm Computing Manifesto
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-charcoal leading-none">
            LESS NOISE. <br />
            <span className="text-charcoal-faded font-light italic">MORE WEB.</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-soft font-normal max-w-xl mx-auto pt-2 leading-relaxed">
            Nirvana strips away the friction. Speed is not just raw benchmarks — speed is the cognitive calm of a page that loads exactly what you requested, and nothing else.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 05 & 06: MEET NIRVANA — THE ENGINE & DEFENSE MATRIX
      ========================================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 bg-transparent border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-brand font-semibold">
              Independent Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-charcoal leading-tight">
              Meet Nirvana. <br />
              Your browsing. <br />
              <span className="text-brand">Your space.</span>
            </h2>
            <p className="text-sm sm:text-base text-charcoal-soft leading-relaxed">
              We took the robust, battle-tested GeckoView engine maintained by Mozilla, forked it into our independent lab, redesigned the interface for single-handed mobile navigation, and stripped telemetry pipelines at the root.
            </p>

            <div className="space-y-3 pt-2">
              {[
                {
                  title: "Total Cookie Protection",
                  desc: "Isolates cookies to the site where they were created, preventing cross-site tracking dossiers.",
                  icon: ShieldCheck,
                  iconColor: "text-[#F26522]",
                },
                {
                  title: "Pre-Configured uBlock Origin",
                  desc: "Deep integration with world-class open-source ad and script filtering.",
                  icon: Puzzle,
                  iconColor: "text-[#7C3AED]",
                },
                {
                  title: "Delete On Quit Controls",
                  desc: "Configurable purge of tabs, history, cookies, and cache the moment you close the app.",
                  icon: EyeOff,
                  iconColor: "text-[#E11D48]",
                },
              ].map((f, i) => {
                const IconComp = f.icon;
                return (
                  <div key={i} className="p-4 rounded-2xl apple-card-light flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-black/[0.03] flex items-center justify-center shrink-0 mt-0.5">
                      <IconComp className={`w-4 h-4 ${f.iconColor}`} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-charcoal">{f.title}</div>
                      <div className="text-xs text-charcoal-muted leading-relaxed mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                href="/features/privacy"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-brand hover:underline"
              >
                <span>Read our technical privacy transparency report</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center justify-center gap-6">
            <PhoneMockup
              src="/assets/screenshots/tracking-protection.jpeg"
              alt="Enhanced Tracking Protection UI"
              caption="Standard, Strict & Custom protection with Total Cookie Shield"
            />
            <PhoneMockup
              src="/assets/screenshots/private-browsing.jpeg"
              alt="Private Browsing Screen"
              caption="True private mode: leaves no trace on device memory"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 07: CAPABILITIES BENTO GRID (WITH RICH VISUAL CARDS)
      ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-transparent border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-brand font-semibold">
                Capabilities
              </span>
              <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-charcoal mt-1">
                Engineered for Clarity & Control
              </h3>
            </div>
            <Link
              href="/features"
              className="text-xs font-medium text-charcoal-muted hover:text-charcoal flex items-center gap-1"
            >
              Browse all features catalog <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Modern Minimalist Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1: Rich Visual for uBlock Origin (Dark Obsidian Card) */}
            <div className="lg:col-span-2 rounded-3xl apple-card-dark overflow-hidden flex flex-col justify-between p-7 sm:p-9 relative">
              <div className="space-y-3 z-10 max-w-md">
                <span className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  Pre-Configured Extension
                </span>
                <h4 className="text-2xl font-semibold tracking-tight text-white">
                  Native uBlock Origin Content Blocking
                </h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  World-class ad, script, and cookie-wall mitigation enabled out-of-the-box. Intercepts thousands of invasive requests with zero latency.
                </p>
              </div>

              <div className="relative w-full aspect-[16/9] mt-6 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/assets/card_ublock_shield.jpg"
                  alt="uBlock Origin Filtration Telemetry Card"
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover object-center"
                />
              </div>

              <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-xs text-white/60">
                <span>Architecture: WebExtension API</span>
                <Link href="/features/extensions" className="text-brand font-medium hover:underline flex items-center gap-1">
                  Extension details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Feature Card 2: Rich Visual for Total Cookie Protection */}
            <div className="rounded-3xl apple-card-light overflow-hidden flex flex-col justify-between p-7 relative">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Cookie Isolation
                  </span>
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="text-xl font-semibold tracking-tight text-charcoal">
                  Total Cookie Protection
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Creates an isolated sandbox for every website you visit, preventing ad companies from building cross-site behavioral dossiers.
                </p>
              </div>

              <div className="relative w-full aspect-[4/3] my-4 rounded-xl overflow-hidden border border-black/[0.06]">
                <Image
                  src="/assets/card_cookie_containment.jpg"
                  alt="Cookie Partition Sandbox Vaults"
                  fill
                  sizes="400px"
                  className="object-cover object-center"
                />
              </div>

              <Link href="/features/protection" className="text-xs font-medium text-brand hover:underline flex items-center justify-between pt-2">
                <span>View protection specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Feature Card 3: Password Vault */}
            <div className="rounded-3xl apple-card-light p-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D97706] border border-amber-200 flex items-center justify-center">
                  <KeyRound className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-semibold tracking-tight text-charcoal">
                  Local Password Vault
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Stores website logins and passkeys locally using Android Keystore hardware-backed encryption with biometric fingerprint unlock.
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs">
                <span className="text-charcoal-faded text-[11px] font-mono">SQLite + Keystore</span>
                <Link href="/features/passwords" className="text-brand font-medium hover:underline">
                  Vault details →
                </Link>
              </div>
            </div>

            {/* Feature Card 4: DNS over HTTPS */}
            <div className="rounded-3xl apple-card-light p-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] border border-sky-200 flex items-center justify-center">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-semibold tracking-tight text-charcoal">
                  DNS over HTTPS (DoH)
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Encrypts your domain queries through Cloudflare or NextDNS, stopping Wi-Fi snoopers and telecom providers from logging your visited domains.
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs">
                <span className="text-charcoal-faded text-[11px] font-mono">RFC 8484 Protocol</span>
                <Link href="/features/dns" className="text-brand font-medium hover:underline">
                  Network details →
                </Link>
              </div>
            </div>

            {/* Feature Card 5: Delete on Quit */}
            <div className="rounded-3xl apple-card-light p-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#E11D48] border border-rose-200 flex items-center justify-center">
                  <EyeOff className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-semibold tracking-tight text-charcoal">
                  Delete on Quit Controls
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Automatic purging of open tabs, cookies, media cache, and site permissions upon closing the browser session.
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs">
                <span className="text-charcoal-faded text-[11px] font-mono">Zero Disk Persistence</span>
                <Link href="/features/privacy-on-quit" className="text-brand font-medium hover:underline">
                  Purge settings →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 08: INTERACTIVE PROTECTION DEMO
      ========================================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 bg-transparent border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-brand font-semibold">
              Live Sandbox
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-charcoal mt-1">
              Toggle the noise off.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-soft max-w-xl mx-auto mt-1">
              See what happens when you switch from an unshielded commercial browser to Nirvana&apos;s clean GeckoView environment.
            </p>
          </div>

          <ProtectionDemo />
        </div>
      </section>

      {/* =========================================================================
          SCREEN 09: REAL BROWSER UI GALLERY (HORIZONTAL ON DESKTOP)
      ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-transparent border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-brand font-semibold">
                Authentic Software
              </span>
              <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-charcoal mt-1">
                The Real Interface, Unadorned
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                Actual captured screens from the Nirvana 1.0.2 Android build. No conceptual mockups.
              </p>
            </div>
            <div className="text-xs font-mono text-charcoal-muted">
              Scroll horizontally →
            </div>
          </div>

          {/* Horizontal UI Showcase */}
          <div className="flex gap-5 overflow-x-auto pb-6 pt-2 no-scrollbar snap-x">
            {[
              {
                src: "/assets/screenshots/home.jpeg",
                title: "Browser Home",
                desc: "Shortcut dials, shield badge & noise-free cards",
              },
              {
                src: "/assets/screenshots/menu.jpeg",
                title: "Bottom Sheet Menu",
                desc: "Instant access to extensions, passwords & settings",
              },
              {
                src: "/assets/screenshots/extensions.jpeg",
                title: "Extensions Hub",
                desc: "uBlock Origin enabled by default with one-tap installs",
              },
              {
                src: "/assets/screenshots/customize.jpeg",
                title: "Customization",
                desc: "Aurora Borealis icon, address bar top/bottom placement",
              },
              {
                src: "/assets/screenshots/search-engines.jpeg",
                title: "Search Switcher",
                desc: "Direct queries in Google, Bing, DuckDuckGo & Wikipedia",
              },
              {
                src: "/assets/screenshots/delete-data.jpeg",
                title: "Delete Browsing Data",
                desc: "Granular checkboxes for tabs, cookies, cache & permissions",
              },
              {
                src: "/assets/screenshots/about-build.jpeg",
                title: "About & Build Verification",
                desc: "GeckoView 153.0.4, Android 16 target, MPL 2.0 notices",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="shrink-0 snap-start flex flex-col items-center bg-[#FAFAF8] p-5 rounded-3xl border border-black/[0.06] w-[280px] sm:w-[320px]"
              >
                <div className="relative w-full aspect-[9/18] rounded-2xl overflow-hidden bg-[#111115] border border-black/10">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="300px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="w-full text-left pt-4 space-y-1">
                  <div className="text-sm font-semibold text-charcoal">{item.title}</div>
                  <div className="text-xs text-charcoal-muted leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 10: ERGONOMICS — BUILT FOR YOUR HAND
      ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-transparent border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-brand font-semibold">
              Ergonomics
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-charcoal leading-tight">
              Built for your hand. <br />
              Not a desktop shrunk down.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-soft leading-relaxed">
              Modern smartphones are tall. Reaching the top of the display to tap an address bar causes thumb strain. In Nirvana, place the address bar at the bottom with a single toggle, keeping tabs and bookmarks within natural reach.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl apple-card-light">
                <Smartphone className="w-5 h-5 text-brand mb-2" />
                <div className="text-xs font-semibold text-charcoal">Bottom Toolbar Layout</div>
                <div className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                  Natural thumb reach for navigation, tab switcher, and quick search.
                </div>
              </div>
              <div className="p-4 rounded-2xl apple-card-light">
                <Layers className="w-5 h-5 text-[#7C3AED] mb-2" />
                <div className="text-xs font-semibold text-charcoal">Simple vs Expanded</div>
                <div className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                  Choose between a compact floating bar or full-width action dock.
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/features/customization"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-brand hover:underline"
              >
                <span>Learn more about layout controls</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <PhoneMockup
              src="/assets/screenshots/customize.jpeg"
              alt="Toolbar & Icon Customization"
              caption="Nirvana customization settings: Theme, Address bar position & Toolbar layout"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 11: DECOUPLED SEARCH SWITCHER
      ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-transparent border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-brand font-semibold">
              Decoupled Discovery
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-charcoal mt-1">
              Search your way.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-soft max-w-xl mx-auto mt-2">
              Nirvana does not force you into a single corporate search ecosystem. Switch between Google, DuckDuckGo, Bing, or direct Wikipedia search right from the address bar.
            </p>
          </div>

          <SearchEngineSwitcher />
        </div>
      </section>

      {/* =========================================================================
          SCREEN 16: OPEN SOURCE STORY — BUILT ON OPEN SOURCE
      ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-transparent border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto rounded-3xl apple-card-light p-8 sm:p-12 text-left space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.06] pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-brand font-semibold">
                Standing on Giants
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-charcoal mt-1">
                Built on Open Source
              </h3>
            </div>
            <Link
              href="/mozilla-attribution"
              className="px-4 py-2 rounded-full border border-black/[0.08] text-xs font-mono uppercase tracking-wider text-charcoal hover:bg-black/[0.03] transition-colors inline-flex items-center gap-1.5"
            >
              Mozilla Attribution <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-charcoal-soft leading-relaxed">
            <p>
              Nirvana Browser is based on the <strong>Firefox open-source codebase</strong>. We are deeply grateful to Mozilla and the thousands of Firefox contributors worldwide whose open-source work makes further independent browser development possible.
            </p>
            <p>
              Our team takes the upstream GeckoView engine, modifies the browser UI/UX for single-handed mobile ergonomics, minimizes telemetry where technically possible, and introduces unique calm privacy defaults.
            </p>
          </div>

          {/* Upstream vs Nirvana Separation Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-black/[0.02] border border-black/[0.05] space-y-2">
              <div className="text-xs font-semibold text-charcoal">Upstream Foundation</div>
              <div className="text-xs text-charcoal-muted leading-relaxed">
                Mozilla Firefox codebase, GeckoView rendering engine, SpiderMonkey JavaScript runtime, and multi-process architecture under Mozilla Public License 2.0.
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-brand/5 border border-brand/20 space-y-2">
              <div className="text-xs font-semibold text-brand">Nirvana Independent Work</div>
              <div className="text-xs text-charcoal-muted leading-relaxed">
                UI & ergonomics redesign, telemetry minimization, custom app icon system, bottom toolbar implementation, and independent distribution.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 17: COMPARISON MATRIX
      ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-transparent border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-brand font-semibold">
              Radical Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-charcoal mt-1">
              No browser is best at everything.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-soft max-w-xl mx-auto mt-2">
              We don&apos;t believe in fake marketing scores. Here is an honest preview of how Nirvana compares with Chrome, Brave, and Firefox.
            </p>
          </div>

          {/* Comparison Matrix Table */}
          <div className="rounded-2xl border border-black/[0.08] overflow-hidden text-left shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-xs font-mono">
                <thead>
                  <tr className="bg-white/80 backdrop-blur-sm text-charcoal border-b border-black/[0.06]">
                    <th className="p-3.5 sm:p-4 font-semibold">Dimension</th>
                    <th className="p-3.5 sm:p-4 font-semibold text-brand">Nirvana (Android)</th>
                    <th className="p-3.5 sm:p-4 font-semibold">Google Chrome</th>
                    <th className="p-3.5 sm:p-4 font-semibold">Brave Browser</th>
                    <th className="p-3.5 sm:p-4 font-semibold">Mozilla Firefox</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.05] bg-white">
                  <tr>
                    <td className="p-3.5 sm:p-4 font-sans font-medium text-charcoal">Browser Engine</td>
                    <td className="p-3.5 sm:p-4 font-bold text-brand">GeckoView 153</td>
                    <td className="p-3.5 sm:p-4 text-charcoal-muted">Blink / Chromium</td>
                    <td className="p-3.5 sm:p-4 text-charcoal-muted">Blink / Chromium</td>
                    <td className="p-3.5 sm:p-4 text-charcoal-muted">GeckoView 153</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-sans font-medium text-charcoal">Mobile Extensions</td>
                    <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">✓ Full uBlock & Addons</td>
                    <td className="p-3.5 sm:p-4 text-rose-600">✕ Disabled on Android</td>
                    <td className="p-3.5 sm:p-4 text-amber-700">~ Built-in Shields Only</td>
                    <td className="p-3.5 sm:p-4 text-emerald-700">✓ Supported Addons</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-sans font-medium text-charcoal">Telemetry Model</td>
                    <td className="p-3.5 sm:p-4 text-emerald-700 font-bold">Minimized / Stripped</td>
                    <td className="p-3.5 sm:p-4 text-rose-600">Extensive Google Ad Sync</td>
                    <td className="p-3.5 sm:p-4 text-emerald-700">Privacy Preserving</td>
                    <td className="p-3.5 sm:p-4 text-charcoal-muted">Standard Opt-Out</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 sm:p-4 font-sans font-medium text-charcoal">Desktop Version</td>
                    <td className="p-3.5 sm:p-4 text-amber-700">~ Mobile Focused (Planned)</td>
                    <td className="p-3.5 sm:p-4 text-emerald-700">✓ All Platforms</td>
                    <td className="p-3.5 sm:p-4 text-emerald-700">✓ All Platforms</td>
                    <td className="p-3.5 sm:p-4 text-emerald-700">✓ All Platforms</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <Link
              href="/compare"
              className="apple-btn-ghost px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span>View 9-Browser Full Comparison Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 18: NIRVANA ECOSYSTEM
      ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-transparent border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-brand font-semibold">
                The Broader Vision
              </span>
              <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-charcoal mt-1">
                More Than a Browser
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                Independent privacy utilities under development by the Nirvana team.
              </p>
            </div>
            <Link
              href="/products"
              className="text-xs font-medium text-charcoal-muted hover:text-charcoal flex items-center gap-1"
            >
              <span>Explore full laboratory ecosystem</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {/* 1. Perl Search */}
            <EcosystemWaveCard
              title="Perl Search"
              subtitle="Decoupled Engine"
              desc="Zero-tracking, decoupled privacy search aggregator without profiling."
              status="Prototype Active"
              href="/products/perl"
              theme="emerald"
              iconSvg={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <circle cx="11" cy="11" r="3" strokeWidth="1.5" />
                </svg>
              }
            />

            {/* 2. Nivro Store (Original Uiverse Geometric Emblem & Signature Wave Palette) */}
            <EcosystemWaveCard
              title="Nivro Store"
              subtitle="Open-Source Repo"
              desc="Curated open-source Android app repository with verified hashes."
              status="Lab Alpha"
              href="/products/nivro"
              theme="default"
              iconSvg={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10">
                  <path
                    fill="currentColor"
                    d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784 14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701 3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476 19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091 12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466 16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402 15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864 19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528 16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68 20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"
                  />
                </svg>
              }
            />

            {/* 3. OpenStore */}
            <EcosystemWaveCard
              title="OpenStore"
              subtitle="Privacy Addons"
              desc="Community marketplace for verified privacy extensions and scripts."
              status="Architecture"
              href="/products/openstore"
              theme="amber"
              iconSvg={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                  <path d="m20.5 7-7.5-4.5L5.5 7v10l7.5 4.5 7.5-4.5V7z" />
                  <path d="M13 2.5v19" />
                  <path d="m20.5 7-7.5 4.5-7.5-4.5" />
                </svg>
              }
            />

            {/* 4. Nirvana Focus */}
            <EcosystemWaveCard
              title="Nirvana Focus"
              subtitle="Quiet Companion"
              desc="Ultra-minimal single-session disposable privacy browser companion."
              status="Roadmap 2026"
              href="/products/focus"
              theme="lavender"
              iconSvg={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 19: TEAM SECTION
      ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-transparent border-b border-black/[0.06]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-brand font-semibold">
              Independent Lab
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-charcoal">
              Built by people, not a corporation.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-soft max-w-xl mx-auto">
              Nirvana is led by an independent core team dedicated to restoring quietude to the mobile web.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {/* Founder Card - Uiverse Style */}
            <FounderProfileCard
              name="Abhiraj Aryan"
              role="Creator & Team Leader"
              bio="Browser architect directing GeckoView modifications, privacy pipelines, and product strategy."
              image="/assets/founder.png"
              github="https://github.com/viroaryan"
              instagram="https://instagram.com/viro.coder.aryan"
              telegram="https://t.me/nirvanabrowser"
            />

            {/* Rahul Kumar Pal */}
            <TeamMemberUiverseCard
              name="Rahul Kumar Pal"
              role="Code Reviewer & QA"
              bio="Codebase QA, regression testing, bug remediation, and patch verification across modern Android releases."
              initials="RP"
              theme="lavender"
            />

            {/* Shivam Giri */}
            <TeamMemberUiverseCard
              name="Shivam Giri"
              role="Marketing & Outreach"
              bio="Community growth, open-source communication, developer engagement, and digital brand storytelling."
              initials="SG"
              theme="sky"
            />

            {/* Priyanshu Singh */}
            <TeamMemberUiverseCard
              name="Priyanshu Singh"
              role="Resource Analyst"
              bio="Memory benchmark analysis, battery telemetry audits, and upstream Gecko release performance tracking."
              initials="PS"
              theme="emerald"
            />
          </div>

          {/* Join the Team Callout */}
          <div className="p-6 sm:p-8 rounded-3xl apple-card-mist flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-lg font-semibold text-charcoal">
                We are looking for more builders.
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                Gecko developers, Android engineers, UI/UX designers, and technical writers are welcome.
              </p>
            </div>
            <Link
              href="/join"
              className="apple-btn-primary px-6 py-3 rounded-full text-xs font-medium tracking-wide shrink-0"
            >
              Join the Team →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 20: COMMUNITY — BUILD WITH US
      ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-transparent border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-brand font-semibold">
              Open Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-charcoal mt-1">
              Build with us.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-soft max-w-xl mx-auto mt-1">
              Join thousands of testers, privacy advocates, and contributors across our channels.
            </p>
          </div>

          {/* Uiverse Interactive Social Matrix Cube */}
          <div className="flex flex-col items-center justify-center py-4">
            <SocialCubeWidget />
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-black/[0.08] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              <span className="text-xs font-mono text-charcoal font-medium">
                Hover or tap to unlock Nirvana community channels
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 21 & 22: FINAL DOWNLOAD CTA
      ========================================================================= */}
      <section className="relative py-32 sm:py-44 px-6 sm:px-12 bg-transparent text-center flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute w-[700px] h-[350px] atmospheric-bloom opacity-40 pointer-events-none" />

        <div className="relative max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 mx-auto relative mb-3 bg-white p-2 rounded-2xl border border-black/[0.08] shadow-xs flex items-center justify-center">
            <Image
              src="/assets/logo.png"
              alt="Nirvana Emblem"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-charcoal leading-tight">
            Ready for a <br />
            quieter web?
          </h2>

          <p className="text-base sm:text-lg text-charcoal-soft font-normal max-w-lg mx-auto">
            Experience mobile browsing stripped of noise, advertisements, and surveillance telemetry.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="https://play.google.com/store/apps/details?id=org.nirvana"
              target="_blank"
              rel="noreferrer"
              className="apple-btn-primary px-8 py-4 rounded-full text-xs font-medium tracking-wide inline-flex items-center gap-2.5 shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download for Android</span>
            </a>

            <Link
              href="/download"
              className="apple-btn-ghost px-7 py-4 rounded-full text-xs font-mono uppercase tracking-wider"
            >
              Direct APK & SHA256
            </Link>
          </div>

          <div className="pt-8 text-xs font-mono text-charcoal-muted">
            Free forever · Open Source · Android 8.0 through Android 16
          </div>
        </div>
      </section>
    </div>
  );
}

