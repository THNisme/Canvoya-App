"use client";
"use client";
import { useMemo } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

interface PageProps {
  position?: [number, number, number];
}

export default function Page({
    position = [0, 0, 0]
}: PageProps) {

    const frontTexture = useTexture("/textures/page-filled.jpg");
    const backTexture = useTexture("/textures/page-blank.jpg")

    const geometry = useMemo(()=>{
        const geo = new THREE.PlaneGeometry(2, 3, 40, 40);
        geo.translate(1,0,0);
        return geo; 
    },[]);

    return (

        <group position={position}>

            <mesh
                geometry={geometry}
                position={[0,0,0.001]}
            >
                <meshStandardMaterial
                    map={frontTexture}
                    side={THREE.FrontSide}
                />
            </mesh>

            <mesh
                geometry={geometry}
                position={[0,0,-0.001]}
                rotation={[0,0,0]}
            >
                <meshStandardMaterial
                    map={backTexture}
                    side={THREE.BackSide}
                />
            </mesh>

        </group>

    );

}