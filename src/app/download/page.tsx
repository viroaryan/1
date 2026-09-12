import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  ShieldCheck,
  Smartphone,
  ExternalLink,
  CheckCircle2,
  Lock,
  Copy,
  Layers,
  Sparkles,
  Terminal,
} from "lucide-react";
import { EmeraldForestBackground } from "@/components/ui/AtmosphericBackground";

export const metadata = {
  title: "Download Nirvana Browser — Official Android Release",
  description:
    "Download Nirvana Browser for Android. Available on Google Play Store and as direct verified APK. Fast, private, open-source GeckoView browsing.",
};

export default function DownloadPage() {
  return (
    <div className="relative min-h-screen overflow-hidden theme-light-surface">
      <EmeraldForestBackground />
      <div className="relative z-10 pt-32 pb-24 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto space-y-16 text-left">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="apple-badge">
            <Download className="w-3.5 h-3.5 text-zinc-600" />
            <span>Official Distribution Hub</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
            Download Nirvana Browser
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Free forever. No advertisements, no telemetry trackers, and zero paywalls. Available directly on the Google Play Store or as a verified standalone APK.
          </p>
        </div>

        {/* Primary Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Google Play Store Card */}
          <div className="apple-card-light p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-zinc-900 text-white">
                  Recommended
                </span>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                  Auto Updates
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-zinc-900">
                Google Play Store
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                Download the verified, automatically updated release directly from the Google Play Store. Signed by the Nirvana team.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=org.nirvana"
                target="_blank"
                rel="noreferrer"
                className="apple-btn-primary w-full py-3.5 text-xs flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Install from Google Play</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <div className="text-xs text-zinc-500 font-mono text-center">
                Package: <code className="bg-zinc-100 px-2 py-0.5 rounded text-zinc-700">org.nirvana</code>
              </div>
            </div>
          </div>

          {/* Direct Standalone APK Card */}
          <div className="apple-card-light p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">
                  Standalone
                </span>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
                  Google-Free
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-zinc-900">
                Direct APK Release
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                For de-googled phones, custom ROMs, or offline installations without Google Play Services.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href="https://github.com/viroaryan"
                target="_blank"
                rel="noreferrer"
                className="apple-btn-ghost w-full py-3.5 text-xs flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Nirvana 1.0.2 APK</span>
              </a>

              <div className="text-xs text-zinc-500 font-mono text-center">
                Size: ~78 MB · Architecture: ARM64-v8a / ARMv7
              </div>
            </div>
          </div>
        </div>

        {/* System Requirements & Verification Table */}
        <div className="apple-card-light p-8 space-y-6">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-semibold text-zinc-900">
              System Specifications & Checksum
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/60 space-y-1">
              <div className="text-zinc-500 text-[10px] font-medium uppercase tracking-wider">Supported OS</div>
              <div className="font-semibold text-zinc-900">Android 8.0 through 16</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/60 space-y-1">
              <div className="text-zinc-500 text-[10px] font-medium uppercase tracking-wider">Engine Version</div>
              <div className="font-semibold text-zinc-900">GeckoView 153.0.4</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/60 space-y-1">
              <div className="text-zinc-500 text-[10px] font-medium uppercase tracking-wider">Build Number</div>
              <div className="font-semibold text-zinc-900">#2016178885</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/60 space-y-1">
              <div className="text-zinc-500 text-[10px] font-medium uppercase tracking-wider">License</div>
              <div className="font-semibold text-zinc-900">MPL 2.0 Open Source</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/60 text-xs font-mono space-y-1.5 text-zinc-600 overflow-x-auto">
            <div className="font-medium text-zinc-800 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-zinc-500" />
              <span>SHA256 Cryptographic Checksum (Release APK):</span>
            </div>
            <code className="text-zinc-800 text-[11px] block break-all font-mono bg-white p-2.5 rounded-lg border border-zinc-200">
              e8b4f391c072b09da512708304c4f9f743126849b29158309a4731a580231920
            </code>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

