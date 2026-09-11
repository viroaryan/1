import React from "react";
import Link from "next/link";
import { Coffee, Heart, CheckCircle2, Server, Shield, Sparkles } from "lucide-react";

export const metadata = {
  title: "Support Nirvana — Buy the Team a Coffee",
  description:
    "Support independent, open-source browser development. Help fund server hosting, device testing labs, and privacy engineering.",
};

export default function CoffeePage() {
  const tiers = [
    {
      name: "Espresso Shot",
      amount: "$3",
      desc: "Funds a day of continuous integration and build artifact storage.",
    },
    {
      name: "Warm Pour-Over",
      amount: "$10",
      desc: "Supports device farm testing across multiple Android handset generations.",
    },
    {
      name: "Roastery Patron",
      amount: "$25",
      desc: "Directly funds independent security audits and upstream patch development.",
    },
  ];

  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-[#F7F7F3] min-h-screen">
      <div className="max-w-3xl mx-auto space-y-12 text-left">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Coffee className="w-3.5 h-3.5" />
            <span>Independent Sustainability</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            HELP KEEP NIRVANA BUILDING.
          </h1>

          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Nirvana is 100% free and open source. We do not sell user data, take advertising kickbacks, or bundle spyware. Community support keeps our servers online and fuels continuous development.
          </p>
        </div>

        {/* Where Funding Goes */}
        <div className="p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4">
          <h2 className="text-xl font-serif-display text-charcoal">
            Where Your Support Goes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-charcoal-muted leading-relaxed">
            <div className="flex items-start gap-2">
              <Server className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <span>Hosting build infrastructure and APK distribution bandwidth.</span>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <span>Acquiring diverse Android test hardware (Android 8 through 16).</span>
            </div>
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <span>Independent design assets, iconography, and open-source documentation.</span>
            </div>
            <div className="flex items-start gap-2">
              <Heart className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <span>Supporting independent developers fighting browser monopolies.</span>
            </div>
          </div>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tiers.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm flex flex-col justify-between space-y-4 text-left"
            >
              <div className="space-y-1">
                <div className="text-2xl font-serif-display text-brand font-bold">
                  {t.amount}
                </div>
                <div className="text-xs font-semibold text-charcoal">{t.name}</div>
                <p className="text-xs text-charcoal-muted leading-relaxed pt-1">
                  {t.desc}
                </p>
              </div>

              <a
                href="https://github.com/viroaryan"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-full bg-[#F7F7F3] hover:bg-brand hover:text-white text-charcoal text-xs font-mono uppercase tracking-wider text-center transition-colors"
              >
                Sponsor on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
