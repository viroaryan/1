import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Instagram,
  Send,
  Youtube,
  Coffee,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0E0E16] text-white pt-24 pb-16 overflow-hidden border-t border-white/10">
      {/* Soft atmospheric ambient light in footer background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-[500px] h-[300px] bg-rose-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/15">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative bg-white rounded-full p-1 border border-white/20">
                <Image
                  src="/assets/logo.png"
                  alt="Nirvana Emblem"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-[0.16em] uppercase text-white">
                NIRVANA
              </span>
            </div>

            <p className="text-3xl sm:text-4xl font-serif-display text-white tracking-tight max-w-md leading-tight">
              A quieter way to experience the world wide web.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-white/10 border border-white/15 text-white/80">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Build 1.0.2 Live on Play Store
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-white/10 border border-white/15 text-white/80">
                GeckoView 153.0.4
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
            {/* Column 1: Product */}
            <div className="space-y-3">
              <div className="micro-label text-white font-semibold">Product</div>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/browser" className="text-white/70 hover:text-white transition-colors">
                    Nirvana Browser
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-white/70 hover:text-white transition-colors">
                    All Features
                  </Link>
                </li>
                <li>
                  <Link href="/features/privacy" className="text-white/70 hover:text-white transition-colors">
                    Privacy Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/features/protection" className="text-white/70 hover:text-white transition-colors">
                    Tracking Protection
                  </Link>
                </li>
                <li>
                  <Link href="/features/extensions" className="text-white/70 hover:text-white transition-colors">
                    Extensions & uBlock
                  </Link>
                </li>
                <li>
                  <Link href="/features/passwords" className="text-white/70 hover:text-white transition-colors">
                    Password Vault
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="text-white font-medium hover:underline transition-all inline-flex items-center gap-1">
                    Download Android →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Resources & Comparison */}
            <div className="space-y-3">
              <div className="micro-label text-white font-semibold">Resources</div>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/compare" className="text-white/70 hover:text-white transition-colors">
                    Browser Comparison Matrix
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-white/70 hover:text-white transition-colors">
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-white/70 hover:text-white transition-colors">
                    Help & Guides
                  </Link>
                </li>
                <li>
                  <Link href="/changelog" className="text-white/70 hover:text-white transition-colors">
                    Release Changelog
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="text-white/70 hover:text-white transition-colors">
                    Product Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="/open-source" className="text-white/70 hover:text-white transition-colors">
                    Open Source Codebase
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Ecosystem */}
            <div className="space-y-3">
              <div className="micro-label text-white font-semibold">Ecosystem</div>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/products/focus" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                    Nirvana Focus
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/15 text-white border border-white/20">Testing</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products/openstore" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                    Nirvana OpenStore
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/15 text-white border border-white/20">Dev</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products/nivro" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                    Nirvana Nivro
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/15 text-white border border-white/20">Dev</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products/perl" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                    Nirvana Perl
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/15 text-white border border-white/20">Concept</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-white/70 hover:text-white transition-colors">
                    View All Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div className="space-y-3 pt-4 sm:pt-0">
              <div className="micro-label text-white font-semibold">Company</div>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                    About Nirvana
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-white/70 hover:text-white transition-colors">
                    The Independent Team
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                    Join the Team
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/15 text-white border border-white/20">We&apos;re Hiring</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contribute" className="text-white/70 hover:text-white transition-colors">
                    Contribute Code & UX
                  </Link>
                </li>
                <li>
                  <Link href="/suggestions" className="text-white/70 hover:text-white transition-colors">
                    Submit Suggestions
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                    Contact Channels
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Community & Support */}
            <div className="space-y-3 pt-4 sm:pt-0">
              <div className="micro-label text-white font-semibold">Community</div>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="https://github.com/viroaryan"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/nirvanabrowser"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Telegram
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/viro.coder.aryan"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    Instagram
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </li>
                <li>
                  <Link
                    href="/coffee"
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Coffee className="w-3.5 h-3.5 text-white" />
                    Buy Team a Coffee
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 6: Legal & Attribution */}
            <div className="space-y-3 pt-4 sm:pt-0">
              <div className="micro-label text-white font-semibold">Legal & Upstream</div>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/mozilla-attribution" className="text-white/70 hover:text-white transition-colors font-medium">
                    Mozilla & Firefox Attribution
                  </Link>
                </li>
                <li>
                  <Link href="/licenses" className="text-white/70 hover:text-white transition-colors">
                    Open Source Licenses
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Massive Signature Wordmark */}
        <div className="py-16 text-center select-none overflow-hidden">
          <span className="font-serif-display text-[15vw] leading-none tracking-tighter text-white/[0.08] block font-bold">
            NIRVANA
          </span>
          <div className="text-xs font-mono tracking-[0.3em] uppercase text-white/60 -mt-4 sm:-mt-8">
            Private · Fast · Beautiful
          </div>
        </div>

        {/* Bottom Legal Notice Bar */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[11px] text-white/70 leading-relaxed font-mono">
          <div className="max-w-2xl space-y-1">
            <div>
              © 2026 Nirvana Browser. Built independently by Abhiraj Aryan & team.
            </div>
            <div className="text-[10px] text-white/50">
              Built from Firefox’s open-source codebase, then independently modified and developed by the Nirvana team. Upstream source code is subject to the Mozilla Public License 2.0 and additional open-source licenses. Firefox and Mozilla trademarks remain subject to their respective trademark terms. Nirvana is not affiliated with or endorsed by the Mozilla Corporation.
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-sans">
            <Link href="/mozilla-attribution" className="text-white/80 hover:text-white hover:underline">
              Attribution
            </Link>
            <span className="text-white/30">·</span>
            <Link href="/licenses" className="text-white/80 hover:text-white hover:underline">
              MPL 2.0
            </Link>
            <span className="text-white/30">·</span>
            <Link href="/privacy" className="text-white/80 hover:text-white hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
