"use client";

import React from "react";

interface Nirvana3DCoinProps {
  size?: number; // size in px (default 180)
  className?: string;
  showCaption?: boolean;
}

export default function Nirvana3DCoin({
  size = 180,
  className = "",
  showCaption = true,
}: Nirvana3DCoinProps) {
  // Natural coin thickness (~16px for 180px diameter, exact 1:11 ratio)
  const thickness = Math.max(14, Math.round(size * 0.088));
  const halfThickness = thickness / 2;

  // 10 tightly spaced concentric edge slices (spaced ~1.5px apart)
  // These form an authentic, perfectly round, solid 3D cylinder edge at all rotation angles
  const sliceCount = 10;
  const sliceOffsets = Array.from({ length: sliceCount }, (_, i) => {
    const step = (thickness - 1.5) / (sliceCount - 1);
    return -halfThickness + 0.75 + i * step;
  });

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
          className="coin-cylinder"
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
          title="Nirvana 3D Rotating Token"
        >
          {/* Seamless Metallic-Glass Cylindrical Edge Slices */}
          {sliceOffsets.map((offset, idx) => (
            <div
              key={idx}
              className="coin-edge-slice"
              style={{
                transform: `translateZ(${offset.toFixed(2)}px)`,
              }}
            />
          ))}

          {/* Heads: Front Minted Crystal Glass Face */}
          <div
            className="coin-disc coin-heads"
            style={{
              transform: `translateZ(${halfThickness.toFixed(2)}px)`,
            }}
          >
            <svg
              viewBox="0 0 500 500"
              className="coin-svg"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                {/* Titanium/Platinum Diamond-Cut Metallic Rim */}
                <linearGradient id="metalRimHeads" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="20%" stopColor="#e2e8f0" />
                  <stop offset="45%" stopColor="#94a3b8" />
                  <stop offset="70%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
                {/* Frosted Crystal Sapphire Glass Face */}
                <radialGradient id="glassFaceHeads" cx="30%" cy="25%" r="75%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
                  <stop offset="35%" stopColor="#f8fafc" stopOpacity="0.94" />
                  <stop offset="70%" stopColor="#e2e8f0" stopOpacity="0.88" />
                  <stop offset="95%" stopColor="#cbd5e1" stopOpacity="0.92" />
                  <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.98" />
                </radialGradient>
                {/* Watch Crystal Specular Gloss Arc */}
                <linearGradient id="glassGlossHeads" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
                  <stop offset="35%" stopColor="#ffffff" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
                {/* Embossed Logo Drop Shadow */}
                <filter id="logoShadowHeads" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#ea580c" floodOpacity="0.3" />
                  <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.1" />
                </filter>
              </defs>
              {/* Outer Polished Metallic Bevel */}
              <circle cx="250" cy="250" r="244" fill="url(#metalRimHeads)" stroke="#cbd5e1" strokeWidth="2" />
              {/* Frosted Crystal Glass Disc */}
              <circle cx="250" cy="250" r="236" fill="url(#glassFaceHeads)" stroke="#ffffff" strokeWidth="2.5" />
              {/* Inner Concentric Frosted Rings */}
              <circle cx="250" cy="250" r="218" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity="0.85" />
              <circle cx="250" cy="250" r="214" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.45" />
              {/* Curved Glass Specular Highlight Arc */}
              <path d="M 65 240 A 185 185 0 0 1 435 240 A 185 105 0 0 0 65 240 Z" fill="url(#glassGlossHeads)" />
              {/* Official Nirvana Emblem */}
              <image
                href="/assets/logo.png"
                xlinkHref="/assets/logo.png"
                x="65"
                y="65"
                width="370"
                height="370"
                preserveAspectRatio="xMidYMid meet"
                filter="url(#logoShadowHeads)"
              />
            </svg>
          </div>

          {/* Tails: Back Minted Crystal Glass Face */}
          <div
            className="coin-disc coin-tails"
            style={{
              transform: `translateZ(${-halfThickness.toFixed(2)}px) rotateY(180deg)`,
            }}
          >
            <svg
              viewBox="0 0 500 500"
              className="coin-svg"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                {/* Titanium/Platinum Diamond-Cut Metallic Rim */}
                <linearGradient id="metalRimTails" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="20%" stopColor="#e2e8f0" />
                  <stop offset="45%" stopColor="#94a3b8" />
                  <stop offset="70%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
                {/* Frosted Crystal Sapphire Glass Face */}
                <radialGradient id="glassFaceTails" cx="30%" cy="25%" r="75%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
                  <stop offset="35%" stopColor="#f8fafc" stopOpacity="0.94" />
                  <stop offset="70%" stopColor="#e2e8f0" stopOpacity="0.88" />
                  <stop offset="95%" stopColor="#cbd5e1" stopOpacity="0.92" />
                  <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.98" />
                </radialGradient>
                {/* Watch Crystal Specular Gloss Arc */}
                <linearGradient id="glassGlossTails" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
                  <stop offset="35%" stopColor="#ffffff" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
                {/* Embossed Logo Drop Shadow */}
                <filter id="logoShadowTails" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#ea580c" floodOpacity="0.3" />
                  <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.1" />
                </filter>
              </defs>
              {/* Outer Polished Metallic Bevel */}
              <circle cx="250" cy="250" r="244" fill="url(#metalRimTails)" stroke="#cbd5e1" strokeWidth="2" />
              {/* Frosted Crystal Glass Disc */}
              <circle cx="250" cy="250" r="236" fill="url(#glassFaceTails)" stroke="#ffffff" strokeWidth="2.5" />
              {/* Inner Concentric Frosted Rings */}
              <circle cx="250" cy="250" r="218" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity="0.85" />
              <circle cx="250" cy="250" r="214" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.45" />
              {/* Curved Glass Specular Highlight Arc */}
              <path d="M 65 240 A 185 185 0 0 1 435 240 A 185 105 0 0 0 65 240 Z" fill="url(#glassGlossTails)" />
              {/* Official Nirvana Emblem (Right-Side Up via rotateY(180deg)) */}
              <image
                href="/assets/logo.png"
                xlinkHref="/assets/logo.png"
                x="65"
                y="65"
                width="370"
                height="370"
                preserveAspectRatio="xMidYMid meet"
                filter="url(#logoShadowTails)"
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
