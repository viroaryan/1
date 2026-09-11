import React from "react";
import Link from "next/link";
import { Mail, ShieldAlert, Newspaper, Handshake, Send } from "lucide-react";

export const metadata = {
  title: "Contact Nirvana — Independent Team Communication",
  description:
    "Direct contact channels for Nirvana Browser: general inquiries, security vulnerabilities, press, and open-source partnerships.",
};

export default function ContactPage() {
  const channels = [
    {
      title: "General Inquiries & Feedback",
      icon: Mail,
      desc: "Questions about Nirvana Browser features, installation assistance, or general queries.",
      action: "contact@nirvanabrowser.com",
      link: "mailto:contact@nirvanabrowser.com",
    },
    {
      title: "Security & Vulnerability Reports",
      icon: ShieldAlert,
      desc: "Responsible disclosure of security issues, engine memory vulnerabilities, or telemetry leaks.",
      action: "security@nirvanabrowser.com",
      link: "mailto:security@nirvanabrowser.com",
    },
    {
      title: "Press & Editorial",
      icon: Newspaper,
      desc: "Interviews with founder Abhiraj Aryan, media kit requests, and publication inquiries.",
      action: "press@nirvanabrowser.com",
      link: "mailto:press@nirvanabrowser.com",
    },
    {
      title: "Open Source & Partnerships",
      icon: Handshake,
      desc: "Collaboration with open-source repositories, search engines, and privacy advocacy groups.",
      action: "partners@nirvanabrowser.com",
      link: "mailto:partners@nirvanabrowser.com",
    },
  ];

  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-[#F7F7F3] min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16 text-left">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Send className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Contact the Team
          </h1>

          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Reach out to our independent team directly. We do not use automated bot responses or ticket routing black holes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {channels.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-2.5 rounded-2xl bg-[#F7F7F3] text-brand w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif-display text-charcoal">
                    {ch.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {ch.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/[0.04]">
                  <a
                    href={ch.link}
                    className="text-xs font-mono text-brand font-semibold hover:underline"
                  >
                    {ch.action} →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Telegram Quick Connect */}
        <div className="p-8 rounded-3xl liquid-glass border border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-serif-display text-charcoal">
              Prefer Real-Time Messaging?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
              Join our active community chat on Telegram for live support and testing discussions.
            </p>
          </div>
          <a
            href="https://t.me/nirvanabrowser"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-brand text-white text-xs font-mono uppercase tracking-wider hover:bg-brand-hover shadow-sm shrink-0"
          >
            Join Telegram @nirvanabrowser
          </a>
        </div>
      </div>
    </div>
  );
}
