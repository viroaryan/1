import React from "react";
import Link from "next/link";
import { Search, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";
import SearchEngineSwitcher from "@/components/ui/SearchEngineSwitcher";
import PhoneMockup from "@/components/ui/PhoneMockup";

export const metadata = {
  title: "Search Independence & Engine Choice — Nirvana Browser",
  description:
    "Choose your preferred gateway to information: Google, DuckDuckGo, Bing, or Wikipedia with zero profiling and isolated cookie partitions.",
};

export default function SearchFeaturePage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Search className="w-3.5 h-3.5" />
            <span>Search Freedom</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Search your way.
          </h1>

          <p className="text-lg sm:text-xl text-charcoal-soft font-light leading-relaxed max-w-3xl">
            You shouldn&apos;t be forced into an inescapable search monopoly. Nirvana provides native switching between Google, DuckDuckGo, Bing, and Wikipedia, with no telemetry leakage between your query and your device.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup
              src="/assets/screenshots/search-engines.jpeg"
              alt="Search Engine Switcher Menu"
              caption="Actual 'This time search in' dropdown in Nirvana"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-serif-display text-charcoal">
              Per-Query Engine Switching
            </h2>
            <p className="text-sm text-charcoal-soft leading-relaxed">
              Sometimes you want DuckDuckGo for private personal queries; other times you need Wikipedia for reference or Google for localized map lookups. With Nirvana, tap the search icon in the address bar to change your provider for that specific search, without altering your default settings.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-black/[0.06] text-xs text-charcoal-muted leading-relaxed">
                <strong className="text-charcoal block mb-1">Zero Search Query Brokering</strong>
                Nirvana connects directly to your chosen provider via HTTPS. We do not operate a middleman proxy that records your terms or analyzes search intent.
              </div>
            </div>
          </div>
        </div>

        <SearchEngineSwitcher />
      </div>
    </div>
  );
}

