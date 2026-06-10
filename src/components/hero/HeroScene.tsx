"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import type { Mesh, Points as ThreePoints } from "three";

type PointerRef = React.RefObject<{ x: number; y: number }>;

/** Tracks the normalized pointer position (-1..1) — also fires for touch drags. */
function useGlobalPointer(): PointerRef {
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return pointer;
}

/** Glowing, distorting wireframe icosahedron that leans toward the pointer. */
function DistortBlob({ pointer, radius = 1.8 }: { pointer: PointerRef; radius?: number }) {
  const mesh = useRef<Mesh>(null);
  useFrame((state) => {
    const m = mesh.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    const p = pointer.current;
    m.rotation.y = t * 0.12 + p.x * 0.45;
    m.rotation.x = Math.sin(t * 0.3) * 0.15 + p.y * 0.3;
  });
  return (
    <Icosahedron ref={mesh} args={[radius, 5]} position={[0, 0.25, 0]}>
      <MeshDistortMaterial
        color="#7c3aed"
        emissive="#5b21b6"
        emissiveIntensity={0.4}
        roughness={0.25}
        metalness={0.6}
        distort={0.45}
        speed={1.8}
        wireframe
      />
    </Icosahedron>
  );
}

/** Slowly drifting particle shell that parallaxes with the pointer. */
function Particles({ pointer, count = 700 }: { pointer: PointerRef; count?: number }) {
  const ref = useRef<ThreePoints>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 3.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    const pts = ref.current;
    if (!pts) return;
    pts.rotation.y += delta * 0.04 + pointer.current.x * delta * 0.12;
    pts.rotation.x += delta * 0.01 + pointer.current.y * delta * 0.08;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}

export default function HeroScene({ lowPower = false }: { lowPower?: boolean }) {
  const pointer = useGlobalPointer();
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  // Pause the render loop (and all GPU work) whenever the hero is off-screen.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Lighter footprint on phones / coarse-pointer devices.
  const particleCount = lowPower ? 280 : 700;
  const blobRadius = lowPower ? 1.45 : 1.8;
  const dpr: [number, number] = lowPower ? [1, 1.3] : [1, 1.5];

  return (
    <motion.div
      ref={containerRef}
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, delay: 0.2 }}
      className="absolute inset-0 pointer-events-none"
    >
      <Canvas
        frameloop={active ? "always" : "never"}
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={dpr}
        gl={{
          alpha: true,
          antialias: !lowPower,
          powerPreference: lowPower ? "low-power" : "high-performance",
        }}
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[6, 6, 6]} intensity={45} color="#a78bfa" />
        <pointLight position={[-6, -4, 2]} intensity={28} color="#7c3aed" />
        <Suspense fallback={null}>
          <DistortBlob pointer={pointer} radius={blobRadius} />
          <Particles pointer={pointer} count={particleCount} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
