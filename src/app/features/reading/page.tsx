import React from "react";
import Link from "next/link";
import { BookOpen, Sparkles, Sliders, CheckCircle2, Type } from "lucide-react";

export const metadata = {
  title: "Noise-Free Reading Mode — Nirvana Browser",
  description:
    "Strip away chaotic ads, banners, and overlays. Experience long-form web content in a pristine editorial serif typography canvas.",
};

export default function ReadingFeaturePage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-[#F7F7F3] min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Digital Solitude</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            The web as a book.
          </h1>

          <p className="text-lg sm:text-xl text-charcoal-soft font-light leading-relaxed">
            Modern web typography has been ruined by blinking banner ads, sticky social share widgets, and multi-layered newsletter popups. Nirvana&apos;s Reader Mode extracts the pure text and imagery, rendering articles in a serene, customizable reading environment.
          </p>
        </div>

        {/* Reader Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Type className="w-6 h-6 text-brand" />
            <h3 className="text-lg font-serif-display text-charcoal">
              Editorial Typefaces
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Switch effortlessly between premium serifs, modern sans-serifs, and dyslexia-friendly typography with adjustable font scaling.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Sliders className="w-6 h-6 text-brand" />
            <h3 className="text-lg font-serif-display text-charcoal">
              Warm Paper Surfaces
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Choose from warm ivory paper, dark slate, sepia, or true OLED black background tones that match ambient lighting conditions.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Sparkles className="w-6 h-6 text-brand" />
            <h3 className="text-lg font-serif-display text-charcoal">
              Local AI Summaries
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Generate a 3-bullet executive overview of lengthy articles on-device before diving into deep long-form reading.
            </p>
          </div>
        </div>

        {/* Simulated Reader Canvas */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF9F5] border border-black/[0.08] shadow-float space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-between text-xs font-mono text-charcoal-muted border-b border-black/[0.06] pb-3">
            <span>READER VIEW ACTIVE · 4 MIN READ</span>
            <span>FONT: SERIF · 100%</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-display text-charcoal leading-tight">
            The Art of Digital Contemplation
          </h2>
          <p className="text-sm text-charcoal-soft leading-relaxed">
            When you remove the noise of the commercial internet, your relationship with text shifts from skimming and anxiety back to genuine comprehension and intellectual focus.
          </p>
        </div>
      </div>
    </div>
  );
}
