import React from "react";
import Link from "next/link";
import { Layers, Shield, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";

export const metadata = {
  title: "Tab Management & Process Isolation — Nirvana Browser",
  description:
    "Organized, lightweight tab management for Android. Separate private tabs, sandboxed memory isolation, and instant session restores.",
};

export default function TabsFeaturePage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Layers className="w-3.5 h-3.5" />
            <span>Process Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Tabs with purpose.
          </h1>

          <p className="text-lg sm:text-xl text-charcoal-soft font-light leading-relaxed max-w-3xl">
            Tab overload creates cognitive fatigue and memory exhaustion. Nirvana features an intuitive tab tray, isolated private browsing spaces, and intelligent RAM unloading for background tabs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Shield className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Airtight Private Tabs
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Private tabs live in completely isolated RAM storage containers with their own cookie jars and zero disk persistence.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Zap className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Intelligent Memory Suspension
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Tabs left inactive in the background automatically suspend heavy JavaScript threads while keeping your exact scroll position saved.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Sparkles className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              One-Swipe Tab Dismissal
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Effortless flick gestures to close individual tabs or clear all open sessions with a single tap of the trash action.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <PhoneMockup
            src="/assets/screenshots/private-clean.jpeg"
            alt="Private Tab Clean State"
            caption="Private browsing space in Nirvana Browser"
          />
        </div>
      </div>
    </div>
  );
}

