"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, Send, ShieldCheck, ArrowRight } from "lucide-react";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    role: "Android Developer",
    skills: "",
    experience: "1-3 years",
    portfolio: "",
    github: "",
    linkedin: "",
    instagram: "",
    whyNirvana: "",
    contribution: "",
    availability: "Part-time (10-20 hrs/week)",
    message: "",
  });

  const roles = [
    "Frontend Developer",
    "Android Developer",
    "Firefox / Gecko Developer",
    "UI/UX Designer",
    "Motion Designer",
    "3D Artist",
    "Illustrator",
    "Marketing & Growth",
    "Community Manager",
    "Resource Analyst",
    "Technical Writer",
    "QA / Tester",
    "Security Researcher",
    "Open Source Contributor",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-transparent min-h-screen">
      <div className="max-w-3xl mx-auto space-y-12 text-left">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Call for Builders</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            HELP US BUILD NIRVANA.
          </h1>

          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            We are looking for engineers, designers, security researchers, and writers who care deeply about digital privacy, open-source software, and calm interfaces.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-emerald-500/20 shadow-float text-center space-y-4 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif-display text-charcoal">
              Application Received
            </h2>
            <p className="text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed">
              Thank you, {formData.name || "builder"}. Your application has been logged for review by Abhiraj Aryan and the Nirvana engineering team. We will get back to you via {formData.email}.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.06] shadow-float space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-charcoal font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ada Lovelace"
                  className="w-full p-3 rounded-xl bg-[#F7F7F3] border border-black/[0.06] text-xs text-charcoal outline-none focus:ring-2 focus:ring-brand/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-charcoal font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ada@example.com"
                  className="w-full p-3 rounded-xl bg-[#F7F7F3] border border-black/[0.06] text-xs text-charcoal outline-none focus:ring-2 focus:ring-brand/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-charcoal font-medium">
                  Country / Timezone *
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. India (IST) or Germany (CET)"
                  className="w-full p-3 rounded-xl bg-[#F7F7F3] border border-black/[0.06] text-xs text-charcoal outline-none focus:ring-2 focus:ring-brand/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-charcoal font-medium">
                  Primary Role Applied For *
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#F7F7F3] border border-black/[0.06] text-xs text-charcoal outline-none focus:ring-2 focus:ring-brand/30"
                >
                  {roles.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-charcoal font-medium">
                Key Skills & Technologies *
              </label>
              <input
                type="text"
                required
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                placeholder="e.g. Kotlin, Android SDK, C++, GeckoView, Figma, Next.js, WebExtensions"
                className="w-full p-3 rounded-xl bg-[#F7F7F3] border border-black/[0.06] text-xs text-charcoal outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono text-charcoal font-medium">
                  GitHub Profile
                </label>
                <input
                  type="url"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  placeholder="https://github.com/username"
                  className="w-full p-3 rounded-xl bg-[#F7F7F3] border border-black/[0.06] text-xs text-charcoal outline-none focus:ring-2 focus:ring-brand/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-charcoal font-medium">
                  Portfolio / Website
                </label>
                <input
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  placeholder="https://yourportfolio.dev"
                  className="w-full p-3 rounded-xl bg-[#F7F7F3] border border-black/[0.06] text-xs text-charcoal outline-none focus:ring-2 focus:ring-brand/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-charcoal font-medium">
                  LinkedIn or Instagram
                </label>
                <input
                  type="text"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  placeholder="@handle or profile link"
                  className="w-full p-3 rounded-xl bg-[#F7F7F3] border border-black/[0.06] text-xs text-charcoal outline-none focus:ring-2 focus:ring-brand/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-charcoal font-medium">
                Why Nirvana? *
              </label>
              <textarea
                required
                rows={3}
                value={formData.whyNirvana}
                onChange={(e) => setFormData({ ...formData, whyNirvana: e.target.value })}
                placeholder="What draws you to independent browser development and our calm computing philosophy?"
                className="w-full p-3 rounded-xl bg-[#F7F7F3] border border-black/[0.06] text-xs text-charcoal outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-charcoal font-medium">
                What can you contribute to the project? *
              </label>
              <textarea
                required
                rows={3}
                value={formData.contribution}
                onChange={(e) => setFormData({ ...formData, contribution: e.target.value })}
                placeholder="Specific ideas, patches, UI refinements, or tests you would like to tackle..."
                className="w-full p-3 rounded-xl bg-[#F7F7F3] border border-black/[0.06] text-xs text-charcoal outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-brand text-white font-medium text-xs font-mono uppercase tracking-wider hover:bg-brand-hover shadow-glow flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                Submit Application
              </button>
            </div>

            <div className="pt-4 border-t border-black/[0.04] text-[11px] font-mono text-charcoal-muted flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Privacy notice: Applicant information is kept strictly confidential and never shared with third parties.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

