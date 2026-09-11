import React from "react";
import Link from "next/link";
import {
  Shield,
  Zap,
  Sliders,
  Sparkles,
  Search,
  Lock,
  Puzzle,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Layers,
  Globe2,
  Trash2,
  Network,
  Cpu,
  Fingerprint,
} from "lucide-react";

export const metadata = {
  title: "All Features — Nirvana Browser Capabilities Catalog",
  description:
    "Explore the complete editorial catalog of Nirvana Browser features: Total Cookie Protection, uBlock Origin, Password Vault, Reading Mode, DNS over HTTPS, and custom Android ergonomics.",
};

export default function FeaturesPage() {
  const categories = [
    {
      categoryNumber: "01",
      name: "Privacy & Anti-Tracking",
      description: "Airtight cryptographic containment of trackers, third-party cookies, and telemetry.",
      icon: Shield,
      features: [
        {
          title: "Total Cookie Protection",
          desc: "Creates a separate cookie jar for every website you visit, preventing cross-site behavioral profiling.",
          tech: "GeckoView Partitioned State",
          status: "Active",
          href: "/features/protection",
        },
        {
          title: "Delete Browsing Data on Quit",
          desc: "Automated purge of open tabs, cookies, cached media, and site permissions upon closing the browser session.",
          tech: "Configurable Ephemeral Storage",
          status: "Active",
          href: "/features/privacy-on-quit",
        },
        {
          title: "Stripped Telemetry",
          desc: "Unnecessary diagnostic beacons and ad identifier trackers are deactivated at the engine level.",
          tech: "Independent Gecko Build Patching",
          status: "Active",
          href: "/features/privacy",
        },
      ],
    },
    {
      categoryNumber: "02",
      name: "Extensions & Web Modularity",
      description: "Full desktop-class Gecko WebExtensions supported on mobile Android devices.",
      icon: Puzzle,
      features: [
        {
          title: "uBlock Origin Integration",
          desc: "The world's most trusted, CPU-efficient ad and content blocker enabled out-of-the-box.",
          tech: "WebExtension API",
          status: "Verified",
          href: "/features/extensions",
        },
        {
          title: "Dark Reader & Privacy Badger",
          desc: "Invert web page colors safely for nighttime reading, and block hidden algorithmic tracking beacons.",
          tech: "AMO Android Repository",
          status: "Verified",
          href: "/features/extensions",
        },
      ],
    },
    {
      categoryNumber: "03",
      name: "Ergonomics & Customization",
      description: "Tailored for one-handed mobile browsing and personalized aesthetic delight.",
      icon: Sliders,
      features: [
        {
          title: "Bottom Address Bar",
          desc: "Position the URL bar and search controls at the bottom of your phone for effortless thumb reach.",
          tech: "Dynamic Viewport Anchor",
          status: "Active",
          href: "/features/customization",
        },
        {
          title: "Aurora Borealis & Icon Variants",
          desc: "Custom launcher icons and light/dark theme synchronization matching your device aesthetics.",
          tech: "Android Dynamic Intent Filter",
          status: "Active",
          href: "/features/customization",
        },
        {
          title: "Simple vs Expanded Toolbar",
          desc: "Toggle between an uncluttered floating address bar and a feature-rich bottom navigation dock.",
          tech: "Responsive Layout Shell",
          status: "Active",
          href: "/features/customization",
        },
      ],
    },
    {
      categoryNumber: "04",
      name: "Security & Encryption",
      description: "Robust local protection for passwords, cryptographic network queries, and sandboxed sessions.",
      icon: Lock,
      features: [
        {
          title: "Local Password Vault",
          desc: "Securely stores website credentials locally on your device with biometric fingerprint or face unlock.",
          tech: "Android Keystore + SQLite Encryption",
          status: "Active",
          href: "/features/passwords",
        },
        {
          title: "DNS over HTTPS (DoH)",
          desc: "Encrypts your domain name requests so your local Wi-Fi provider or ISP cannot eavesdrop on your visits.",
          tech: "RFC 8484 DoH Resolvers",
          status: "Active",
          href: "/features/dns",
        },
        {
          title: "Private Browsing Isolation",
          desc: "Completely separate private tabs with custom mask icon and zero persistence to storage.",
          tech: "RAM-Only Session Containers",
          status: "Active",
          href: "/features/privacy",
        },
      ],
    },
    {
      categoryNumber: "05",
      name: "Reading & Discovery",
      description: "Serene, distraction-free consumption of long-form essays, news, and research.",
      icon: BookOpen,
      features: [
        {
          title: "Noise-Free Reader View",
          desc: "Strips ads, paywall overlays, and messy web layouts into a clean editorial serif reading canvas.",
          tech: "Readability Parsing Engine",
          status: "Active",
          href: "/features/reading",
        },
        {
          title: "On-Device Page Summary",
          desc: "Extract key points and summary bullets from lengthy articles with zero cloud data transmission.",
          tech: "Local Client Summarizer",
          status: "Active",
          href: "/features/ai",
        },
        {
          title: "Multi-Search Switcher",
          desc: "Choose between Google, DuckDuckGo, Bing, or direct Wikipedia search right from the address bar.",
          tech: "OpenSearch Provider Protocols",
          status: "Active",
          href: "/features/search",
        },
      ],
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="apple-badge">
            <Layers className="w-3.5 h-3.5 text-zinc-600" />
            <span>Capabilities Catalog</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
            Every feature. Built with restraint.
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            We don&apos;t chase novelty features or bloatware. Each tool in Nirvana is engineered to protect your attention, secure your identity, or simplify mobile browsing.
          </p>
        </div>

        {/* Feature Categories Section */}
        <div className="space-y-16">
          {categories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <div key={idx} className="space-y-6 text-left">
                {/* Category Header */}
                <div className="border-b border-zinc-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                        Category {cat.categoryNumber}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900">
                      {cat.name}
                    </h2>
                    <p className="text-sm text-zinc-500 mt-1 font-normal">
                      {cat.description}
                    </p>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 shrink-0">
                    <CatIcon className="w-4 h-4" />
                  </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.features.map((f, fIdx) => (
                    <Link
                      key={fIdx}
                      href={f.href}
                      className="apple-card-light p-7 flex flex-col justify-between space-y-5 group text-left transition-colors hover:border-zinc-300"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                            {f.status}
                          </span>
                          <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                        </div>

                        <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-900 transition-colors">
                          {f.title}
                        </h3>

                        <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                          {f.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-zinc-100 text-xs text-zinc-500 flex items-center justify-between">
                        <span className="font-mono text-[11px] text-zinc-500">
                          {f.tech}
                        </span>
                        <span className="text-xs font-medium text-zinc-900 group-hover:underline">
                          View details
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="apple-card-light p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-dashed">
          <div className="space-y-1 text-left">
            <h3 className="text-xl font-semibold text-zinc-900">
              Ready to experience modern private browsing?
            </h3>
            <p className="text-sm text-zinc-500 font-normal">
              Available as a free, open-source download for Android 8.0 through Android 16.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/download"
              className="apple-btn-primary text-xs"
            >
              Get Nirvana
            </Link>
            <Link
              href="/security"
              className="apple-btn-ghost text-xs"
            >
              Security Whitepaper
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
