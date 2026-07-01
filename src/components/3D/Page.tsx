"use client";
import * as THREE from "three";
import { useMemo } from "react";
import { useTexture } from "@react-three/drei";

interface PageProps {
  position?: [number, number, number];
}

export default function Page({
    position = [0, 0, 0]
}: PageProps) {

    const texture = useTexture("/textures/page-filled.jpg");

    const geometry = useMemo(()=>{
        const geo = new THREE.BoxGeometry(2,3,0.02);
        geo.translate(1,0,0);
        return geo; 
    },[]);

    return (

        <mesh position={position} geometry={geometry}>
            <meshStandardMaterial map={texture}/>
        </mesh>

    );

}