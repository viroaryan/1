import React from "react";
import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}

export default function PhoneMockup({
  src,
  alt,
  caption,
  className = "",
  priority = false,
}: PhoneMockupProps) {
  return (
    <div className={`relative flex flex-col items-center group ${className}`}>
      {/* Outer Phone Hardware Chasis — Solid Static Apple Frame */}
      <div className="relative w-[280px] sm:w-[320px] md:w-[340px] rounded-[48px] p-3 bg-gradient-to-b from-[#EAEAE6] via-[#D8D7D2] to-[#BCBBB5] shadow-[0_20px_50px_-12px_rgba(17,17,25,0.12),0_4px_12px_-2px_rgba(17,17,25,0.04)] border border-white/80">
        {/* Inner Black Bezel */}
        <div className="relative rounded-[40px] overflow-hidden bg-[#111115] p-2 border border-black/40">
          {/* Top Camera Punch Hole & Speaker */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#050508] border border-white/10 shadow-inner flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1a2b40]/80" />
            </div>
          </div>

          {/* Screen Display Area */}
          <div className="relative w-full aspect-[9/19.5] rounded-[32px] overflow-hidden bg-white shadow-inner">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 300px, 360px"
              className="object-cover object-top"
              priority={priority}
            />

            {/* Subtle glass reflection highlight across the glass screen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent pointer-events-none" />
          </div>

          {/* Bottom Home Indicator Gesture Bar */}
          <div className="w-full flex justify-center py-1.5">
            <div className="w-28 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>

      {caption && (
        <p className="mt-4 text-xs font-mono text-charcoal-muted text-center max-w-xs">
          {caption}
        </p>
      )}
    </div>
  );
}
