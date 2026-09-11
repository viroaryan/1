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
          {/* Heads: Front Face with Official Nirvana Emblem */}
          <div className="side heads">
            <svg
              viewBox="0 0 500 500"
              className="coin-svg"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <radialGradient id="headsGoldGrad" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#fff3c4" />
                  <stop offset="35%" stopColor="#faa504" />
                  <stop offset="75%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#8c4a00" />
                </radialGradient>
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
                    floodColor="#451a03"
                    floodOpacity="0.45"
                  />
                </filter>
              </defs>
              {/* Outer Golden Minted Base */}
              <circle
                cx="250"
                cy="250"
                r="242"
                fill="url(#headsGoldGrad)"
                stroke="#b45309"
                strokeWidth="10"
              />
              {/* Inner Decorative Dashed Currency Ring */}
              <circle
                cx="250"
                cy="250"
                r="220"
                fill="none"
                stroke="#78350f"
                strokeWidth="3.5"
                strokeDasharray="10 8"
                opacity="0.5"
              />
              {/* Subtle Inner Highlight Disc */}
              <circle
                cx="250"
                cy="250"
                r="200"
                fill="#ffffff"
                opacity="0.15"
              />
              {/* Official Nirvana Emblem */}
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
                <radialGradient id="tailsGoldGrad" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#fff3c4" />
                  <stop offset="35%" stopColor="#faa504" />
                  <stop offset="75%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#8c4a00" />
                </radialGradient>
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
                    floodColor="#451a03"
                    floodOpacity="0.45"
                  />
                </filter>
              </defs>
              {/* Outer Golden Minted Base */}
              <circle
                cx="250"
                cy="250"
                r="242"
                fill="url(#tailsGoldGrad)"
                stroke="#b45309"
                strokeWidth="10"
              />
              {/* Inner Decorative Dashed Currency Ring */}
              <circle
                cx="250"
                cy="250"
                r="220"
                fill="none"
                stroke="#78350f"
                strokeWidth="3.5"
                strokeDasharray="10 8"
                opacity="0.5"
              />
              {/* Subtle Inner Highlight Disc */}
              <circle
                cx="250"
                cy="250"
                r="200"
                fill="#ffffff"
                opacity="0.15"
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
