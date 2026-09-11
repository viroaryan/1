import React from "react";
import Link from "next/link";
import {
  KeyRound,
  Lock,
  Fingerprint,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Password Vault & Security Model — Nirvana Browser",
  description:
    "An honest, technical explanation of Nirvana Browser's on-device password vault, biometric authentication, and cryptographic threat model.",
};

export default function PasswordsFeaturePage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-[#F7F7F3] min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 micro-label text-brand">
            <KeyRound className="w-3.5 h-3.5" />
            <span>On-Device Security</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif-display text-charcoal leading-tight">
            Your Private Vault
          </h1>

          <p className="text-lg sm:text-xl text-charcoal-soft font-light leading-relaxed">
            Store logins, passwords, and form credentials directly in an encrypted database on your device, unlocked by your fingerprint or screen lock.
          </p>
        </div>

        {/* Security Reality Check Alert */}
        <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-xs sm:text-sm space-y-2">
          <div className="flex items-center gap-2 font-semibold text-amber-900">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Realistic Security Guarantee & Threat Model</span>
          </div>
          <p className="leading-relaxed">
            No software is invulnerable or &quot;military-grade unhackable.&quot; We explicitly advise users that browser-stored credentials are meant for convenient daily web authentication. If your physical phone is rooted, compromised by root-level malware, or unlocked by an unauthorized party, local storage can theoretically be targeted. For high-value master keys or financial seed phrases, we recommend dedicated hardware security keys.
          </p>
        </div>

        {/* 3 Pillars of the Vault */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Fingerprint className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Biometric Unlock
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Autofill prompts require device fingerprint or biometric facial authentication before decrypting credentials into page forms.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <Lock className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Zero Default Cloud
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Passwords stay stored in an isolated, encrypted SQLite database on your device filesystem. They are never transmitted to Nirvana servers.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-3">
            <ShieldCheck className="w-6 h-6 text-brand" />
            <h3 className="text-xl font-serif-display text-charcoal">
              Breach Alert Checks
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Local k-anonymity hashing lets you check if saved passwords have appeared in known public breach datasets without leaking plaintext credentials.
            </p>
          </div>
        </div>

        {/* Technical Architecture Details */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.06] space-y-6 text-left">
          <h2 className="text-2xl font-serif-display text-charcoal">
            Cryptographic Architecture
          </h2>
          <div className="space-y-4 text-sm text-charcoal-soft leading-relaxed">
            <p>
              Under the hood, Nirvana leverages the standard Mozilla Firefox Login Manager framework built into GeckoView, backed by Android Keystore hardware-backed encryption keys where supported by your device SoC.
            </p>
            <p>
              When optional synchronization is enabled in future releases via end-to-end encrypted Firefox Sync protocols, encryption keys are derived on your device using PBKDF2 with SHA-256 before any payload leaves your hardware.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
