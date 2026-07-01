"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Book from "./Book";

export default function BookViewer() {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
      }}
    >
      <Canvas
        camera={{
          position: [-2, 0, 7],
          fov: 40,
        }}
      >
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

          <Book />

        <OrbitControls />
      </Canvas>
    </div>
  );
}