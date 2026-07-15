"use client";

import { useEffect, useMemo } from "react";
import { animated } from "@react-spring/three";
import { useTexture } from "@react-three/drei";
import type { FluidValue } from "@react-spring/shared";
import { addFluidObserver, getFluidValue, removeFluidObserver } from "@react-spring/shared";
import * as THREE from "three";

export default function Page({
  texture,
  backTexture,
  side,
  bend,
  tilt,
}: {
  texture: string;
  backTexture?: string;
  side: "left" | "right";
  bend?: FluidValue<number>;
  tilt?: number | FluidValue<number>;
}) {
  const rawMap = useTexture(texture);
  const rawSourceBackMap = useTexture(backTexture ?? texture);

  const map = useMemo(() => {
    const cloned = rawMap.clone();
    cloned.colorSpace = THREE.SRGBColorSpace;
    cloned.needsUpdate = true;
    return cloned;
  }, [rawMap]);

  const sourceBackMap = useMemo(() => {
    const cloned = rawSourceBackMap.clone();
    cloned.colorSpace = THREE.SRGBColorSpace;
    cloned.needsUpdate = true;
    return cloned;
  }, [rawSourceBackMap]);

  const backMap = useMemo(() => {
    if (!backTexture) return null;

    const mirroredMap = sourceBackMap.clone();
    mirroredMap.wrapS = THREE.RepeatWrapping;
    mirroredMap.repeat.x = -1;
    mirroredMap.offset.x = 1;
    mirroredMap.needsUpdate = true;
    return mirroredMap;
  }, [backTexture, sourceBackMap]);
  const geometry = useMemo(() => new THREE.PlaneGeometry(2, 2.7, 24, 1), []);

  useEffect(() => () => backMap?.dispose(), [backMap]);

  useEffect(() => {
    if (!bend) return;
    const position = geometry.attributes.position;
    const listener = addFluidObserver(bend, { eventObserved: (event) => {
      if (event.type !== "change") return;
      const value = getFluidValue(bend);
      for (let index = 0; index < position.count; index++) {
        const x = position.getX(index);
        position.setZ(index, Math.sin(((x + 1) / 2) * Math.PI) * value * 0.16);
      }
      position.needsUpdate = true;
    } });
    return () => removeFluidObserver(bend, listener);
  }, [bend, geometry]);

  return (
    <animated.group
      position={[side === "left" ? -1 : 1, 0, 0]}
      rotation-y={tilt ?? 0}
    >
      <mesh position={[0, 0, 0.002]}>
        <primitive object={geometry} attach="geometry" />
        <meshBasicMaterial map={map} side={THREE.FrontSide} />
      </mesh>
      {backMap && (
        <mesh position={[0, 0, -0.002]}>
          <primitive object={geometry} attach="geometry" />
          <meshBasicMaterial map={backMap} side={THREE.BackSide} />
        </mesh>
      )}
    </animated.group>
  );
}
