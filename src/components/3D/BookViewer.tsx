"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Book, { BOOK_STEPS } from "./Book";
import styles from "./BookViewer.module.css";

export default function BookViewer() {
  const [step, setStep] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const locked = useRef(false);
  const unlockTimer = useRef<number | undefined>(undefined);
  const next = () => {
    if (locked.current) return;
    locked.current = true;
    setStep((current) => (current + 1) % BOOK_STEPS);
    window.clearTimeout(unlockTimer.current);
    unlockTimer.current = window.setTimeout(() => {
      locked.current = false;
    }, reducedMotion ? 0 : 1000);
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => {
      media.removeEventListener("change", update);
      window.clearTimeout(unlockTimer.current);
    };
  }, []);

  return (
    <div
      className={styles.canvas}
      role="button"
      tabIndex={0}
      aria-label="Sách Dear Tho 3D. Nhấn Enter để lật trang."
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          next();
        }
      }}
    >
      <Canvas camera={{ position: [-2, 0, 7], fov: 40 }} dpr={[1, 1.5]} flat>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <Book step={step} onNext={next} reducedMotion={reducedMotion} />
        <OrbitControls zoomToCursor minDistance={1.2} maxDistance={12} />
      </Canvas>
    </div>
  );
}
