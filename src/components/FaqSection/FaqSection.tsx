'use client';

import { useRef } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import styles from './FaqSection.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import { faqs } from '@/data/faq';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLang } from '@/context/LanguageContext';
import { strings } from '@/i18n/strings';

export default function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);
  const { lang } = useLang();

  return (
    <section id="_faq" className={styles.section} ref={sectionRef}>
      <Container>
        <SectionHeader
          eyebrow={strings.faq.eyebrow[lang]}
          title={strings.faq.title[lang]}
          description={strings.faq.subtitle[lang]}
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
                  <Accordion.Header>{item.question[lang]}</Accordion.Header>
                  <Accordion.Body>{item.answer[lang]}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
