import React from "react";
import Link from "next/link";
import { Network, ShieldCheck, Lock, CheckCircle2, Globe2 } from "lucide-react";

export const metadata = {
  title: "DNS over HTTPS (DoH) — Nirvana Browser",
  description:
    "Protect your internet traffic at the network lookup layer. Encrypt DNS queries with Cloudflare, NextDNS, or your custom resolver in Nirvana Browser.",
};

export default function DnsFeaturePage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-[#F7F7F3] min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Network className="w-3.5 h-3.5" />
            <span>Network Security</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            DNS over HTTPS
          </h1>

          <p className="text-lg sm:text-xl text-charcoal-soft font-light leading-relaxed">
            Every time you visit a website, your phone performs a domain name lookup. Without encryption, your local Internet Service Provider (ISP) or public coffee shop Wi-Fi can view every site you visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Lock className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Encrypted Lookups
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Wraps DNS queries inside an encrypted HTTPS tunnel (RFC 8484) so intermediate networks cannot snoop or hijack your destinations.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Globe2 className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Trusted Resolvers
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Choose from verified privacy-respecting resolvers such as Cloudflare (1.1.1.1) and NextDNS, or enter your own custom DoH URL.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <ShieldCheck className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Anti-Spoofing
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Prevents DNS poisoning and fraudulent redirection to spoofed phishing portals when connected to untrusted public Wi-Fi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
