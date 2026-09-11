import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  Flame,
  CheckCircle2,
  Lock,
  Sliders,
  AlertCircle,
  EyeOff,
} from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";
import ProtectionDemo from "@/components/ui/ProtectionDemo";

export const metadata = {
  title: "Tracking & Ad Protection — Nirvana Browser",
  description:
    "Learn how Nirvana's Total Cookie Protection, multi-tier Enhanced Tracking Protection, and Global Privacy Control protect you against cross-site surveillance.",
};

export default function ProtectionFeaturePage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-[#F7F7F3] min-h-screen">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Flame className="w-3.5 h-3.5" />
            <span>Multi-Tier Shield</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Enhanced Tracking Protection
          </h1>

          <p className="text-lg sm:text-xl text-charcoal-soft font-light leading-relaxed max-w-3xl">
            Now featuring Total Cookie Protection — our most powerful cryptographic barrier yet against cross-site trackers and commercial surveillance networks.
          </p>
        </div>

        {/* Protection Modes Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <div className="text-xs font-mono font-semibold text-charcoal-muted uppercase">
              Mode 01 · Recommended
            </div>
            <h3 className="text-xl font-serif-display text-charcoal">
              Standard Protection
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Default balanced shield. Blocks known social media trackers, cross-site tracking cookies, and cryptominers while ensuring 100% of websites load without broken layout elements.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-brand/30 shadow-sm space-y-3">
            <div className="text-xs font-mono font-semibold text-brand uppercase">
              Mode 02 · Maximum Defense
            </div>
            <h3 className="text-xl font-serif-display text-charcoal">
              Strict Protection
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Aggressive blocking of all detected trackers, third-party cookies, and fingerprinting scripts across all windows. Results in maximum speed and battery savings.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <div className="text-xs font-mono font-semibold text-charcoal-muted uppercase">
              Mode 03 · User Controlled
            </div>
            <h3 className="text-xl font-serif-display text-charcoal">
              Custom Protection
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Manually choose which categories to block: Cookies, Tracking content, Cryptominers, or Known Fingerprinters, with granular per-site exception management.
            </p>
          </div>
        </div>

        {/* Real Screenshot + Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup
              src="/assets/screenshots/tracking-protection.jpeg"
              alt="Enhanced Tracking Protection Screen"
              caption="Actual Nirvana UI showing Total Cookie Protection & GPC toggle"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-serif-display text-charcoal">
              How Total Cookie Protection Works
            </h2>
            <p className="text-sm text-charcoal-soft leading-relaxed">
              On the traditional web, advertising networks place third-party cookies on your device that follow you across hundreds of different websites, assembling an intimate portrait of your health, finances, and personal life.
            </p>
            <p className="text-sm text-charcoal-soft leading-relaxed">
              Total Cookie Protection builds an isolated &quot;cookie jar&quot; for each website you visit. Facebook cannot see the cookie dropped by your medical portal, and your news site cannot see your shopping activity.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-black/[0.06] space-y-2">
              <div className="text-xs font-semibold text-charcoal flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Global Privacy Control (GPC) Supported
              </div>
              <p className="text-xs text-charcoal-muted">
                Nirvana automatically broadcasts the &quot;Do Not Sell or Share My Data&quot; signal (GPC header) to participating websites by default.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="pt-8">
          <ProtectionDemo />
        </div>
      </div>
    </div>
  );
}
