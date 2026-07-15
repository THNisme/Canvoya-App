'use client';

import { useEffect, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  selector?: string;
  y?: number;
  stagger?: number;
  start?: string;
}

export function useScrollReveal(
  containerRef: RefObject<HTMLElement | null>,
  options: ScrollRevealOptions = {}
) {
  const {
    selector = '[data-reveal]',
    y = 40,
    stagger = 0.12,
    start = 'top 80%',
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        reduced: '(prefers-reduced-motion: reduce)',
        normal: '(prefers-reduced-motion: no-preference)',
      },
      (context) => {
        const { reduced } = context.conditions as { reduced: boolean };
        const targets = container.querySelectorAll(selector);

        if (reduced || targets.length === 0) {
          gsap.set(targets, { opacity: 1, y: 0 });
          return;
        }

        gsap.from(targets, {
          y,
          opacity: 0,
          stagger,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start,
          },
        });
      }
    );

    return () => {
      mm.revert();
    };
  }, [containerRef, selector, y, stagger, start]);
}
