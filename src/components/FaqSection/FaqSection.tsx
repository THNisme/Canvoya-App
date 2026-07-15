'use client';

import { useRef } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import styles from './FaqSection.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import { faqs } from '@/data/faq';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section id="_faq" className={styles.section} ref={sectionRef}>
      <Container>
        <SectionHeader
          eyebrow="Hỏi & Đáp"
          title="Câu hỏi thường gặp"
          description="Everything you need to know about Dear Tho"
        />

        <Row className="justify-content-center">
          <Col lg={8}>
            <Accordion className={styles.accordion} data-reveal>
              {faqs.map((item, index) => (
                <Accordion.Item
                  eventKey={String(index)}
                  key={item.id}
                  className={styles.item}
                >
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
