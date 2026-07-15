'use client';

import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';
import type { Points as ThreePoints } from 'three';

function ParticleField() {
  const pointsRef = useRef<ThreePoints>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const positions = useMemo(
    () => random.inSphere(new Float32Array(1500 * 3), { radius: 4 }) as Float32Array,
    []
  );

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.x -= delta * 0.015;
    pointsRef.current.rotation.y -= delta * 0.02;
    pointsRef.current.rotation.y +=
      (pointer.current.x * 0.15 - pointsRef.current.rotation.y) * 0.02;
    pointsRef.current.rotation.x +=
      (pointer.current.y * 0.1 - pointsRef.current.rotation.x) * 0.02;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#DEC3A2"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

export default function HeroParticles() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: 'low-power', alpha: true }}
      style={{ position: 'absolute', inset: 0 }}
      onPointerMissed={() => {}}
    >
      <ParticleField />
    </Canvas>
  );
}
