import React from "react";
import Link from "next/link";
import { Github, Send, Instagram, Youtube, ExternalLink, Users, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Nirvana Community — GitHub, Telegram, Instagram & YouTube",
  description:
    "Join the independent Nirvana community. Connect with testers, developers, and privacy advocates across our official channels.",
};

export default function CommunityPage() {
  const channels = [
    {
      name: "GitHub Repository",
      handle: "@viroaryan",
      link: "https://github.com/viroaryan",
      desc: "Track source code commits, inspect issue discussions, submit pull requests, and audit build configurations.",
      icon: Github,
      btn: "View GitHub",
    },
    {
      name: "Telegram Community",
      handle: "@nirvanabrowser",
      link: "https://t.me/nirvanabrowser",
      desc: "Join real-time discussions with founder Abhiraj Aryan, download early beta APK builds, and chat with fellow testers.",
      icon: Send,
      btn: "Join Telegram",
    },
    {
      name: "Instagram",
      handle: "@viro.coder.aryan",
      link: "https://instagram.com/viro.coder.aryan",
      desc: "Behind-the-scenes engineering reels, design teasers, and visual updates on Calm Computing interfaces.",
      icon: Instagram,
      btn: "Follow on Instagram",
    },
    {
      name: "YouTube Channel",
      handle: "Nirvana Browser",
      link: "https://youtube.com",
      desc: "Cinematic browser feature walkthroughs, UI demonstrations, and open-source development live streams.",
      icon: Youtube,
      btn: "Watch on YouTube",
    },
  ];

  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-5xl mx-auto space-y-16 text-left">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Users className="w-3.5 h-3.5" />
            <span>The Independent Movement</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Build with us.
          </h1>

          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Nirvana is not a walled corporate garden. We build in the open, share our engineering roadmaps, and welcome everyone who cares about a quieter internet.
          </p>
        </div>

        {/* Community Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {channels.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4 flex flex-col justify-between hover:shadow-float transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-[#F7F7F3] text-brand">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-charcoal-muted">
                      {c.handle}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif-display text-charcoal">
                    {c.name}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.04]">
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-full bg-[#F7F7F3] hover:bg-brand hover:text-white text-charcoal text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <span>{c.btn}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

