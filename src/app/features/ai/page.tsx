import React from "react";
import Link from "next/link";
import { Sparkles, ShieldCheck, Lock, CheckCircle2, Cpu } from "lucide-react";

export const metadata = {
  title: "AI Summarizer & Page Insights — Nirvana Browser",
  description:
    "Private, on-device page summarization in Nirvana Browser. Extract key insights from articles without transmitting your reading data to cloud servers.",
};

export default function AiFeaturePage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Sparkles className="w-3.5 h-3.5" />
            <span>On-Device Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            AI Summarizer
          </h1>

          <p className="text-lg sm:text-xl text-charcoal-soft font-light leading-relaxed">
            Instant comprehension without cloud surveillance. Summarize 3,000-word investigative reports or technical documentation into digestible key findings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Cpu className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Local On-Device Execution
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Where supported by modern Android hardware accelerators (NPU), summaries are generated locally so your reading history is never streamed to third-party cloud LLM endpoints.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <ShieldCheck className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Zero Training on Your Reading
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Your page content is never saved, retained, or utilized to train external foundational AI models.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl liquid-glass border border-black/[0.08] space-y-4">
          <div className="text-xs font-mono text-brand font-semibold uppercase">
            Product Status: Experimental Feature
          </div>
          <p className="text-sm text-charcoal-soft leading-relaxed">
            AI summarization is currently rolling out experimentally to selected Android builds. It remains completely optional and can be turned off entirely with a single toggle in Settings.
          </p>
        </div>
      </div>
    </div>
  );
}

