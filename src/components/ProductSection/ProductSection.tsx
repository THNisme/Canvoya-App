'use client';

import { useRef } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./ProductSection.module.css";
import BookViewer from "../3D/BookViewer";
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLang } from '@/context/LanguageContext';
import { strings } from '@/i18n/strings';

export default function ProductSection() {
    const sectionRef = useRef<HTMLElement>(null);
    useScrollReveal(sectionRef, { start: 'top 75%' });
    const { lang } = useLang();
    const copy = strings.product;

    return (
        <section id="_product" className={styles.section} ref={sectionRef}>
            <Container>

                <Row className="align-items-center g-5">

                    {/* Nội dung */}
                    <Col lg={6}>

                        <p className={styles.subtitle} data-reveal>
                            {copy.eyebrow[lang]}
                        </p>

                        <h2 className={styles.title} data-reveal>
                            {copy.title[lang]}
                        </h2>

                        <p className={styles.description} data-reveal>
                            {copy.description[lang]}
                        </p>

                        <p className={styles.highlight} data-reveal>
                            {copy.highlight[lang]}
                        </p>

                        <Row className="g-3" data-reveal>

                            <Col xs={6}>
                                <Card className={styles.infoCard}>
                                    <Card.Body>
                                        <small className={styles.cardLabel}>
                                            {copy.dimensions[lang]}
                                        </small>
                                        <h5 className={styles.cardValue}>
                                            11.5 × 8.5 in
                                        </h5>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={6}>
                                <Card className={styles.infoCard}>
                                    <Card.Body>
                                        <small className={styles.cardLabel}>
                                            {copy.pages[lang]}
                                        </small>
                                        <h5 className={styles.cardValue}>
                                            {copy.pageCount[lang]}
                                        </h5>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={6}>
                                <Card className={styles.infoCard}>
                                    <Card.Body>
                                        <small className={styles.cardLabel}>
                                            {copy.style[lang]}
                                        </small>
                                        <h5 className={styles.cardValue}>
                                            {copy.vintage[lang]}
                                        </h5>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={6}>
                                <Card className={styles.infoCard}>
                                    <Card.Body>
                                        <small className={styles.cardLabel}>
                                            {copy.print[lang]}
                                        </small>
                                        <h5 className={styles.cardValue}>
                                            Full CMYK
                                        </h5>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                    </Col>

                    {/* Hình ảnh */}
                    <Col lg={6}>
                        <div className={styles.bookPreview} data-reveal>
                            <BookViewer/>
                        </div>
                    </Col>

                </Row>

            </Container>
        </section>
    );
}
