import React from "react";
import Link from "next/link";
import { Users, Sparkles, ArrowRight, Heart } from "lucide-react";
import FounderProfileCard from "@/components/ui/FounderProfileCard";
import TeamMemberUiverseCard from "@/components/ui/TeamMemberUiverseCard";

export const metadata = {
  title: "The Team — Built by People, Not a Corporation",
  description:
    "Meet the independent core team behind Nirvana Browser: Abhiraj Aryan, Rahul Kumar Pal, Shivam Giri, and Priyanshu Singh.",
};

export default function TeamPage() {
  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-6xl mx-auto space-y-16 text-left">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="apple-badge">
            <Users className="w-3.5 h-3.5 text-zinc-600" />
            <span>The Independent Crew</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
            Built by people, not a corporation.
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Nirvana is engineered by a small, focused team that values craftsmanship, privacy, and digital quietude over bureaucratic corporate bloat.
          </p>
        </div>

        {/* Team Grid with Uiverse Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {/* Founder Card */}
          <FounderProfileCard
            name="Abhiraj Aryan"
            role="Creator & Team Leader"
            bio="Browser architect directing GeckoView modifications, privacy pipelines, and product strategy."
            image="/assets/founder.png"
            github="https://github.com/viroaryan"
            instagram="https://instagram.com/viro.coder.aryan"
            telegram="https://t.me/nirvanabrowser"
          />

          {/* Rahul Kumar Pal */}
          <TeamMemberUiverseCard
            name="Rahul Kumar Pal"
            role="Code Reviewer & QA"
            bio="Codebase QA, regression testing, bug remediation, and patch verification across modern Android releases."
            initials="RP"
            theme="lavender"
          />

          {/* Shivam Giri */}
          <TeamMemberUiverseCard
            name="Shivam Giri"
            role="Marketing & Outreach"
            bio="Community growth, open-source communication, developer engagement, and digital brand storytelling."
            initials="SG"
            theme="sky"
          />

          {/* Priyanshu Singh */}
          <TeamMemberUiverseCard
            name="Priyanshu Singh"
            role="Resource Analyst"
            bio="Memory benchmark analysis, battery telemetry audits, and upstream Gecko release performance tracking."
            initials="PS"
            theme="emerald"
          />
        </div>

        {/* Additional Contributors Card */}
        <div className="apple-card-light p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-dashed">
          <div className="space-y-1 text-left">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Community Contributors
            </div>
            <h3 className="text-xl font-semibold text-zinc-900">
              Want to build the future of privacy?
            </h3>
            <p className="text-sm text-zinc-600 font-normal">
              We regularly acknowledge community developers, beta testers, and translators in our release notes.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/join"
              className="apple-btn-primary text-xs flex items-center gap-2"
            >
              <span>Join The Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

