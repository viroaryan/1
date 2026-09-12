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
import ProtectionDemo from "@/components/ui/ProtectionDemo";
import SearchEngineSwitcher from "@/components/ui/SearchEngineSwitcher";
import FounderProfileCard from "@/components/ui/FounderProfileCard";
import TeamMemberUiverseCard from "@/components/ui/TeamMemberUiverseCard";
import SocialCubeWidget from "@/components/ui/SocialCubeWidget";
import EcosystemWaveCard from "@/components/ui/EcosystemWaveCard";
import { UiverseQuoteCard, QuoteCardColorVariant } from "@/components/ui/UiverseQuoteCard";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden pt-28 sm:pt-32">
      {/* =========================================================================
          SCREEN 01: MODERN MINIMALIST (APPLE / SF PRO) HERO
      ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 sm:px-10 lg:px-14 xl:px-16 py-20 lg:py-28 overflow-hidden">
        {/* Subtle Ambient Light Glow */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] atmospheric-bloom opacity-40 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto w-full text-center space-y-7">
          {/* Centralized Typography & Intent */}
          <div className="space-y-6">
            {/* Apple/Hermes-style Minimal Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 shadow-xs text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono tracking-wider uppercase text-white/90">
                Nirvana Browser · Android 16 Ready · GeckoView 153.0.4
              </span>
            </div>

            {/* Hermes-style High-Contrast Serif Display Typography */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white font-serif-display uppercase leading-[1.04]">
              Private. Fast. <br />
              <span className="text-white/80 font-normal">Beautiful.</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-rose-100/90 font-normal max-w-2xl mx-auto leading-relaxed">
              A browser built for a quieter web. An independent Android browser powered by Mozilla&apos;s open-source GeckoView engine, modified to strip away tracking dossiers and commercial telemetry.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=org.nirvana"
                target="_blank"
                rel="noreferrer"
                className="apple-btn-primary px-8 py-4 rounded-full text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2.5 shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download for Android</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <Link
                href="/browser"
                className="apple-btn-ghost px-7 py-4 rounded-full text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Explore Browser</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Micro verification badges */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-xs font-mono uppercase tracking-wide text-white/70">
              <span className="flex items-center gap-1.5 font-medium text-white/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                GeckoView Upstream
              </span>
              <span className="hidden sm:inline text-white/30">·</span>
              <span className="flex items-center gap-1.5 font-medium text-white/90">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-300" />
                uBlock Origin Native
              </span>
              <span className="hidden sm:inline text-white/30">·</span>
              <span className="font-medium text-white/90">Open Source • MPL 2.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HERO ARTWORK: ZEN MEDITATION & DIGITAL CALM (16:9 SEAMLESS BLEND)
      ========================================================================= */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto overflow-hidden">
        <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl">
          <Image
            src="/assets/art/art_zen_meditation.jpg"
            alt="Zen Meditation — Digital Silence & Mindful Computing"
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-center"
            priority
          />
          {/* Seamless Vignette Blending: Feathered edges melt into rose-red background */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_40px_rgba(158,18,45,0.75)] sm:shadow-[inset_0_0_120px_60px_rgba(158,18,45,0.85)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#9E122D] via-transparent to-[#9E122D]/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#9E122D]/70 via-transparent to-[#9E122D]/70 pointer-events-none" />

          {/* Minimalist Floated Label */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-10 space-y-1.5 max-w-md">
            <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 border border-white/20">
              Mindful Architecture
            </span>
            <h3 className="text-xl sm:text-3xl font-serif-display text-white drop-shadow-md">
              Restoring Digital Sanctuary.
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed drop-shadow">
              A serene, distraction-free environment engineered to protect human focus from manipulative algorithms.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 02 & 03: THE PROBLEM — DIGITAL ATMOSPHERE AUDIT
      ========================================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 bg-transparent border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto space-y-12 text-center">
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-black/[0.06] text-xs font-semibold text-charcoal-muted shadow-xs">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>Digital Atmosphere Audit</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-charcoal leading-tight">
              The modern web got loud.
            </h2>

            <p className="text-base sm:text-lg text-charcoal-soft leading-relaxed">
              Every page you visit today triggers dozens of invisible auction bid requests, third-party cookies, intrusive overlay popups, sticky autoplay videos, and battery-draining telemetry scripts.
            </p>
          </div>

          {/* Uiverse Quote Card Grid (6 Unique Colors) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center pt-2">
            {[
              {
                cardName: "Tracker Threat",
                bodyText: "Cross-Site Trackers",
                authorTitle: "- 40+ Intercepted",
                authorSubtitle: "Per Single Page",
                colorVariant: "lime" as QuoteCardColorVariant,
              },
              {
                cardName: "Identity Leak",
                bodyText: "Device Fingerprinting",
                authorTitle: "- Canvas & Audio",
                authorSubtitle: "Hardware Spoofed",
                colorVariant: "coral" as QuoteCardColorVariant,
              },
              {
                cardName: "Bandwidth Theft",
                bodyText: "Autoplay Video Ads",
                authorTitle: "- High CPU Bloat",
                authorSubtitle: "Zero Auto-Stream",
                colorVariant: "amber" as QuoteCardColorVariant,
              },
              {
                cardName: "Dark Patterns",
                bodyText: "Cookie Consent Walls",
                authorTitle: "- Annoying Overlays",
                authorSubtitle: "Auto-Declined",
                colorVariant: "lilac" as QuoteCardColorVariant,
              },
              {
                cardName: "Silent Sniffing",
                bodyText: "Unnecessary Telemetry",
                authorTitle: "- Device Logging",
                authorSubtitle: "Diagnostics Severed",
                colorVariant: "mint" as QuoteCardColorVariant,
              },
              {
                cardName: "Engine Health",
                bodyText: "RAM Degradation",
                authorTitle: "- Script Bloat",
                authorSubtitle: "3x Lighter Load",
                colorVariant: "sky" as QuoteCardColorVariant,
              },
            ].map((item, i) => (
              <UiverseQuoteCard
                key={i}
                cardName={item.cardName}
                bodyText={item.bodyText}
                authorTitle={item.authorTitle}
                authorSubtitle={item.authorSubtitle}
                colorVariant={item.colorVariant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 04: SILENCE — LESS NOISE. MORE WEB. (WITH SEAMLESS BLENDED OWL ART)
      ========================================================================= */}
      <section className="py-28 sm:py-36 px-6 sm:px-12 bg-transparent border-b border-black/[0.06] overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative Manifesto */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-rose-300 font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20">
              The Calm Computing Manifesto
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white font-serif-display leading-none">
              LESS NOISE. <br />
              <span className="text-white/70 font-light italic">MORE WEB.</span>
            </h2>
            <p className="text-base sm:text-lg text-rose-100/90 font-normal leading-relaxed">
              Nirvana strips away the friction. Speed is not just raw benchmarks — speed is the cognitive calm of a page that loads exactly what you requested, and nothing else.
            </p>
            <p className="text-sm sm:text-base text-rose-200/80 leading-relaxed font-light">
              Like a silent observer in the night, your browser should remain completely silent, vigilant against intrusive data trackers, and utterly invisible to commercial networks.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <div className="p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md space-y-1">
                <div className="text-sm font-semibold text-white">Zero Ambient Noise</div>
                <div className="text-xs text-rose-100/80">No clickbait feeds, notification pings, or background ad-bids.</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md space-y-1">
                <div className="text-sm font-semibold text-white">Pure Attention</div>
                <div className="text-xs text-rose-100/80">Every pixel dedicated to the article or tool you chose to open.</div>
              </div>
            </div>
          </div>

          {/* Right Seamless Blended Art: Vigilant Owl (9:16) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/art/art_owl.jpg"
                alt="Vigilant White & Crimson Owl — The Silent Guardian"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center"
              />
              {/* Seamless Edge Blending into Rose Carmine Canvas */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_30px_rgba(158,18,45,0.7)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9E122D] via-transparent to-[#9E122D]/40 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#9E122D]/50 via-transparent to-[#9E122D]/50 pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 z-10 text-left">
                <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20">
                  Silent Watcher
                </span>
                <div className="text-sm font-semibold text-white mt-1 drop-shadow">Total Vigilance</div>
                <div className="text-[11px] text-white/80 drop-shadow">Watching over your privacy around the clock.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 05 & 06: MEET NIRVANA — THE ENGINE & DEFENSE MATRIX
      ========================================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 bg-transparent border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto space-y-10 text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-wider text-rose-300 font-semibold">
              Independent Engineering
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight font-serif-display uppercase">
              Meet Nirvana. <br />
              Your browsing. Your space.
            </h2>
            <p className="text-sm sm:text-base text-rose-100/90 leading-relaxed">
              We took the robust, battle-tested GeckoView engine maintained by Mozilla, forked it into our independent lab, redesigned the interface for single-handed mobile navigation, and stripped telemetry pipelines at the root.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-2">
            {[
              {
                title: "Total Cookie Protection",
                desc: "Isolates cookies to the site where they were created, preventing cross-site tracking dossiers.",
                icon: ShieldCheck,
                badge: "Strict Partitioning",
              },
              {
                title: "Pre-Configured uBlock Origin",
                desc: "Deep integration with world-class open-source ad and script filtering out of the box.",
                icon: Puzzle,
                badge: "0ms Intercept",
              },
              {
                title: "Delete On Quit Controls",
                desc: "Configurable purge of tabs, history, cookies, and cache the moment you close the app.",
                icon: EyeOff,
                badge: "Zero Persistence",
              },
            ].map((f, i) => {
              const IconComp = f.icon;
              return (
                <div key={i} className="p-6 rounded-3xl liquid-glass border border-white/20 flex flex-col justify-between gap-4 shadow-xl">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                        <IconComp className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/15">
                        {f.badge}
                      </span>
                    </div>
                    <div className="text-base font-semibold text-white">{f.title}</div>
                    <div className="text-xs text-rose-100/80 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <Link
              href="/features/privacy"
              className="apple-btn-ghost px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span>Read our technical privacy transparency report</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
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
              <div className="space-y-4 z-10 max-w-lg">
                <span className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  Pre-Configured Extension
                </span>
                <h4 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Native uBlock Origin Content Blocking
                </h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  World-class ad, script, and cookie-wall mitigation enabled out-of-the-box. Intercepts thousands of invasive requests with zero latency before network dispatch.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-xs font-mono text-orange-300 font-semibold">0ms Overhead</div>
                  <div className="text-xs text-white/60">Hardware-level fast filter matching</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-xs font-mono text-emerald-300 font-semibold">EasyList + EasyPrivacy</div>
                  <div className="text-xs text-white/60">Updated automatic blocklists</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-xs font-mono text-cyan-300 font-semibold">Zero Telemetry</div>
                  <div className="text-xs text-white/60">No user data leaves your device</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span>Architecture: WebExtension API</span>
                <Link href="/features/extensions" className="text-brand font-medium hover:underline flex items-center gap-1">
                  Extension details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Feature Card 2: Total Cookie Protection (Variety 2: Sazzad Emerald Aurora) */}
            <div className="rounded-3xl sazzad-card overflow-hidden flex flex-col justify-between p-7 relative">
              <div className="sazzad-bg"></div>
              <div className="sazzad-aurora aurora-emerald"></div>
              <div className="sazzad-content flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
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

                <div className="p-4 rounded-xl bg-black/[0.03] border border-black/[0.06] space-y-1.5 my-2">
                  <div className="text-xs font-mono font-semibold text-charcoal">Partitioned Storage Jars</div>
                  <div className="text-[11px] text-charcoal-muted leading-snug">Each origin receives a private, isolated cookie jar that cannot cross-communicate.</div>
                </div>

                <Link href="/features/protection" className="text-xs font-medium text-brand hover:underline flex items-center justify-between pt-2">
                  <span>View protection specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Feature Card 3: Password Vault (Variety 1: Bouncing Amber Blob) */}
            <div className="rounded-3xl uiverse-blob-card p-7 flex flex-col justify-between relative">
              <div className="card-bg-inner"></div>
              <div className="blob blob-amber"></div>
              <div className="card-content flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D97706] border border-amber-200 flex items-center justify-center shadow-xs">
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
            </div>

            {/* Feature Card 4: DNS over HTTPS (Variety 2: Sazzad Cyan Aurora) */}
            <div className="rounded-3xl sazzad-card p-7 flex flex-col justify-between relative">
              <div className="sazzad-bg"></div>
              <div className="sazzad-aurora aurora-cyan"></div>
              <div className="sazzad-content flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] border border-sky-200 flex items-center justify-center shadow-xs">
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
            </div>

            {/* Feature Card 5: Delete on Quit (Variety 1: Bouncing Rose-Red Blob) */}
            <div className="rounded-3xl uiverse-blob-card p-7 flex flex-col justify-between relative">
              <div className="card-bg-inner"></div>
              <div className="blob blob-red"></div>
              <div className="card-content flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#E11D48] border border-rose-200 flex items-center justify-center shadow-xs">
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

          {/* Modern Minimalist Features Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Browser Home & Shield",
                desc: "Shortcut dials, shield badge & noise-free cards designed for distraction-free navigation.",
                tag: "Clean Surface",
              },
              {
                icon: Layers,
                title: "Bottom Sheet Menu",
                desc: "Instant thumb access to extensions, passwords, and security controls.",
                tag: "Ergonomics",
              },
              {
                icon: Puzzle,
                title: "Extensions Hub",
                desc: "uBlock Origin enabled by default with one-tap installs for verified privacy addons.",
                tag: "Add-ons",
              },
              {
                icon: Sliders,
                title: "Layout Customization",
                desc: "Switch address bar top or bottom, and toggle between compact and expanded toolbars.",
                tag: "Personalization",
              },
              {
                icon: Search,
                title: "Search Switcher",
                desc: "Direct queries in Google, Bing, DuckDuckGo & Wikipedia without profiling.",
                tag: "Decoupled",
              },
              {
                icon: EyeOff,
                title: "Granular Data Purging",
                desc: "One-tap and automated checkboxes for tabs, cookies, cache, and site permissions.",
                tag: "Total Purge",
              },
            ].map((item, i) => {
              const isEven = i % 2 === 0;
              const IconComp = item.icon;
              return (
                <div
                  key={i}
                  className={`p-7 rounded-3xl relative overflow-hidden flex flex-col justify-between ${
                    isEven ? "uiverse-blob-card" : "sazzad-card"
                  }`}
                >
                  {isEven ? (
                    <>
                      <div className="card-bg-inner"></div>
                      <div className="blob blob-red"></div>
                    </>
                  ) : (
                    <>
                      <div className="sazzad-bg"></div>
                      <div className="sazzad-aurora aurora-ruby"></div>
                    </>
                  )}
                  <div className={isEven ? "card-content space-y-4" : "sazzad-content space-y-4"}>
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 border border-rose-500/20 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-black/[0.04] text-charcoal-muted">
                        {item.tag}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-charcoal tracking-tight">{item.title}</h4>
                      <p className="text-xs text-charcoal-muted mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 10: ERGONOMICS — BUILT FOR YOUR HAND (WITH SEAMLESS DETECTIVE ART)
      ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-transparent border-b border-black/[0.06] overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Seamless Blended Art: Detective in Black Hat (9:16) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/art/art_detective.png"
                alt="The Digital Detective — Uncovering Surveillance Traps"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center"
              />
              {/* Seamless Edge Blending into Rose Carmine Canvas */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_30px_rgba(158,18,45,0.7)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9E122D] via-transparent to-[#9E122D]/40 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#9E122D]/50 via-transparent to-[#9E122D]/50 pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 z-10 text-left">
                <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20">
                  Surveillance Sleuth
                </span>
                <div className="text-sm font-semibold text-white mt-1 drop-shadow">Inspector Matrix</div>
                <div className="text-[11px] text-white/80 drop-shadow">Detecting hidden tracking pixels & fingerprinting attempts.</div>
              </div>
            </div>
          </div>

          {/* Right Content: Hand Ergonomics */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-300 font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20">
                Single-Handed Ergonomics
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-serif-display leading-tight">
                Built for your hand. <br />
                <span className="text-white/70 font-light">Not a desktop shrunk down.</span>
              </h2>
              <p className="text-sm sm:text-base text-rose-100/90 leading-relaxed">
                Modern smartphones are tall. Reaching the top of the display to tap an address bar causes thumb strain. In Nirvana, place the address bar at the bottom with a single toggle, keeping tabs and bookmarks within natural reach.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-6 rounded-2xl uiverse-blob-card relative">
                <div className="card-bg-inner"></div>
                <div className="blob blob-orange"></div>
                <div className="card-content space-y-2">
                  <Smartphone className="w-5 h-5 text-brand mb-1" />
                  <div className="text-sm font-semibold text-white">Bottom Toolbar Layout</div>
                  <div className="text-xs text-rose-100/80 leading-relaxed">
                    Natural thumb reach for navigation, tab switcher, and quick search without hand gymnastics.
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl sazzad-card relative">
                <div className="sazzad-bg"></div>
                <div className="sazzad-aurora aurora-lavender"></div>
                <div className="sazzad-content space-y-2">
                  <Layers className="w-5 h-5 text-[#7C3AED] mb-1" />
                  <div className="text-sm font-semibold text-white">Simple vs Expanded</div>
                  <div className="text-xs text-rose-100/80 leading-relaxed">
                    Choose between a compact floating bar or full-width action dock tailored for single-handed usage.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/features/customization"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white hover:text-rose-200 underline"
              >
                <span>Learn more about layout controls</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
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
          SCREEN 16: OPEN SOURCE STORY — BUILT ON OPEN SOURCE (WITH STIPPLE MAN ART)
      ========================================================================= */}
      <section className="py-24 px-6 sm:px-12 bg-transparent border-b border-black/[0.06] overflow-hidden">
        <div className="max-w-6xl mx-auto rounded-3xl sazzad-card p-8 sm:p-12 text-left relative">
          <div className="sazzad-bg"></div>
          <div className="sazzad-aurora aurora-coral"></div>
          <div className="sazzad-content">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Text & Open Source Lineage */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-rose-300 font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20">
                      Standing on Giants
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white font-serif-display mt-2">
                      Built on Open Source
                    </h3>
                  </div>
                  <Link
                    href="/mozilla-attribution"
                    className="px-4 py-2 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider text-white hover:bg-white/10 transition-colors inline-flex items-center gap-1.5 shrink-0"
                  >
                    Mozilla Attribution <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-rose-100/90 leading-relaxed">
                  <p>
                    Nirvana Browser is based on the <strong>Firefox open-source codebase</strong>. We are deeply grateful to Mozilla and the thousands of Firefox contributors worldwide whose open-source work makes further independent browser development possible.
                  </p>
                  <p>
                    Our team takes the upstream GeckoView engine, modifies the browser UI/UX for single-handed mobile ergonomics, minimizes telemetry where technically possible, and introduces unique calm privacy defaults.
                  </p>
                </div>

                {/* Upstream vs Nirvana Separation Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-black/20 border border-white/10 space-y-2">
                    <div className="text-xs font-semibold text-white">Upstream Foundation</div>
                    <div className="text-xs text-rose-200/80 leading-relaxed">
                      Mozilla Firefox codebase, GeckoView rendering engine, SpiderMonkey JavaScript runtime under MPL 2.0.
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/10 border border-white/20 space-y-2">
                    <div className="text-xs font-semibold text-white">Nirvana Independent Craft</div>
                    <div className="text-xs text-rose-200/80 leading-relaxed">
                      UI & ergonomics redesign, telemetry minimization, custom app icon system, and independent distribution.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Seamless Blended Art - The Independent Engineer / Thinker (9:16) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/art/art_stipple_man.jpg"
                    alt="The Independent Engineer — Focused Human Intellect"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-center"
                  />
                  {/* Seamless Edge Blending into Rose Carmine Canvas */}
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_30px_rgba(158,18,45,0.75)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#9E122D] via-transparent to-[#9E122D]/40 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9E122D]/50 via-transparent to-[#9E122D]/50 pointer-events-none" />

                  <div className="absolute bottom-5 left-5 right-5 z-10 text-left">
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20">
                      Independent Craft
                    </span>
                    <div className="text-sm font-semibold text-white mt-1 drop-shadow">Human Ingenuity</div>
                    <div className="text-[11px] text-white/80 drop-shadow">Software engineered for humans, not advertising bots.</div>
                  </div>
                </div>
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
            <span className="text-xs font-mono uppercase tracking-wider text-rose-300 font-semibold">
              Radical Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mt-1">
              No browser is best at everything.
            </h2>
            <p className="text-sm sm:text-base text-rose-100/90 max-w-xl mx-auto mt-2">
              We don&apos;t believe in fake marketing scores. Here is an honest preview of how Nirvana compares with Chrome, Brave, and Firefox.
            </p>
          </div>

          {/* Comparison Matrix Table */}
          <div className="rounded-2xl border border-white/20 overflow-hidden text-left shadow-2xl bg-[#52030f]/80 backdrop-blur-md">
            <div className="overflow-x-auto">
              <table className="w-full text-xs font-mono">
                <thead>
                  <tr className="bg-white/10 text-white border-b border-white/15">
                    <th className="p-3.5 sm:p-4 font-semibold text-white">Dimension</th>
                    <th className="p-3.5 sm:p-4 font-bold text-white bg-white/10">Nirvana (Android)</th>
                    <th className="p-3.5 sm:p-4 font-semibold text-white/80">Google Chrome</th>
                    <th className="p-3.5 sm:p-4 font-semibold text-white/80">Brave Browser</th>
                    <th className="p-3.5 sm:p-4 font-semibold text-white/80">Mozilla Firefox</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="hover:bg-white/[0.04] transition-colors">
                    <td className="p-3.5 sm:p-4 font-sans font-medium text-white">Browser Engine</td>
                    <td className="p-3.5 sm:p-4 font-bold text-emerald-400 bg-white/5">GeckoView 153</td>
                    <td className="p-3.5 sm:p-4 text-white/70">Blink / Chromium</td>
                    <td className="p-3.5 sm:p-4 text-white/70">Blink / Chromium</td>
                    <td className="p-3.5 sm:p-4 text-white/70">GeckoView 153</td>
                  </tr>
                  <tr className="hover:bg-white/[0.04] transition-colors">
                    <td className="p-3.5 sm:p-4 font-sans font-medium text-white">Mobile Extensions</td>
                    <td className="p-3.5 sm:p-4 text-emerald-400 font-bold bg-white/5">✓ Full uBlock & Addons</td>
                    <td className="p-3.5 sm:p-4 text-rose-300">✕ Disabled on Android</td>
                    <td className="p-3.5 sm:p-4 text-amber-300">~ Built-in Shields Only</td>
                    <td className="p-3.5 sm:p-4 text-emerald-400">✓ Supported Addons</td>
                  </tr>
                  <tr className="hover:bg-white/[0.04] transition-colors">
                    <td className="p-3.5 sm:p-4 font-sans font-medium text-white">Telemetry Model</td>
                    <td className="p-3.5 sm:p-4 text-emerald-400 font-bold bg-white/5">Minimized / Stripped</td>
                    <td className="p-3.5 sm:p-4 text-rose-300">Extensive Google Ad Sync</td>
                    <td className="p-3.5 sm:p-4 text-emerald-400">Privacy Preserving</td>
                    <td className="p-3.5 sm:p-4 text-white/70">Standard Opt-Out</td>
                  </tr>
                  <tr className="hover:bg-white/[0.04] transition-colors">
                    <td className="p-3.5 sm:p-4 font-sans font-medium text-white">Desktop Version</td>
                    <td className="p-3.5 sm:p-4 text-amber-300 bg-white/5">~ Mobile Focused (Planned)</td>
                    <td className="p-3.5 sm:p-4 text-emerald-400">✓ All Platforms</td>
                    <td className="p-3.5 sm:p-4 text-emerald-400">✓ All Platforms</td>
                    <td className="p-3.5 sm:p-4 text-emerald-400">✓ All Platforms</td>
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

          {/* Join the Team Callout (Variety 1: Bouncing Cyan Blob) */}
          <div className="p-6 sm:p-8 rounded-3xl uiverse-blob-card relative text-center sm:text-left">
            <div className="card-bg-inner"></div>
            <div className="blob blob-cyan"></div>
            <div className="card-content flex flex-col sm:flex-row items-center justify-between gap-6">
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
                Official Channels · Instagram · GitHub · Telegram · Google Play
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCREEN 21 & 22: FINAL DOWNLOAD CTA (WITH SEAMLESS POLAR BEAR IN RED WAVES ART)
      ========================================================================= */}
      <section className="relative py-32 sm:py-40 px-6 sm:px-12 bg-transparent text-center flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute w-[800px] h-[450px] atmospheric-bloom opacity-35 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto space-y-12">
          {/* Seamless Blended Polar Bear in Red Waves Artwork (9:16) */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/art/art_polar_bear.jpg"
                alt="The White Polar Bear navigating Crimson Waves — Resilient Privacy"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center"
              />
              {/* Seamless Edge Blending into Rose Carmine Canvas */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_70px_35px_rgba(158,18,45,0.8)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9E122D] via-transparent to-[#9E122D]/40 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#9E122D]/50 via-transparent to-[#9E122D]/50 pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 z-10 text-left">
                <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20">
                  Resilient Sanctuary
                </span>
                <div className="text-sm font-semibold text-white mt-1 drop-shadow">Pure Independence</div>
                <div className="text-[11px] text-white/80 drop-shadow">Navigating the turbulent ad-tech ocean with total calm.</div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 mx-auto relative mb-3 bg-white p-2 rounded-2xl border border-white/20 shadow-lg flex items-center justify-center">
              <Image
                src="/assets/logo.png"
                alt="Nirvana Emblem"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white font-serif-display uppercase leading-tight">
              Ready for a <br />
              quieter web?
            </h2>

            <p className="text-base sm:text-lg text-rose-100/90 font-normal max-w-lg mx-auto leading-relaxed">
              Experience mobile browsing stripped of noise, advertisements, and surveillance telemetry.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=org.nirvana"
                target="_blank"
                rel="noreferrer"
                className="apple-btn-primary px-8 py-4 rounded-full text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2.5 shadow-md"
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

            <div className="pt-8 text-xs font-mono text-rose-200/80">
              Free forever · Open Source · Android 8.0 through Android 16
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

