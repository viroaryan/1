import React from "react";
import Link from "next/link";
import {
  Sliders,
  Sparkles,
  Smartphone,
  Layers,
  Palette,
  CheckCircle2,
} from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";

export const metadata = {
  title: "Browser Customization & Themes — Nirvana Browser",
  description:
    "Tailor your mobile web browser: Aurora Borealis app icon, bottom address bar placement, simple vs expanded toolbars, and dynamic theme synchronization.",
};

export default function CustomizationFeaturePage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-[#F7F7F3] min-h-screen">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Sliders className="w-3.5 h-3.5" />
            <span>Ergonomics & Aesthetics</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Your browser. Your rules.
          </h1>

          <p className="text-lg sm:text-xl text-charcoal-soft font-light leading-relaxed max-w-3xl">
            Software should adapt to the person holding the device, not the other way around. Nirvana provides fine-grained controls over toolbar placement, icon themes, and display density.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup
              src="/assets/screenshots/customize.jpeg"
              alt="Customization Settings UI"
              caption="Actual Nirvana UI: App icon selection, Themes & Address bar location"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-brand">
                <Palette className="w-4 h-4" />
                <span>Custom App Icon Selection</span>
              </div>
              <h3 className="text-xl font-serif-display text-charcoal">
                Aurora Borealis & Signature Styles
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Choose the launcher icon that best matches your home screen aesthetic. Switch between our signature warm orange emblem, the calming emerald-blue Aurora Borealis edition, or minimalist monochrome icons.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-brand">
                <Smartphone className="w-4 h-4" />
                <span>Address Bar Positioning</span>
              </div>
              <h3 className="text-xl font-serif-display text-charcoal">
                Top vs Bottom Ergonomics
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Move the address bar and tab controls to the bottom of the screen for natural, strain-free one-handed browsing on modern large-screen Android smartphones.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-brand">
                <Layers className="w-4 h-4" />
                <span>Toolbar Density</span>
              </div>
              <h3 className="text-xl font-serif-display text-charcoal">
                Simple vs Expanded Layouts
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Choose between a distraction-free simple bar that auto-collapses during scroll or an expanded multi-action dock with bookmarks, tab overview, and forward navigation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
