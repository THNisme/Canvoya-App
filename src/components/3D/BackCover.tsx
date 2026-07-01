"use client";

import { useTexture } from "@react-three/drei";

export default function BackCover(){

    const texture=useTexture("/textures/back.jpg");

    return(

        <mesh>

        <boxGeometry args={[2,3,0.05]}/>

        <meshStandardMaterial map={texture}/>

        </mesh>

    );

}