"use client";

import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/three";
import Cover from "./Cover";
import Page from "./Page";

const SPREADS = [
  ["/book-pages/02-left.jpg", "/book-pages/03-right.jpg"],
  ["/book-pages/04-left.jpg", "/book-pages/05-right.jpg"],
  ["/book-pages/06-left.jpg", "/book-pages/07-right.jpg"],
  ["/book-pages/08-left.jpg", "/book-pages/09-right.jpg"],
  ["/book-pages/10-left.jpg", "/book-pages/11-right.jpg"],
];

export const BOOK_STEPS = SPREADS.length + 2;

export default function Book({
  step,
  onNext,
  reducedMotion,
}: {
  step: number;
  onNext: () => void;
  reducedMotion: boolean;
}) {
  const lastClick = useRef(0);
  const [displayStep, setDisplayStep] = useState(step);
  const [turn, turnApi] = useSpring(() => ({ angle: 0 }));
  const visibleSpread = SPREADS[displayStep - 1];
  const targetSpread = SPREADS[step - 1];
  const animating = step !== displayStep;
  const turningFrontTexture = displayStep === 0
    ? "/book-pages/01-cover.jpg"
    : visibleSpread?.[1];
  const turningBackTexture = targetSpread?.[0] ?? "/book-pages/12-back-cover.jpg";

  useEffect(() => {
    // Reset only once the new step is committed — the turning page is unmounted
    // by then, so the angle snap can't be seen.
    if (step === displayStep) {
      turnApi.set({ angle: 0 });
      return;
    }

    if (step === 0) {
      const frame = requestAnimationFrame(() => setDisplayStep(step));
      return () => cancelAnimationFrame(frame);
    }

    let cancelled = false;
    turnApi.start({
      from: { angle: 0 },
      to: { angle: Math.PI },
      immediate: reducedMotion,
      config: { mass: 0.8, tension: 120, friction: 24 },
      onRest: () => {
        if (cancelled) return;
        setDisplayStep(step);
      },
    });

    return () => { cancelled = true; };
  }, [displayStep, reducedMotion, step, turnApi]);

  return (
    <group
      onClick={(event) => {
        event.stopPropagation();
        if (event.delta > 5) return;
        const now = performance.now();
        if (now - lastClick.current < 300) return;
        lastClick.current = now;
        onNext();
      }}
    >
      {!animating && displayStep === 0 && (
        <Cover
          texture="/book-pages/01-cover.jpg"
          backTexture="/book-pages/12-back-cover.jpg"
        />
      )}

      {!animating && visibleSpread && (
        <group>
          <Page texture={visibleSpread[0]} side="left" />
          <Page texture={visibleSpread[1]} side="right" />
          <group position-z={-0.03}>
            <Cover
              texture="/book-pages/12-back-cover.jpg"
              backTexture="/book-pages/01-cover.jpg"
              side="left"
            />
            <Cover
              texture="/book-pages/01-cover.jpg"
              backTexture="/book-pages/12-back-cover.jpg"
            />
          </group>
        </group>
      )}

      {!animating && displayStep === BOOK_STEPS - 1 && (
        <Cover
          texture="/book-pages/12-back-cover.jpg"
          backTexture="/book-pages/01-cover.jpg"
          side="left"
        />
      )}

      {animating && visibleSpread && (
        <Page texture={visibleSpread[0]} side="left" />
      )}

      {animating && targetSpread && (
        <Page texture={targetSpread[1]} side="right" />
      )}

      {animating && turningFrontTexture && (
        <animated.group
          position-z={turn.angle.to(
            [0, Math.PI / 2, Math.PI],
            [0.004, 0.05, 0.004],
          )}
          rotation-y={turn.angle.to((value) => -value)}
        >
          <Page
            texture={turningFrontTexture}
            backTexture={turningBackTexture}
            side="right"
            tilt={turn.angle.to(
              [0, Math.PI / 2, Math.PI],
              [0, 0.025, 0],
            )}
            bend={turn.angle.to(
              [0, Math.PI / 2, Math.PI],
              [0, 1, 0],
            )}
          />
        </animated.group>
      )}

      {(visibleSpread || targetSpread) && (
        <group>
          <mesh position={[0, 0, -0.014]}>
            <boxGeometry args={[0.025, 2.7, 0.025]} />
            <meshStandardMaterial color="#bda681" roughness={1} />
          </mesh>
          <mesh position={[0, 0, 0.008]}>
            <planeGeometry args={[0.045, 2.62]} />
            <meshBasicMaterial
              color="#59432f"
              transparent
              opacity={0.58}
              depthWrite={false}
            />
          </mesh>
        </group>
      )}
    </group>
  );
}
