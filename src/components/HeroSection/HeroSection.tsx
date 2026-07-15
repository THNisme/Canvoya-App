'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { HiShoppingBag } from 'react-icons/hi2';
import styles from './HeroSection.module.css';
import { useCanRender3D } from '@/hooks/useCanRender3D';

const HeroParticles = dynamic(() => import('../3D/HeroParticles'), {
  ssr: false,
});

export default function HeroSection() {
  const canRender3D = useCanRender3D();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const targets = container.querySelectorAll('[data-intro]');

    if (prefersReducedMotion) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(targets, {
      y: 24,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToProduct = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    document
      .getElementById('_product')
      ?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <section id="_hero" className={styles.hero}>
      {canRender3D && (
        <div className={styles.particles}>
          <HeroParticles />
        </div>
      )}

      {/* Overlay */}
      <div className={styles.overlay}></div>

      <Container fluid className={styles.content} ref={contentRef}>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <p className={styles.subtitle} data-intro>
              Canvoya presents
            </p>

            <h1 className={styles.title} data-intro>
              Dear Tho
            </h1>

            {/* Decorative Divider */}
            <div className={styles.divider} data-intro>
              <span className={styles.line}></span>
              <span className={styles.diamond}></span>
              <span className={styles.line}></span>
            </div>

            <p className={styles.description} data-intro>
              Chạm vào trang sách, chạm lại chuyến đi.
            </p>

            <div className={styles.actions} data-intro>
              <button
                type="button"
                className={styles.primaryBtn}
                onClick={scrollToProduct}
              >
                Khám phá cuốn sách
              </button>
              <a
                className={styles.secondaryBtn}
                href="https://forms.gle/LT9nve8Lb1GaCmS76"
              >
                <span>Mua ngay</span>
                <HiShoppingBag />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
