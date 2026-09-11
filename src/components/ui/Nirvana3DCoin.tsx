"use client";

import React from "react";
import Image from "next/image";

interface Nirvana3DCoinProps {
  size?: number; // size in px
  className?: string;
}

export default function Nirvana3DCoin({
  size = 150,
  className = "",
}: Nirvana3DCoinProps) {
  return (
    <div
      className={`coin-stage ${className}`}
      style={{
        ["--coin-size" as any]: `${size}px`,
      }}
    >
      <div
        className="coin-wrapper"
        style={{ width: `${size + 10}px`, height: `${size + 10}px` }}
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
            <div className="coin-face">
              <Image
                src="/assets/logo.png"
                alt="Nirvana Emblem Heads"
                width={140}
                height={140}
                unoptimized
                priority
                className="coin-emblem"
              />
            </div>
          </div>

          {/* Tails: Back Face with Official Nirvana Emblem (scaleX(-1)) */}
          <div className="side tails">
            <div className="coin-face">
              <Image
                src="/assets/logo.png"
                alt="Nirvana Emblem Tails"
                width={140}
                height={140}
                unoptimized
                priority
                className="coin-emblem svg_back"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Synchronized 3D Shadow */}
      <div
        className="coin-shadow"
        style={{ width: `${size * 0.7}px` }}
      />
    </div>
  );
}
