'use client';

import { useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './AboutSection.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import { team } from '@/data/team';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section id="_about" className={styles.section} ref={sectionRef}>
      <Container>
        <SectionHeader
          eyebrow="Về chúng tôi"
          title="Đội ngũ đứng sau Dear Tho"
          description="The six people behind every page"
        />

        <Row className="g-4">
          {team.map((member) => (
            <Col lg={4} md={6} key={member.id}>
              <Card className={styles.card} data-reveal>
                <Card.Body>
                  <div
                    className={styles.avatar}
                    style={{
                      background: `linear-gradient(150deg, color-mix(in srgb, ${member.accentColor} 85%, white), ${member.accentColor})`,
                    }}
                  >
                    {member.initials}
                  </div>

                  <Card.Title className={styles.name}>
                    {member.name}
                  </Card.Title>

                  <small className={styles.role}>{member.role}</small>

                  <Card.Text className={styles.quote}>
                    &ldquo;{member.quote}&rdquo;
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
