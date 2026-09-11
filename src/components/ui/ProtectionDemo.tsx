"use client";

import React, { useState } from "react";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Flame,
  Cookie,
  EyeOff,
  Sparkles,
  RefreshCw,
} from "lucide-react";

export default function ProtectionDemo() {
  const [protectedMode, setProtectedMode] = useState(true);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl liquid-glass border border-black/[0.08] p-6 sm:p-8 shadow-float overflow-hidden">
      {/* Control Strip */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.06]">
        <div>
          <div className="flex items-center gap-2">
            <span className="micro-label text-brand">Live Demonstration</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/[0.04] text-charcoal-muted">
              Interactive Sandbox
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif-display text-charcoal mt-1">
            Experience the Quiet Web
          </h3>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-3 bg-white p-1.5 rounded-full border border-black/[0.08] shadow-sm">
          <button
            onClick={() => setProtectedMode(false)}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 ${
              !protectedMode
                ? "bg-rose-50 text-rose-700 font-semibold border border-rose-200"
                : "text-charcoal-muted hover:text-charcoal"
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            Noise (Unprotected)
          </button>
          <button
            onClick={() => setProtectedMode(true)}
            className={`px-5 py-2 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 shadow-sm ${
              protectedMode
                ? "bg-brand text-white font-semibold shadow-glow"
                : "text-charcoal-muted hover:text-charcoal"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Nirvana Shield (Active)
          </button>
        </div>
      </div>

      {/* Status Bar */}
      <div className="py-3 px-4 my-4 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs font-mono transition-colors duration-500 bg-black/[0.02] border border-black/[0.04]">
        <div className="flex items-center gap-2">
          {protectedMode ? (
            <>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-emerald-700 font-medium">
                Total Cookie Protection: Active
              </span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="text-rose-700 font-medium">
                19 Tracking scripts executing
              </span>
            </>
          )}
        </div>
        <div className="flex items-center gap-4 text-charcoal-muted text-[11px]">
          <span>Trackers: {protectedMode ? "0 Allowed (24 Blocked)" : "24 Active"}</span>
          <span>Ad networks: {protectedMode ? "Zero injected" : "5 scripts"}</span>
          <span>Telemetry: {protectedMode ? "Stripped" : "Exposing IP"}</span>
        </div>
      </div>

      {/* Simulated Web Viewport */}
      <div className="relative rounded-2xl bg-white border border-black/[0.06] shadow-sm overflow-hidden min-h-[380px] transition-all duration-500">
        {/* Browser Top Bar */}
        <div className="bg-[#F2F1EC] px-4 py-2.5 border-b border-black/[0.06] flex items-center justify-between text-xs font-mono text-charcoal-muted">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-black/20" />
            </div>
            <span className="ml-2 text-[11px] text-charcoal-muted bg-white/70 px-3 py-1 rounded-md border border-black/[0.04] flex items-center gap-1.5">
              {protectedMode ? (
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
              ) : (
                <ShieldAlert className="w-3 h-3 text-rose-500" />
              )}
              the-independent-chronicle.org/essays/digital-solitude
            </span>
          </div>
          <span className="hidden sm:inline text-[10px]">GeckoView Engine</span>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 relative">
          {/* Unprotected Distractions Overlay */}
          {!protectedMode && (
            <div className="space-y-4 mb-6">
              {/* Flashing Cookie Consent Banner */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>
                    We use 48 third-party cookies to profile your behavior across 1,200 ad networks.
                  </span>
                </div>
                <div className="flex gap-2 shrink-0">
                  <span className="px-3 py-1 rounded bg-amber-700 text-white font-mono text-[10px]">
                    Accept All
                  </span>
                  <span className="px-3 py-1 rounded bg-white text-amber-800 border border-amber-300 font-mono text-[10px]">
                    Manage 1,200 Partners
                  </span>
                </div>
              </div>

              {/* Injected Promotional Banner */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 text-white text-center shadow-md">
                <div className="text-xs uppercase font-mono tracking-widest text-white/80">
                  SPONSORED ADVERTISEMENT
                </div>
                <div className="text-xl font-bold mt-1">
                  &quot;You Won&apos;t Believe What Tech Billionaires Are Hiding!&quot;
                </div>
                <div className="text-xs mt-1 text-white/90">
                  Click here before this video gets banned from the internet!
                </div>
              </div>
            </div>
          )}

          {/* Clean Editorial Article */}
          <article className="max-w-2xl mx-auto space-y-4">
            <div className="flex items-center gap-2 micro-label text-charcoal-muted">
              <span>Essay</span>
              <span>·</span>
              <span>Architecture of Attention</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-serif-display text-charcoal leading-tight">
              In Search of the Quiet Web: Restoring Human Agency Behind the Glass
            </h1>

            <p className="text-sm sm:text-base text-charcoal-soft leading-relaxed">
              The early promise of networked computing was contemplative: an open library where individuals could wander, read without surveillance, and discover ideas at their own deliberate cadence. Over two decades, an invasive telemetry economy inverted this relationship, turning the browser into a broadcast beacon for third-party script trackers.
            </p>

            <p className="text-sm sm:text-base text-charcoal-soft leading-relaxed">
              When unnecessary data-sharing pipelines are dismantled and Total Cookie Protection isolates each domain into its own airtight cryptographic jar, the web breathes again. Reading returns to what it was meant to be: an uninterrupted communion between writer and reader.
            </p>

            {protectedMode && (
              <div className="mt-6 p-4 rounded-xl liquid-glass border border-emerald-500/20 bg-emerald-50/30 flex items-center justify-between text-xs font-mono text-emerald-800">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  uBlock Origin & GeckoView neutralized 24 hidden tracking beacons on this page.
                </span>
                <span className="text-[10px] text-emerald-600 font-bold uppercase">Clean</span>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
