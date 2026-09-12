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
      {/* 
        Heavy Bulldog 3D Smartphone Device Mockup (by mobinkakei on Uiverse)
        Enhanced with responsive dimensions and high-fidelity screen clipping
      */}
      <div
        className="relative flex flex-col justify-start items-center h-[460px] w-[230px] sm:h-[480px] sm:w-[240px] border-4 border-black rounded-[28px] bg-gray-50 overflow-visible"
        style={{
          boxShadow: "7px 7px 3px 8px rgb(209, 218, 218)",
        }}
      >
        {/* Top Speaker / Dynamic Notch Bar */}
        <span className="border border-black bg-black w-24 h-2.5 rounded-br-xl rounded-bl-xl z-20 shrink-0" />

        {/* Side Hardware Button 1 (Top Right - Power/Volume) */}
        <span className="absolute -right-[9px] top-20 border-4 border-black h-9 rounded-md bg-black z-10" />

        {/* Side Hardware Button 2 (Bottom Right - Volume Down / Action) */}
        <span className="absolute -right-[9px] bottom-48 border-4 border-black h-12 rounded-md bg-black z-10" />

        {/* Screen Display Container — Perfectly Fitted Inside Bezel */}
        <div className="relative w-full flex-1 rounded-[22px] overflow-hidden bg-[#111116] m-1 mb-2">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 240px, 280px"
            className="object-cover object-top"
            priority={priority}
          />

          {/* Subtle Screen Reflection Glare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent pointer-events-none" />
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
