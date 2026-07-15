'use client';

import { useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './LandmarkSection.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import { landmarks } from '@/data/landmarks';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function LandmarkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section id="_destination" className={styles.section} ref={sectionRef}>
      <Container>
        <SectionHeader
          eyebrow="5 Địa danh"
          title="Năm câu chuyện, một hành trình"
          description="Five stories, one journey"
        />

        <Row className="g-4">
          {landmarks.map((item, index) => (
            <Col lg={4} md={6} key={item.title}>
              <Card className={styles.card} data-reveal>
                <div
                  className={styles.imagePlaceholder}
                  style={{
                    background: `linear-gradient(160deg, color-mix(in srgb, ${item.color} 85%, white), ${item.color}, color-mix(in srgb, ${item.color} 70%, black))`,
                  }}
                >
                  <span className={styles.index}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.englishOverlay}>{item.english}</span>
                </div>

                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    {item.title}
                  </Card.Title>

                  <small className={styles.cardSub}>{item.english}</small>

                  <Card.Text className={styles.cardText}>
                    {item.description}
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
