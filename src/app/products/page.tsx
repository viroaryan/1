import React from "react";
import Link from "next/link";
import {
  Globe2,
  Sparkles,
  Store,
  Shield,
  MessageCircle,
  ArrowRight,
  Clock,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Nirvana Ecosystem — Products, Tools & Open Source Laboratory",
  description:
    "Explore the broader Nirvana product suite: Nirvana Browser, Nirvana Focus, Nirvana OpenStore, Nirvana Nivro, and Nirvana Perl.",
};

export default function ProductsPage() {
  const products = [
    {
      name: "Nirvana Browser",
      status: "AVAILABLE NOW",
      statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      headline: "The Flagship Mobile Web Sanctuary",
      desc: "Our primary product. Built on GeckoView 153.0.4 with bottom toolbar ergonomics, built-in uBlock Origin, and minimized telemetry.",
      href: "/browser",
      primaryAction: "Install v1.0.2",
      badge: "Flagship",
    },
    {
      name: "Nirvana Focus",
      status: "CLOSE TESTING",
      statusColor: "bg-amber-100 text-amber-800 border-amber-300",
      headline: "Single-Task Disposable Browsing",
      desc: "An ultra-minimalist single-tab browser designed for opening links from messaging apps without accumulating background history or tabs.",
      href: "/products/focus",
      primaryAction: "Learn About Focus",
      badge: "Beta Testing",
    },
    {
      name: "Nirvana OpenStore",
      status: "IN DEVELOPMENT",
      statusColor: "bg-blue-100 text-blue-800 border-blue-300",
      headline: "Curated Open-Source App Discovery",
      desc: "A lightweight (~30MB client) discovery portal cataloging audited F-Droid, GitHub, and independent open-source Android tools.",
      href: "/products/openstore",
      primaryAction: "Explore OpenStore Spec",
      badge: "Engineering",
    },
    {
      name: "Nirvana Nivro",
      status: "IN DEVELOPMENT",
      statusColor: "bg-purple-100 text-purple-800 border-purple-300",
      headline: "Advanced Privacy Browser Concept",
      desc: "Exploration into integrated Brave Search & DuckDuckGo query routing, decentralized DNS mesh, and experimental privacy shields.",
      href: "/products/nivro",
      primaryAction: "Review Nivro Concept",
      badge: "Research",
    },
    {
      name: "Nirvana Perl",
      status: "IN DEVELOPMENT",
      statusColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
      headline: "Peer-to-Peer Real-Time Communication",
      desc: "Lightweight, decentralized voice, video, and text messaging powered by WebRTC and WebSocket protocols without central account servers.",
      href: "/products/perl",
      primaryAction: "Read Architecture",
      badge: "Prototypes",
    },
  ];

  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-6xl mx-auto space-y-16 text-left">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Layers className="w-3.5 h-3.5" />
            <span>The Broader Organization</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            The Nirvana Ecosystem
          </h1>

          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            While Nirvana Browser is our primary released product, our laboratory is actively developing a cohesive family of open-source privacy tools and discovery applications.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4 flex flex-col justify-between hover:shadow-float transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-black/[0.04] text-charcoal-muted">
                    {p.badge}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${p.statusColor}`}
                  >
                    {p.status}
                  </span>
                </div>

                <h3 className="text-2xl font-serif-display text-charcoal">
                  {p.name}
                </h3>
                <div className="text-xs font-semibold text-brand">
                  {p.headline}
                </div>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.04]">
                <Link
                  href={p.href}
                  className="text-xs font-mono text-charcoal group-hover:text-brand hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>{p.primaryAction}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

