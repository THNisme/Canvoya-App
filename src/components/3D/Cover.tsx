"use client";
import * as THREE from "three";
import { useMemo } from "react";
import { useTexture } from "@react-three/drei";

export default function Cover() {

  const texture = useTexture("/textures/cover.png");
  const frontTexture = useTexture("/textures/cover.png");
  const backTexture = useTexture("/textures/page-blank.jpg");

  const geometry = useMemo(() => {
        const geo = new THREE.BoxGeometry(2, 3, 0.05);
         // Dời geometry sang phải
        geo.translate(1, 0, 0);
        return geo; 
    }, []);

  const geometryTwoFace = useMemo(()=>{
      const geo = new THREE.PlaneGeometry(2, 3, 40, 40);
      geo.translate(1,0,0);
      return geo; 
  },[]);

  return (

    // <mesh geometry={geometry}>
    //     <meshStandardMaterial map={texture} />
    // </mesh>

    <group>
          <mesh
              geometry={geometryTwoFace}
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