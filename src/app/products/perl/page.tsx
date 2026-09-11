import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowLeft, Video, Mic, ShieldCheck, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Nirvana Perl — Peer-to-Peer Real-Time Communication Concept",
  description:
    "Product overview of Nirvana Perl (In Development). An experimental lightweight communication client leveraging peer-to-peer WebRTC protocols.",
};

export default function NirvanaPerlPage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12 text-left">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-charcoal-muted hover:text-charcoal"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Ecosystem
        </Link>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="micro-label text-brand">Ecosystem Project</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-300">
              STATUS: IN DEVELOPMENT / ARCHITECTURAL CONCEPT
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Nirvana Perl
          </h1>

          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            A free, lightweight, real-time communication application designed around direct peer-to-peer WebRTC connections rather than centralized surveillance servers.
          </p>
        </div>

        {/* Factuality Notice */}
        <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-2">
          <div className="flex items-center gap-2 font-semibold text-amber-900">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Planned Architecture ≠ Released Product</span>
          </div>
          <p className="leading-relaxed">
            Nirvana Perl is an <strong>early architectural exploration</strong>. It is not currently deployed or usable as a consumer application. The protocols described below represent our target technical blueprint for decentralized communication.
          </p>
        </div>

        {/* Target Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <MessageCircle className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Peer-to-Peer Chat
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Targeting direct device-to-device data channel exchange over WebSockets and WebRTC with no middleman databases storing conversation transcripts.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Video className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Zero-Cloud Calls
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Audio and video streams negotiated using ephemeral DTLS-SRTP cryptographic keys directly between caller and recipient.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <ShieldCheck className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              No Phone Number Identity
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Designed around cryptographic public-key IDs rather than SIM card telephone numbers, decoupling messaging from telecom tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

