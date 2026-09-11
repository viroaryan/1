import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Puzzle,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Flame,
  Zap,
} from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";

export const metadata = {
  title: "Extensions & uBlock Origin — Nirvana Browser",
  description:
    "Desktop-class extensions on mobile Android. Nirvana supports verified Gecko WebExtensions including uBlock Origin, Dark Reader, Privacy Badger, and Ghostery.",
};

export default function ExtensionsFeaturePage() {
  const verifiedExtensions = [
    {
      name: "uBlock Origin",
      author: "Raymond Hill",
      status: "Enabled by Default",
      statusColor: "bg-emerald-100 text-emerald-800",
      description:
        "Finally, an efficient blocker. Easy on CPU and memory. Neutralizes hundreds of ad networks and tracking scripts before they execute.",
      reviews: "5,841 Reviews (5/5)",
    },
    {
      name: "Dark Reader",
      author: "Alexander Shutau",
      status: "One-Tap Install",
      statusColor: "bg-black/[0.05] text-charcoal-muted",
      description:
        "Dark mode for every website. Inverts brightness safely with high-contrast filters to protect your eyes during nighttime reading.",
      reviews: "2,242 Reviews (5/5)",
    },
    {
      name: "Privacy Badger",
      author: "EFF (Electronic Frontier Foundation)",
      status: "One-Tap Install",
      statusColor: "bg-black/[0.05] text-charcoal-muted",
      description:
        "Automatically learns to block hidden trackers. Built by the premier digital civil liberties organization to stop silent algorithmic profiling.",
      reviews: "618 Reviews (5/5)",
    },
    {
      name: "Ghostery",
      author: "Ghostery GmbH",
      status: "One-Tap Install",
      statusColor: "bg-black/[0.05] text-charcoal-muted",
      description:
        "The trusted privacy tool and ad blocker. Stops trackers, accelerates page load speed, and reveals who is watching you browse.",
      reviews: "1,991 Reviews (5/5)",
    },
    {
      name: "AdGuard AdBlocker",
      author: "AdGuard Software",
      status: "One-Tap Install",
      statusColor: "bg-black/[0.05] text-charcoal-muted",
      description:
        "Unmatched adblock protection against advertising, pop-ups, and annoying layout banners across YouTube and social networks.",
      reviews: "2,145 Reviews (5/5)",
    },
  ];

  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-[#F7F7F3] min-h-screen">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Puzzle className="w-3.5 h-3.5" />
            <span>Mobile WebExtensions</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Make the browser yours.
          </h1>

          <p className="text-lg sm:text-xl text-charcoal-soft font-light leading-relaxed max-w-3xl">
            Major commercial browsers intentionally disable extension support on their mobile Android builds to protect their advertising monetization pipelines. Nirvana believes your phone deserves the same freedom as your desktop.
          </p>
        </div>

        {/* Real Screenshot + Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup
              src="/assets/screenshots/extensions.jpeg"
              alt="Nirvana Extensions Screen"
              caption="Live extensions menu in Nirvana with uBlock Origin enabled"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-serif-display text-charcoal">
              Full Gecko WebExtension Architecture
            </h2>
            <p className="text-sm text-charcoal-soft leading-relaxed">
              Powered by GeckoView, Nirvana exposes the complete WebExtension API. Extensions execute in dedicated sandboxed processes, meaning a rogue script or heavy extension cannot compromise browser stability or access your private vault without explicit permission.
            </p>

            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] space-y-3">
              <div className="text-xs font-semibold text-charcoal flex items-center gap-2">
                <Flame className="w-4 h-4 text-brand" />
                Why uBlock Origin Matters
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                uBlock Origin is not just an ad blocker; it is an open-source, memory-efficient wide-spectrum content blocker. By filtering out gigabytes of tracking scripts and telemetry payloads, pages render up to 3x faster on mobile networks and consume less device battery.
              </p>
            </div>
          </div>
        </div>

        {/* Verified Extensions List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif-display text-charcoal">
            Verified Extensions Available in Nirvana
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {verifiedExtensions.map((ext, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-charcoal">
                    {ext.name}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${ext.statusColor}`}
                  >
                    {ext.status}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-charcoal-muted">
                  By {ext.author} · {ext.reviews}
                </div>
                <p className="text-xs text-charcoal-soft leading-relaxed">
                  {ext.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
