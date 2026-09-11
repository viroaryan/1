import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Github, Instagram, Send, Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "The Team — Built by People, Not a Corporation",
  description:
    "Meet the independent core team behind Nirvana Browser: Abhiraj Aryan, Rahul Kumar Pal, Shivam Giri, and Priyanshu Singh.",
};

export default function TeamPage() {
  const team = [
    {
      name: "Abhiraj Aryan",
      role: "Creator, Owner & Team Leader",
      bio: "Browser architect leading upstream GeckoView modifications, telemetry minimization, product vision, and independent engineering.",
      image: "/assets/founder.png",
      github: "https://github.com/viroaryan",
      instagram: "https://instagram.com/viro.coder.aryan",
      initials: "AA",
    },
    {
      name: "Rahul Kumar Pal",
      role: "Code Reviewer & Corrections",
      bio: "Gecko codebase QA, regression testing, bug remediation, and patch verification across modern Android releases.",
      initials: "RP",
      color: "bg-calm-lavenderLight text-calm-lavender",
    },
    {
      name: "Shivam Giri",
      role: "Marketing & Community Outreach",
      bio: "Directing independent developer engagement, community support channels, and digital brand storytelling.",
      initials: "SG",
      color: "bg-calm-peach/40 text-brand",
    },
    {
      name: "Priyanshu Singh",
      role: "Resource Analyst",
      bio: "Benchmarking memory utilization, battery consumption telemetry audits, and upstream Gecko release performance tracking.",
      initials: "PS",
      color: "bg-calm-sageLight text-calm-sage",
    },
  ];

  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-[#F7F7F3] min-h-screen">
      <div className="max-w-6xl mx-auto space-y-16 text-left">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Users className="w-3.5 h-3.5" />
            <span>The Independent Crew</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Built by people, not a corporation.
          </h1>

          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Nirvana is engineered by a small, focused team that values craftsmanship, privacy, and digital quietude over bureaucratic corporate bloat.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4 flex flex-col justify-between hover:shadow-float transition-all duration-300"
            >
              <div className="space-y-4">
                {member.image ? (
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-black/5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="280px"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-full aspect-square rounded-2xl flex items-center justify-center font-serif-display text-4xl font-bold ${member.color}`}
                  >
                    {member.initials}
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold text-charcoal">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono text-brand mt-0.5">
                    {member.role}
                  </div>
                  <p className="text-xs text-charcoal-muted mt-2.5 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {member.github && (
                <div className="flex items-center gap-3 pt-3 border-t border-black/[0.04] text-charcoal-muted">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-charcoal transition-colors"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-charcoal transition-colors"
                      aria-label={`${member.name} Instagram`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Contributors Card */}
        <div className="p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="micro-label text-charcoal-muted">Community Contributors</span>
            <h3 className="text-2xl font-serif-display text-charcoal">
              Additional Contributors: Coming Soon
            </h3>
            <p className="text-xs text-charcoal-muted">
              We regularly acknowledge community developers, beta testers, and translators in our release notes.
            </p>
          </div>

          <Link
            href="/join"
            className="px-7 py-3.5 rounded-full bg-charcoal text-white text-xs font-mono uppercase tracking-wider hover:bg-brand transition-colors inline-flex items-center gap-2 shrink-0"
          >
            <span>Join the Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
