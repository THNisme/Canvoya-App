'use client';

import { useRef, type CSSProperties } from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import styles from './LandmarkSection.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import { landmarks } from '@/data/landmarks';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLang } from '@/context/LanguageContext';
import { strings } from '@/i18n/strings';

export default function LandmarkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);
  const { lang } = useLang();

  return (
    <section id="_destination" className={styles.section} ref={sectionRef}>
      <div className={styles.glow} aria-hidden />

      <Container className={styles.container}>
        <SectionHeader
          variant="dark"
          eyebrow={strings.destination.eyebrow[lang]}
          title={strings.destination.title[lang]}
          description={strings.destination.subtitle[lang]}
        />

        <div className={styles.timeline}>
          <div className={styles.timelineLine} aria-hidden />

          {landmarks.map((item, index) => {
            const isLeft = index % 2 === 0;
            const heading = lang === 'vi' ? item.viName : item.enName;

            return (
              <div
                key={item.viName}
                className={`${styles.row} ${isLeft ? styles.rowLeft : styles.rowRight}`}
                data-reveal
              >
                <div className={styles.photoCol}>
                  <div
                    className={styles.photoCard}
                    style={{ '--tilt': isLeft ? '-2deg' : '2deg' } as CSSProperties}
                  >
                    <div className={styles.stampFrame}>
                      <div
                        className={styles.photo}
                        style={item.photo ? undefined : { '--placeholder-color': item.color } as CSSProperties}
                      >
                        {item.photo ? (
                          <Image
                            src={item.photo}
                            alt={heading}
                            fill
                            sizes="(max-width: 768px) 90vw, 340px"
                            className={styles.photoImg}
                          />
                        ) : (
                          <div className={styles.photoPlaceholder}>
                            <svg
                              className={styles.placeholderIcon}
                              viewBox="0 0 24 24"
                              width="28"
                              height="28"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              aria-hidden
                            >
                              <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
                              <circle cx="9" cy="9" r="1.5" />
                              <path d="m5.5 18 5-5 3 3 2-2 3 3" />
                            </svg>
                            <span>Thả ảnh {item.viName}</span>
                            <small>{lang === 'vi' ? 'hoặc chọn tệp' : 'or browse files'}</small>
                          </div>
                        )}
                      </div>

                      <div className={styles.photoCaption}>
                        <span>{heading.toUpperCase()}</span>
                        <span>{strings.destination.country[lang]}</span>
                      </div>
                    </div>

                    <div className={styles.stampBadge}>
                      <span>CẦN THƠ</span>
                      <span className={styles.stampBadgeLine}></span>
                      <span>2026</span>
                    </div>
                  </div>
                </div>

                <div className={styles.numCol}>
                  <span className={styles.num}>{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className={styles.textCol}>
                  <h3 className={styles.name}>{heading}</h3>
                  <p className={styles.desc}>{item.description[lang]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
