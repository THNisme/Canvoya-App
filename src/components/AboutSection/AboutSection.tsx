'use client';

import { useRef, type CSSProperties } from 'react';
import Image from 'next/image';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './AboutSection.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import { team } from '@/data/team';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLang } from '@/context/LanguageContext';
import { strings } from '@/i18n/strings';

const TILTS = [-2.5, 1.5, -1, 2, -1.5, 2.5];
const TAPE_TILTS = [-4, 3, -2, 4, -3, 2];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);
  const { lang } = useLang();

  return (
    <section id="_about" className={styles.section} ref={sectionRef}>
      <Container>
        <SectionHeader
          eyebrow={strings.about.eyebrow[lang]}
          title={strings.about.title[lang]}
          description={strings.about.subtitle[lang]}
        />

        <Row className="g-4">
          {team.map((member, index) => (
            <Col lg={4} md={6} key={member.id}>
              <Card
                className={styles.card}
                data-reveal
                style={{ '--tilt': `${TILTS[index % TILTS.length]}deg` } as CSSProperties}
              >
                <span
                  className={styles.tape}
                  style={{ '--tapeTilt': `${TAPE_TILTS[index % TAPE_TILTS.length]}deg` } as CSSProperties}
                ></span>

                <Card.Body>
                  <div className={styles.photo}>
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 767px) 90vw, (max-width: 1199px) 45vw, 350px"
                      className={styles.photoImg}
                    />
                  </div>

                  <Card.Title className={styles.name}>
                    {member.name}
                  </Card.Title>

                  <small className={styles.role}>{member.role[lang]}</small>

                  <Card.Text className={styles.quote}>
                    &ldquo;{member.quote[lang]}&rdquo;
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
