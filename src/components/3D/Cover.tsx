"use client";
import * as THREE from "three";
import { useMemo } from "react";
import { useTexture } from "@react-three/drei";

export default function Cover() {

  const texture = useTexture("/textures/cover.jpg");

  const geometry = useMemo(() => {
        const geo = new THREE.BoxGeometry(2, 3, 0.05);
         // Dời geometry sang phải
        geo.translate(1, 0, 0);
        return geo; 
    }, []);

  return (

    <mesh geometry={geometry}>
        <meshStandardMaterial map={texture} />
    </mesh>

  );

}