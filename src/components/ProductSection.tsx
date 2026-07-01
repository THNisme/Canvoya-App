'use client'
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./ProductSection.module.css";
import BookViewer from "./3D/BookViewer";

export default function ProductSection() {
    return (
        <section id="_product" className={styles.section}>
            <Container>

                <Row className="align-items-center g-5">

                    {/* Nội dung */}
                    <Col lg={6}>

                        <p className={styles.subtitle}>
                            Về sản phẩm
                        </p>

                        <h2 className={styles.title}>
                            Hơn cả một cuốn sách
                        </h2>

                        <p className={styles.description}>
                            Dear Tho is more than a collection of photos and facts
                            — it is a personal keepsake for your travel memories,
                            designed to create a deeply interactive experience.
                        </p>

                        <p className={styles.highlight}>
                            Sách bao gồm hình ảnh đẹp, thông tin lịch sử, không gian
                            viết nhật ký, túi nhựa trong để lưu ảnh cá nhân và các
                            trò chơi tương tác.
                        </p>

                        <Row className="g-3">

                            <Col xs={6}>
                                <Card className={styles.infoCard}>
                                    <Card.Body>
                                        <small className={styles.cardLabel}>
                                            Dimensions
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
                                            Pages
                                        </small>
                                        <h5 className={styles.cardValue}>
                                            20 pages
                                        </h5>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={6}>
                                <Card className={styles.infoCard}>
                                    <Card.Body>
                                        <small className={styles.cardLabel}>
                                            Style
                                        </small>
                                        <h5 className={styles.cardValue}>
                                            Vintage
                                        </h5>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={6}>
                                <Card className={styles.infoCard}>
                                    <Card.Body>
                                        <small className={styles.cardLabel}>
                                            Print
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
                        <div className={styles.bookPreview}>
                            <BookViewer/>
                        </div>
                    </Col>

                </Row>

            </Container>
        </section>
    );
}