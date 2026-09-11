"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Shield,
  ShieldCheck,
  Zap,
  Sliders,
  Sparkles,
  Download,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Github,
  KeyRound,
  Puzzle,
  Globe2,
  Lock,
  Layers,
  Flame,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2.5 px-4 sm:px-8" : "py-4 px-4 sm:px-10"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between apple-pill-nav px-4 sm:px-6 py-2 rounded-full transition-all duration-300`}
        >
          {/* Brand Logo & Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none rounded-xl"
          >
            <div className="relative w-8 h-8 flex items-center justify-center bg-white rounded-full border border-black/[0.08] shadow-xs p-1">
              <Image
                src="/assets/logo.png"
                alt="Nirvana Logo"
                width={24}
                height={24}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold tracking-tight text-sm text-charcoal">
                Nirvana
              </span>
              <span className="text-[10px] font-mono tracking-tight bg-black/[0.05] text-charcoal-muted px-2 py-0.5 rounded-full">
                1.0.2
              </span>
            </div>
          </Link>

          {/* Desktop Minimalist Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("features")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-normal flex items-center gap-1.5 transition-colors ${
                  pathname.startsWith("/features") || pathname === "/browser"
                    ? "text-charcoal bg-black/[0.06]"
                    : "text-charcoal-soft hover:text-charcoal hover:bg-black/[0.04]"
                }`}
              >
                <span>Features</span>
                <ChevronDown className="w-3 h-3 text-charcoal-faded transition-transform duration-200" />
              </button>

              {activeDropdown === "features" && (
                <div className="absolute top-full -left-12 pt-2.5 w-[580px] z-[100] animate-fadeIn">
                  <div className="apple-dropdown-panel rounded-2xl p-4 grid grid-cols-2 gap-2 text-left">
                    <Link
                      href="/browser"
                      className="p-3 rounded-xl hover:bg-black/[0.03] transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#F26522] border border-orange-100 flex items-center justify-center shrink-0">
                        <Globe2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-charcoal">Nirvana Browser</div>
                        <div className="text-[11px] text-charcoal-muted leading-tight mt-0.5">
                          GeckoView 153.0.4 engine & quiet mobile UX
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/features"
                      className="p-3 rounded-xl hover:bg-black/[0.03] transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284C7] border border-sky-100 flex items-center justify-center shrink-0">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-charcoal">All Features</div>
                        <div className="text-[11px] text-charcoal-muted leading-tight mt-0.5">
                          Full editorial catalog of capabilities
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/features/protection"
                      className="p-3 rounded-xl hover:bg-black/[0.03] transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#059669] border border-emerald-100 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-charcoal">Tracking Protection</div>
                        <div className="text-[11px] text-charcoal-muted leading-tight mt-0.5">
                          Total Cookie Protection & proactive isolation
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/features/extensions"
                      className="p-3 rounded-xl hover:bg-black/[0.03] transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#7C3AED] border border-purple-100 flex items-center justify-center shrink-0">
                        <Puzzle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-charcoal">Extensions</div>
                        <div className="text-[11px] text-charcoal-muted leading-tight mt-0.5">
                          uBlock Origin, Dark Reader & add-ons
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/features/passwords"
                      className="p-3 rounded-xl hover:bg-black/[0.03] transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#D97706] border border-amber-100 flex items-center justify-center shrink-0">
                        <KeyRound className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-charcoal">Password Vault</div>
                        <div className="text-[11px] text-charcoal-muted leading-tight mt-0.5">
                          Local encrypted storage with biometrics
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/features/customization"
                      className="p-3 rounded-xl hover:bg-black/[0.03] transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 flex items-center justify-center shrink-0">
                        <Sliders className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-charcoal">Ergonomics</div>
                        <div className="text-[11px] text-charcoal-muted leading-tight mt-0.5">
                          Bottom address bar & custom icon themes
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Compare */}
            <Link
              href="/compare"
              className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-normal transition-colors ${
                pathname.startsWith("/compare")
                  ? "text-charcoal bg-black/[0.06]"
                  : "text-charcoal-soft hover:text-charcoal hover:bg-black/[0.04]"
              }`}
            >
              Compare
            </Link>

            {/* Roadmap */}
            <Link
              href="/roadmap"
              className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-normal transition-colors ${
                pathname === "/roadmap"
                  ? "text-charcoal bg-black/[0.06]"
                  : "text-charcoal-soft hover:text-charcoal hover:bg-black/[0.04]"
              }`}
            >
              Roadmap
            </Link>

            {/* Ecosystem Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("ecosystem")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-normal flex items-center gap-1.5 transition-colors ${
                  pathname.startsWith("/products")
                    ? "text-charcoal bg-black/[0.06]"
                    : "text-charcoal-soft hover:text-charcoal hover:bg-black/[0.04]"
                }`}
              >
                <span>Ecosystem</span>
                <ChevronDown className="w-3 h-3 text-charcoal-faded transition-transform duration-200" />
              </button>

              {activeDropdown === "ecosystem" && (
                <div className="absolute top-full left-0 pt-2.5 w-72 z-[100] animate-fadeIn">
                  <div className="apple-dropdown-panel rounded-2xl p-3 flex flex-col gap-1 text-left">
                    <Link
                      href="/products"
                      className="p-2.5 rounded-xl hover:bg-black/[0.03] transition-colors flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-semibold text-charcoal">All Products</div>
                        <div className="text-[10px] text-charcoal-muted">Privacy utility suite overview</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-charcoal-faded" />
                    </Link>

                    <Link
                      href="/products/focus"
                      className="p-2.5 rounded-xl hover:bg-black/[0.03] transition-colors flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-semibold text-charcoal">Nirvana Focus</div>
                        <div className="text-[10px] text-charcoal-muted">Single-tab disposable search</div>
                      </div>
                      <span className="text-[9px] font-mono font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        Testing
                      </span>
                    </Link>

                    <Link
                      href="/products/openstore"
                      className="p-2.5 rounded-xl hover:bg-black/[0.03] transition-colors flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-semibold text-charcoal">Nirvana OpenStore</div>
                        <div className="text-[10px] text-charcoal-muted">~30MB curated F-Droid hub</div>
                      </div>
                      <span className="text-[9px] font-mono font-medium px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                        In Dev
                      </span>
                    </Link>

                    <Link
                      href="/products/nivro"
                      className="p-2.5 rounded-xl hover:bg-black/[0.03] transition-colors flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-semibold text-charcoal">Nivro & Perl</div>
                        <div className="text-[10px] text-charcoal-muted">WebRTC peer communication</div>
                      </div>
                      <span className="text-[9px] font-mono font-medium px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                        Concept
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Open Source */}
            <Link
              href="/open-source"
              className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-normal transition-colors ${
                pathname === "/open-source" || pathname === "/mozilla-attribution"
                  ? "text-charcoal bg-black/[0.06]"
                  : "text-charcoal-soft hover:text-charcoal hover:bg-black/[0.04]"
              }`}
            >
              Open Source
            </Link>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("company")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-normal flex items-center gap-1.5 transition-colors ${
                  pathname.startsWith("/team") || pathname === "/about" || pathname === "/contact"
                    ? "text-charcoal bg-black/[0.06]"
                    : "text-charcoal-soft hover:text-charcoal hover:bg-black/[0.04]"
                }`}
              >
                <span>Company</span>
                <ChevronDown className="w-3 h-3 text-charcoal-faded transition-transform duration-200" />
              </button>

              {activeDropdown === "company" && (
                <div className="absolute top-full right-0 pt-2.5 w-64 z-[100] animate-fadeIn">
                  <div className="apple-dropdown-panel rounded-2xl p-3 flex flex-col gap-1 text-left">
                    <Link
                      href="/about"
                      className="p-2.5 rounded-xl hover:bg-black/[0.03] transition-colors text-xs font-medium text-charcoal"
                    >
                      About Nirvana
                    </Link>
                    <Link
                      href="/team"
                      className="p-2.5 rounded-xl hover:bg-black/[0.03] transition-colors text-xs font-medium text-charcoal"
                    >
                      Team & Creators
                    </Link>
                    <Link
                      href="/join"
                      className="p-2.5 rounded-xl hover:bg-black/[0.03] transition-colors text-xs font-medium text-charcoal flex items-center justify-between"
                    >
                      <span>Careers</span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        We&apos;re Hiring
                      </span>
                    </Link>
                    <Link
                      href="/contact"
                      className="p-2.5 rounded-xl hover:bg-black/[0.03] transition-colors text-xs font-medium text-charcoal"
                    >
                      Contact & Support
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://github.com/viroaryan"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full apple-btn-ghost text-charcoal flex items-center justify-center transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=org.nirvana"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 rounded-full apple-btn-primary text-xs font-medium tracking-tight flex items-center gap-2 shadow-xs transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full apple-btn-ghost text-charcoal focus:outline-none"
            aria-label="Toggle Mobile Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F7F7F3] pt-24 pb-12 px-6 overflow-y-auto flex flex-col justify-between animate-fadeIn">
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-muted">
                Navigation
              </span>
              <div className="space-y-1">
                <Link
                  href="/browser"
                  className="block px-4 py-3 rounded-xl bg-white border border-black/[0.06] text-sm font-medium text-charcoal shadow-xs"
                >
                  Nirvana Browser
                </Link>
                <Link
                  href="/features"
                  className="block px-4 py-3 rounded-xl bg-white border border-black/[0.06] text-sm font-medium text-charcoal shadow-xs"
                >
                  Features Catalog
                </Link>
                <Link
                  href="/compare"
                  className="block px-4 py-3 rounded-xl bg-white border border-black/[0.06] text-sm font-medium text-charcoal shadow-xs"
                >
                  Browser Comparisons
                </Link>
                <Link
                  href="/roadmap"
                  className="block px-4 py-3 rounded-xl bg-white border border-black/[0.06] text-sm font-medium text-charcoal shadow-xs"
                >
                  Product Roadmap
                </Link>
                <Link
                  href="/products"
                  className="block px-4 py-3 rounded-xl bg-white border border-black/[0.06] text-sm font-medium text-charcoal shadow-xs"
                >
                  Ecosystem Utilities
                </Link>
                <Link
                  href="/open-source"
                  className="block px-4 py-3 rounded-xl bg-white border border-black/[0.06] text-sm font-medium text-charcoal shadow-xs"
                >
                  Open Source & Mozilla Attribution
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-3 rounded-xl bg-white border border-black/[0.06] text-sm font-medium text-charcoal shadow-xs"
                >
                  Team & Founders
                </Link>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=org.nirvana"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl apple-btn-primary text-sm font-medium flex items-center justify-center gap-2 shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download for Android</span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-charcoal-muted">
            <span>Nirvana 1.0.2</span>
            <Link href="/download" className="underline">Direct APK</Link>
          </div>
        </div>
      )}
    </>
  );
}
