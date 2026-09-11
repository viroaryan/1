"use client";

import React from "react";

interface Nirvana3DCoinProps {
  size?: number; // size in px
  className?: string;
  showCaption?: boolean;
}

export default function Nirvana3DCoin({
  size = 180,
  className = "",
  showCaption = true,
}: Nirvana3DCoinProps) {
  return (
    <div
      className={`coin-stage-container flex flex-col items-center justify-center ${className}`}
    >
      {/* 3D Perspective Stage */}
      <div
        className="coin-stage"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <div
          className="coin"
          style={{
            fontSize: `${size}px`,
          }}
          title="Nirvana 3D Rotating Token"
        >
          {/* Heads: Front Face with Official Nirvana Emblem (Light Crystal Glass Aesthetic) */}
          <div className="side heads">
            <svg
              viewBox="0 0 500 500"
              className="coin-svg"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                {/* Frosted Light Glass Surface */}
                <radialGradient id="headsGlassGrad" cx="30%" cy="25%" r="75%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
                  <stop offset="35%" stopColor="#f8fafc" stopOpacity="0.94" />
                  <stop offset="70%" stopColor="#e2e8f0" stopOpacity="0.88" />
                  <stop offset="95%" stopColor="#cbd5e1" stopOpacity="0.92" />
                  <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.96" />
                </radialGradient>
                {/* Polished Glass Rim Bevel */}
                <linearGradient id="headsRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
                  <stop offset="45%" stopColor="#cbd5e1" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
                </linearGradient>
                {/* Specular Curved Watch-Glass Gloss */}
                <linearGradient id="headsGlassGloss" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                  <stop offset="40%" stopColor="#ffffff" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
                {/* Crisp Logo Drop Shadow on Glass */}
                <filter
                  id="emblemShadowHeads"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feDropShadow
                    dx="0"
                    dy="4"
                    stdDeviation="6"
                    floodColor="#ea580c"
                    floodOpacity="0.25"
                  />
                  <feDropShadow
                    dx="0"
                    dy="8"
                    stdDeviation="12"
                    floodColor="#0f172a"
                    floodOpacity="0.08"
                  />
                </filter>
              </defs>
              {/* Outer Frosted Glass Disc */}
              <circle
                cx="250"
                cy="250"
                r="242"
                fill="url(#headsGlassGrad)"
                stroke="url(#headsRimGrad)"
                strokeWidth="9"
              />
              {/* Inner Decorative Frosted Glass Rings */}
              <circle
                cx="250"
                cy="250"
                r="222"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                opacity="0.85"
              />
              <circle
                cx="250"
                cy="250"
                r="218"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="1.5"
                strokeDasharray="8 6"
                opacity="0.45"
              />
              {/* Specular Curved Light Reflection Arc across Glass */}
              <path
                d="M 65 240 A 185 185 0 0 1 435 240 A 185 105 0 0 0 65 240 Z"
                fill="url(#headsGlassGloss)"
              />
              {/* Official Nirvana Emblem (Original Vibrant Orange/White) */}
              <image
                href="/assets/logo.png"
                xlinkHref="/assets/logo.png"
                x="65"
                y="65"
                width="370"
                height="370"
                preserveAspectRatio="xMidYMid meet"
                filter="url(#emblemShadowHeads)"
              />
            </svg>
          </div>

          {/* Tails: Back Face with Official Nirvana Emblem (.svg_back) */}
          <div className="side tails">
            <svg
              viewBox="0 0 500 500"
              className="coin-svg svg_back"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                {/* Frosted Light Glass Surface */}
                <radialGradient id="tailsGlassGrad" cx="30%" cy="25%" r="75%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
                  <stop offset="35%" stopColor="#f8fafc" stopOpacity="0.94" />
                  <stop offset="70%" stopColor="#e2e8f0" stopOpacity="0.88" />
                  <stop offset="95%" stopColor="#cbd5e1" stopOpacity="0.92" />
                  <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.96" />
                </radialGradient>
                {/* Polished Glass Rim Bevel */}
                <linearGradient id="tailsRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
                  <stop offset="45%" stopColor="#cbd5e1" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
                </linearGradient>
                {/* Specular Curved Watch-Glass Gloss */}
                <linearGradient id="tailsGlassGloss" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                  <stop offset="40%" stopColor="#ffffff" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
                {/* Crisp Logo Drop Shadow on Glass */}
                <filter
                  id="emblemShadowTails"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feDropShadow
                    dx="0"
                    dy="4"
                    stdDeviation="6"
                    floodColor="#ea580c"
                    floodOpacity="0.25"
                  />
                  <feDropShadow
                    dx="0"
                    dy="8"
                    stdDeviation="12"
                    floodColor="#0f172a"
                    floodOpacity="0.08"
                  />
                </filter>
              </defs>
              {/* Outer Frosted Glass Disc */}
              <circle
                cx="250"
                cy="250"
                r="242"
                fill="url(#tailsGlassGrad)"
                stroke="url(#tailsRimGrad)"
                strokeWidth="9"
              />
              {/* Inner Decorative Frosted Glass Rings */}
              <circle
                cx="250"
                cy="250"
                r="222"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                opacity="0.85"
              />
              <circle
                cx="250"
                cy="250"
                r="218"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="1.5"
                strokeDasharray="8 6"
                opacity="0.45"
              />
              {/* Specular Curved Light Reflection Arc across Glass */}
              <path
                d="M 65 240 A 185 185 0 0 1 435 240 A 185 105 0 0 0 65 240 Z"
                fill="url(#tailsGlassGloss)"
              />
              {/* Official Nirvana Emblem with scaleX(-1) */}
              <image
                href="/assets/logo.png"
                xlinkHref="/assets/logo.png"
                x="65"
                y="65"
                width="370"
                height="370"
                preserveAspectRatio="xMidYMid meet"
                filter="url(#emblemShadowTails)"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Synchronized Levitating Ground Shadow */}
      <div
        className="coin-shadow"
        style={{
          width: `${size * 0.72}px`,
        }}
      />

      {/* Spacious Minimalist Caption */}
      {showCaption && (
        <div className="mt-4 text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.08] shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-charcoal">
              3D Nirvana Core
            </span>
          </div>
          <p className="text-[11px] text-charcoal-muted font-medium">
            Autonomous · Zero Telemetry
          </p>
        </div>
      )}
    </div>
  );
}
