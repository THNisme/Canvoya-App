"use client";

import { useState } from "react";
import { animated, useSpring } from "@react-spring/three";

import Cover from "./Cover";
import Page from "./Page";
import BackCover from "./BackCover";

export default function Book() {

    const COVER_THICKNESS = 0.04;
    const PAGE_THICKNESS = 0.02;
    const GAP = 0.02;
    const BACK_Z = 0;
    const PAGE_Z = COVER_THICKNESS / 2 + PAGE_THICKNESS / 2 + GAP;
    const COVER_Z = PAGE_Z + PAGE_THICKNESS / 2 + COVER_THICKNESS / 2 + GAP;
    const COVER_OPEN_ANGLE = -Math.PI - 0.2;
    const PAGE_OPEN_ANGLE = -Math.PI * 0.7; // ~144°

    const [step, setStep] = useState(0);

    // Animation của bìa
    const coverSpring = useSpring({
        rotationY: step >= 1 ? COVER_OPEN_ANGLE : 0,
        config: {
            mass: 1, 
            tension: 100, 
            friction: 30, 
        },
    });

    // Animation của trang
    const pageSpring = useSpring({
        rotationY: step >= 2 ? PAGE_OPEN_ANGLE : 0,
        config: {
            mass: 0.2, 
            tension: 180, 
            friction: 30, 
        }, 
    });

    const handleClick = () => {
        if (step < 2) {
            setStep(step + 1);
        } else {
            setStep(0);
        }
    };

    return (
        <group onClick={handleClick}>
            <mesh position={[-1.05,0,(PAGE_Z/2)+0.02]}>

                <boxGeometry
                    args={[
                        0.08,
                        3,
                        COVER_Z + COVER_THICKNESS
                    ]}
                />

                <meshStandardMaterial
                    color="#e8d3c0"
                />

            </mesh>
            {/* FRONT COVER */}

            <animated.group
                position={[-1,0,COVER_Z]}
                rotation-y={coverSpring.rotationY}
            >
                <Cover/>
            </animated.group>

            {/* PAGE */}

            <animated.group
                position={[-1,0,PAGE_Z]}
                rotation-y={pageSpring.rotationY}
            >
                <Page/>
            </animated.group>

            {/* BACK COVER */}

            <group position={[0,0,BACK_Z]}>
                <BackCover />
            </group>

        </group>

    );

}

