"use client";

import { useMemo } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Cover({
  texture,
  backTexture,
  side = "right",
}: {
  texture: string;
  backTexture: string;
  side?: "left" | "right";
}) {
  const rawFrontMap = useTexture(texture);
  const rawBackMap = useTexture(backTexture);
  const frontMap = useMemo(() => {
    const cloned = rawFrontMap.clone();
    cloned.colorSpace = THREE.SRGBColorSpace;
    cloned.needsUpdate = true;
    return cloned;
  }, [rawFrontMap]);
  const backMap = useMemo(() => {
    const cloned = rawBackMap.clone();
    cloned.colorSpace = THREE.SRGBColorSpace;
    cloned.needsUpdate = true;
    return cloned;
  }, [rawBackMap]);

  return (
    <group>
      <mesh position={[side === "left" ? -1 : 1, 0, 0]}>
        <boxGeometry args={[2, 2.7, 0.05]} />
        <meshStandardMaterial color="#d7c19e" roughness={0.9} />
      </mesh>
      <mesh position={[side === "left" ? -1 : 1, 0, 0.026]}>
        <planeGeometry args={[2, 2.7]} />
        <meshStandardMaterial map={frontMap} roughness={0.9} side={THREE.FrontSide} />
      </mesh>
      <mesh
        position={[side === "left" ? -1 : 1, 0, -0.026]}
        rotation-y={Math.PI}
      >
        <planeGeometry args={[2, 2.7]} />
        <meshStandardMaterial map={backMap} roughness={0.9} side={THREE.FrontSide} />
      </mesh>
    </group>
  );
}
