import React from "react";
import Link from "next/link";
import {
  Trash2,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Lock,
} from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";

export const metadata = {
  title: "Delete Browsing Data on Quit — Nirvana Browser",
  description:
    "Leave no digital residue. Automatically purge open tabs, cookies, history, and cache when closing Nirvana Browser.",
};

export default function PrivacyOnQuitFeaturePage() {
  const items = [
    {
      title: "Open Tabs",
      desc: "Closes all active webpage tabs and frees memory instantly upon app exit.",
    },
    {
      title: "Browsing History",
      desc: "Purges the list of visited URLs and navigation timestamps from local storage.",
    },
    {
      title: "Cookies & Site Data",
      desc: "Logs you out of web sessions and deletes persistent session identifiers.",
    },
    {
      title: "Cached Images & Files",
      desc: "Frees device flash storage space by deleting temporary web assets.",
    },
    {
      title: "Site Permissions",
      desc: "Resets location, camera, or microphone permissions granted to specific domains.",
    },
    {
      title: "Downloads Log",
      desc: "Clears the download transaction history (downloaded files remain safely in your phone Downloads folder).",
    },
  ];

  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-[#F7F7F3] min-h-screen">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Trash2 className="w-3.5 h-3.5" />
            <span>Zero Persistence</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Delete Browsing Data on Quit
          </h1>

          <p className="text-lg sm:text-xl text-charcoal-soft font-light leading-relaxed max-w-3xl">
            When you finish a browsing session, your phone should reset to a clean slate. Configure exactly what is purged the second you swipe Nirvana away from your Android recents tray.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup
              src="/assets/screenshots/delete-data.jpeg"
              alt="Delete Browsing Data UI"
              caption="Actual Nirvana UI with individual data category checkboxes"
            />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif-display text-charcoal mb-4">
              Granular Purge Checkboxes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm space-y-1"
                >
                  <div className="text-xs font-semibold text-charcoal flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                    {item.title}
                  </div>
                  <p className="text-[11px] text-charcoal-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#FAFAF8] border border-black/[0.05] text-xs font-mono text-charcoal-muted mt-4">
              Note: Saved Bookmarks and Password Vault entries are never erased by automatic quit purges unless you explicitly choose to wipe your profile in Settings.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
