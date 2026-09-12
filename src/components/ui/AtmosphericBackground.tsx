import React from "react";
import Image from "next/image";

// =========================================================================
// 1. CORAL GLOOM — 21st.dev Procedural Gradient (Warm Sand, Coral & Deep Navy)
// =========================================================================
export function CoralGloomBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        containerType: "size",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "-0.8cqmin",
          filter: "blur(0.4cqmin)",
          backgroundColor: "#F7F4EC",
          backgroundImage:
            "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.030'/></svg>\"), radial-gradient(100% 50% at 50% 70%, #fcf5eb 0.0%, #FBF3E7 20.4%, #F4B3C2 41.1%, #E4676B 61.8%, #123A6B 82.5%, rgba(18, 58, 107, 0) 85.3%), radial-gradient(42% 19% at 50% 70%, rgba(252, 247, 239, 0.396) 0%, rgba(251, 243, 231, 0.15400000000000003) 38%, rgba(251, 243, 231, 0) 72%), radial-gradient(53% 29% at 50% 70%, rgba(244, 179, 194, 0.14300000000000002) 0%, rgba(244, 179, 194, 0) 80%)",
          backgroundSize: "120px 120px, auto, auto, auto",
          backgroundBlendMode: "overlay, normal, normal, normal",
        }}
      />
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.03,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-afb8254c">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-afb8254c)" />
      </svg>
    </div>
  );
}

// =========================================================================
// 2. IRIS BLOOM — 21st.dev Procedural Gradient (Periwinkle Blue, Lavender & Blush)
// =========================================================================
export function IrisBloomBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        containerType: "size",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "-0.8cqmin",
          filter: "blur(0.4cqmin)",
          backgroundColor: "#4C6CB3",
          backgroundImage:
            "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.090'/></svg>\"), linear-gradient(160deg, #4C6CB3 0%, #B28FCE 50%, #F4B3C2 100%)",
          backgroundSize: "120px 120px, auto",
          backgroundBlendMode: "overlay, normal",
        }}
      />
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.09,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-fda7e784">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-fda7e784)" />
      </svg>
    </div>
  );
}

// =========================================================================
// 3. EMERALD FOREST — Deep Forest Green into Crisp Mint Gradient
// =========================================================================
export function EmeraldForestBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-[#14532d]">
        <Image
          src="/assets/gradients/bg_emerald_forest.png"
          alt="Emerald Forest Gradient"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-95"
          priority={false}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25" />
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.045,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-emerald">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-emerald)" />
      </svg>
    </div>
  );
}

// =========================================================================
// 4. HONEY AMBER — Warm Apricot, Golden Amber & Cream Velvet Gradient
// =========================================================================
export function HoneyAmberBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-[#E8CCA8]">
        <Image
          src="/assets/gradients/bg_honey_amber.png"
          alt="Honey Amber Gradient"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-95"
          priority={false}
        />
      </div>
      <div className="absolute inset-0 bg-radial-gradient from-white/20 via-transparent to-amber-950/15" />
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.04,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-amber">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-amber)" />
      </svg>
    </div>
  );
}

// =========================================================================
// 5. SKY AURORA — Crystalline Ice Blue & Glacial Mist Atmosphere
// =========================================================================
export function SkyAuroraBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-[#CBE4F9]">
        <Image
          src="/assets/gradients/bg_sky_aurora.jpg"
          alt="Sky Aurora Atmosphere"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-95"
          priority={false}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-sky-900/10 via-transparent to-white/30" />
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.05,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-sky">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-sky)" />
      </svg>
    </div>
  );
}

// =========================================================================
// 6. SUNSET PLUM — Deep Midnight Plum, Crimson Magenta & Solar Gold Glow
// =========================================================================
export function SunsetPlumBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-[#361024]">
        <Image
          src="/assets/gradients/bg_sunset_plum.png"
          alt="Sunset Plum Gradient"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-95"
          priority={false}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40" />
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.06,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-sunset">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-sunset)" />
      </svg>
    </div>
  );
}

// =========================================================================
// 7. SAGE MATCHA — Serene Celadon, Matcha Mint & Soft Morning Mist
// =========================================================================
export function SageMatchaBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-[#DAE8D5]">
        <Image
          src="/assets/gradients/bg_sage_matcha.png"
          alt="Sage Matcha Gradient"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-95"
          priority={false}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-emerald-950/10" />
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.04,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-sage">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.82"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-sage)" />
      </svg>
    </div>
  );
}

// =========================================================================
// UNIFIED SECTION WRAPPER WITH AUTOMATIC BACKDROP & CONTRAST THEME
// =========================================================================
export type AtmosphereTheme =
  | "coral-gloom"
  | "iris-bloom"
  | "emerald-forest"
  | "honey-amber"
  | "sky-aurora"
  | "sunset-plum"
  | "sage-matcha";

interface AtmosphericSectionProps {
  theme: AtmosphereTheme;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function AtmosphericSection({
  theme,
  children,
  className = "",
  id,
}: AtmosphericSectionProps) {
  // Determine if this backdrop is predominantly light (needs dark text) or dark/vibrant (needs white text)
  const isLight =
    theme === "coral-gloom" ||
    theme === "honey-amber" ||
    theme === "sage-matcha" ||
    theme === "sky-aurora";

  const surfaceClass = isLight ? "theme-light-surface" : "theme-dark-surface";

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${surfaceClass} ${className}`}
    >
      {/* Background Layer */}
      {theme === "coral-gloom" && <CoralGloomBackground />}
      {theme === "iris-bloom" && <IrisBloomBackground />}
      {theme === "emerald-forest" && <EmeraldForestBackground />}
      {theme === "honey-amber" && <HoneyAmberBackground />}
      {theme === "sky-aurora" && <SkyAuroraBackground />}
      {theme === "sunset-plum" && <SunsetPlumBackground />}
      {theme === "sage-matcha" && <SageMatchaBackground />}

      {/* Content Layer */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
