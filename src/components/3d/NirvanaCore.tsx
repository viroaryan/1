"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface NirvanaCoreProps {
  className?: string;
  size?: number;
  interactive?: boolean;
}

export default function NirvanaCore({
  className = "",
  size = 400,
  interactive = true,
}: NirvanaCoreProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // Three.js Scene Setup
    const width = container.clientWidth || size;
    const height = container.clientHeight || size;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.5;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      container.appendChild(renderer.domElement);
    } catch {
      setHasWebGL(false);
      return;
    }

    // Studio Lighting: Calm Computing Palette
    const ambientLight = new THREE.AmbientLight(0xfff7f0, 1.8);
    scene.add(ambientLight);

    // Warm peach key light
    const peachLight = new THREE.PointLight(0xf7b05b, 3.5, 50);
    peachLight.position.set(5, 5, 5);
    scene.add(peachLight);

    // Soft lavender rim light
    const lavenderLight = new THREE.PointLight(0xb8a9c9, 2.8, 50);
    lavenderLight.position.set(-5, -4, -2);
    scene.add(lavenderLight);

    // Coral accent highlight
    const coralLight = new THREE.PointLight(0xf26522, 2.2, 30);
    coralLight.position.set(0, 4, -4);
    scene.add(coralLight);

    // Geometry: Organic Torus / Portal Structure ("Nirvana Core")
    const group = new THREE.Group();
    scene.add(group);

    // Outer Translucent Glass Ring
    const outerGeo = new THREE.TorusGeometry(2.0, 0.22, 48, 120);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.88,
      opacity: 0.95,
      transparent: true,
      roughness: 0.12,
      metalness: 0.05,
      ior: 1.45,
      thickness: 0.9,
      specularIntensity: 0.8,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
    });
    const outerMesh = new THREE.Mesh(outerGeo, glassMat);
    group.add(outerMesh);

    // Inner Radiant Core (Converging Light Portal)
    const innerGeo = new THREE.TorusGeometry(1.4, 0.08, 32, 100);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xf26522,
      emissive: 0xf7a361,
      emissiveIntensity: 0.35,
      roughness: 0.3,
      metalness: 0.1,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    innerMesh.rotation.x = Math.PI / 4;
    group.add(innerMesh);

    // Core Center Crystal / Diamond
    const centerGeo = new THREE.OctahedronGeometry(0.55, 0);
    const centerMat = new THREE.MeshPhysicalMaterial({
      color: 0xfff0e6,
      transmission: 0.82,
      opacity: 0.9,
      transparent: true,
      roughness: 0.18,
      ior: 1.6,
      thickness: 1.2,
      emissive: 0xf26522,
      emissiveIntensity: 0.15,
    });
    const centerMesh = new THREE.Mesh(centerGeo, centerMat);
    group.add(centerMesh);

    // Subtle floating particles inside core
    const particleCount = 28;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.0 + Math.random() * 0.9;
      particlePositions[i] = Math.cos(angle) * radius;
      particlePositions[i + 1] = Math.sin(angle) * radius;
      particlePositions[i + 2] = (Math.random() - 0.5) * 0.6;
    }
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0xf7b05b,
      size: 0.06,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // Interaction & Animation Loop
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.2;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 1.5;
      mouseY = y * 1.5;
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle organic rotation
      outerMesh.rotation.z = elapsedTime * 0.15;
      outerMesh.rotation.x = Math.sin(elapsedTime * 0.2) * 0.15 + 0.3;

      innerMesh.rotation.y = -elapsedTime * 0.25;
      innerMesh.rotation.z = Math.cos(elapsedTime * 0.18) * 0.2;

      centerMesh.rotation.x = elapsedTime * 0.3;
      centerMesh.rotation.y = elapsedTime * 0.4;

      particles.rotation.z = elapsedTime * 0.08;

      // Smooth camera / group follow
      targetRotationY += (mouseX - targetRotationY) * 0.04;
      targetRotationX += (-mouseY + 0.2 - targetRotationX) * 0.04;
      group.rotation.y = targetRotationY;
      group.rotation.x = targetRotationX;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      resizeObserver.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      outerGeo.dispose();
      glassMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      centerGeo.dispose();
      centerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [interactive, size]);

  if (!hasWebGL) {
    // Lightweight Calm Computing CSS Fallback
    return (
      <div
        className={`relative flex items-center justify-center ${className}`}
        style={{ width: size, height: size }}
      >
        <div className="absolute inset-0 rounded-full atmospheric-bloom animate-pulse" />
        <div className="w-48 h-48 rounded-full border border-black/[0.08] liquid-glass flex items-center justify-center p-6 shadow-glow">
          <div className="w-28 h-28 rounded-full border border-brand/40 bg-brand/5 flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-tr from-brand to-calm-peach rounded-xl rotate-45 opacity-80" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative cursor-grab active:cursor-grabbing ${className}`}
      style={{ width: "100%", height: "100%", minHeight: size }}
      aria-label="Interactive 3D Nirvana Core Portal"
      role="img"
    />
  );
}
