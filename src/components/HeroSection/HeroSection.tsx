'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLang } from '@/context/LanguageContext';
import { strings } from '@/i18n/strings';
import styles from './HeroSection.module.css';

const titleLetters = Array.from('Dear Tho');

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();

  useEffect(() => {
    if (!contentRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const context = gsap.context(() => {
      gsap.from('[data-intro]', {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });
    }, contentRef);

    return () => context.revert();
  }, []);

  const moveEphemera = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', String((event.clientX - rect.left) / rect.width - 0.5));
    event.currentTarget.style.setProperty('--my', String((event.clientY - rect.top) / rect.height - 0.5));
  };

  const resetEphemera = () => {
    heroRef.current?.style.setProperty('--mx', '0');
    heroRef.current?.style.setProperty('--my', '0');
  };

  return (
    <section
      id="_hero"
      ref={heroRef}
      className={styles.hero}
      onPointerMove={moveEphemera}
      onPointerLeave={resetEphemera}
    >
      <div className={styles.glow} aria-hidden />
      <div className={styles.vignette} aria-hidden />
      <div className={styles.frameOuter} aria-hidden />
      <div className={styles.frameInner} aria-hidden />

      <div className={`${styles.ephemera} ${styles.polaroid}`} aria-hidden>
        <div className={styles.tape} />
        <div className={styles.photo}>
          <Image src="/images/ninh-kieu.jpg" alt="" fill sizes="190px" loading="eager" className={styles.photoImage} />
        </div>
        <span className={styles.photoCaption}>{strings.hero.ninhKieuCaption[lang]}</span>
      </div>

      <div className={`${styles.ephemera} ${styles.postage}`} aria-hidden>
        <div className={styles.postageInner}>
          <div className={styles.postagePhoto}>
            <Image src="/images/tem-can-tho.jpg" alt="" fill sizes="150px" className={styles.postageImage} />
          </div>
          <div className={styles.postageCaption}>
            <span>{strings.hero.binhThuyCaption[lang]}</span>
            <span>{strings.hero.country[lang]}</span>
          </div>
        </div>
        <div className={styles.postmark}>
          <span>{strings.hero.postmark[lang]}</span>
          <i />
          <span>16 · 07 · 26</span>
        </div>
      </div>

      <div className={`${styles.ephemera} ${styles.thoCard}`} aria-hidden>
        <div className={styles.thoPhoto}>
          <Image
            src="/images/cho-noi-cai-rang.jpg"
            alt=""
            fill
            sizes="160px"
            className={styles.thoPhotoImage}
          />
        </div>
        <span>{strings.hero.floatingMarketCaption[lang]}</span>
      </div>

      <div className={`${styles.ephemera} ${styles.ticket}`} aria-hidden>
        <div>
          <small>{strings.hero.ticketLabel[lang]}</small>
          <span>{strings.hero.ticketCopy[lang]}</span>
        </div>
        <b>Nº 001</b>
      </div>

      <i className={`${styles.speck} ${styles.speckOne}`} aria-hidden />
      <i className={`${styles.speck} ${styles.speckTwo}`} aria-hidden />
      <i className={`${styles.speck} ${styles.speckThree}`} aria-hidden />
      <i className={`${styles.speck} ${styles.speckFour}`} aria-hidden />

      <div className={styles.content} ref={contentRef}>
        <div className={styles.eyebrow} data-intro>
          <span />
          <p>{strings.hero.eyebrow[lang]}</p>
          <span />
        </div>

        <p className={styles.letter} data-intro>{strings.hero.letter[lang]}</p>

        <h1 className={styles.title} aria-label="Dear Tho" data-intro>
          {titleLetters.map((letter, index) => (
            <span key={`${letter}-${index}`} style={{ '--letter-index': index } as React.CSSProperties}>{letter}</span>
          ))}
        </h1>

        <svg className={styles.flourish} viewBox="0 0 240 26" fill="none" aria-hidden="true" data-intro>
          <path d="M6 16 C 60 6, 120 22, 168 12 S 226 10, 234 14" />
          <path d="M118 20 L 122 16 L 126 20 L 122 24 Z" />
        </svg>

        <p className={styles.tagline} data-intro>{strings.hero.tagline[lang]}</p>

        <div className={styles.actions} data-intro>
          <a className={styles.primaryButton} href="https://forms.gle/LT9nve8Lb1GaCmS76" target="_blank" rel="noreferrer">
            <i />
            <span>{strings.hero.buy[lang]}</span>
            <i />
          </a>
          <a className={styles.secondaryButton} href="#_product">{strings.hero.explore[lang]}</a>
        </div>
      </div>

      <a className={styles.scrollCue} href="#_product">
        <span>{strings.hero.scroll[lang]}</span>
        <i />
      </a>
    </section>
  );
}
