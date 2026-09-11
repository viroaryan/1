"use client";

import React, { useState } from "react";
import { Sparkles, Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function SuggestionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState("Feature request");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const types = [
    "Feature request",
    "UI & Design Idea",
    "Bug Report",
    "Performance Optimization",
    "Privacy & Telemetry Concern",
    "Search Engine Suggestion",
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
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Community Feedback</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Submit a Suggestion
          </h1>

          <p className="text-lg text-charcoal-soft font-light leading-relaxed">
            Have an idea to make Nirvana calmer, faster, or more private? We review community feedback directly to shape upcoming releases.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-emerald-500/20 shadow-float text-center space-y-4 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif-display text-charcoal">
              Thank you for your input
            </h2>
            <p className="text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed">
              Your {type.toLowerCase()} has been delivered to the Nirvana product roadmap review queue.
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
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Anonymous or your name"
                  className="w-full p-3 rounded-xl bg-[#F7F7F3] border border-black/[0.06] text-xs text-charcoal outline-none focus:ring-2 focus:ring-brand/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-charcoal font-medium">
                  Email (Optional, if you want a response)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full p-3 rounded-xl bg-[#F7F7F3] border border-black/[0.06] text-xs text-charcoal outline-none focus:ring-2 focus:ring-brand/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-charcoal font-medium">
                Suggestion Category *
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full p-3 rounded-xl bg-[#F7F7F3] border border-black/[0.06] text-xs text-charcoal outline-none focus:ring-2 focus:ring-brand/30"
              >
                {types.map((t, i) => (
                  <option key={i} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-charcoal font-medium">
                Your Idea or Feedback *
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your suggestion, the problem it solves, or steps to reproduce..."
                className="w-full p-3 rounded-xl bg-[#F7F7F3] border border-black/[0.06] text-xs text-charcoal outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-brand text-white font-medium text-xs font-mono uppercase tracking-wider hover:bg-brand-hover shadow-glow flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                Submit Feedback
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

