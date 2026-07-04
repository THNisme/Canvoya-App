'use client'
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./LandmarkSection.module.css";

const landmarks = [
    {
        title: "Khám Lớn",
        english: "Grand Prison",
        description:
            "A powerful testament to resilience and sacrifice during the struggle for independence.",
        color: "var(--color-terracotta)",
    },
    {
        title: "Bến Ninh Kiều",
        english: "Ninh Kiều Wharf",
        description:
            "The beating heart of Cần Thơ — where river life, trade, and culture converge.",
        color: "var(--color-slate-blue)",
    },
    {
        title: "Chợ Nổi Cái Răng",
        english: "Cái Răng Floating Market",
        description:
            "A UNESCO-recognized floating market alive with color and Mekong tradition.",
        color: "var(--color-teal)",
    },
    {
        title: "Chùa Ông",
        english: "Ông Temple",
        description:
            "An ornate 19th-century Chinese temple blending Cantonese architecture with local devotion.",
        color: "var(--color-ochre)",
    },
    {
        title: "Bảo tàng Cần Thơ",
        english: "Cần Thơ Museum",
        description:
            "Chronicles the delta's natural history, revolutionary past, and vibrant heritage.",
        color: "var(--color-olive)",
    },
];

export default function LandmarkSection() {
    return (
        <section id="_destination" className={styles.section}>
            <Container>

                <div className="text-center mb-5">
                    <p className={styles.subtitle}>5 Địa danh</p>

                    <h2 className={styles.title}>
                        Năm câu chuyện, một hành trình
                    </h2>

                    <p className={styles.description}>
                        Five stories, one journey
                    </p>
                </div>

                <Row className="g-4">
                    {landmarks.map((item, index) => (
                        <Col lg={4} md={6} key={index}>

                            <Card className={styles.card}>

                                <div
                                    className={styles.imagePlaceholder}
                                    style={{ background: item.color }}
                                >
                                    {item.english}
                                </div>

                                <Card.Body>

                                    <Card.Title className={styles.cardTitle}>
                                        {item.title}
                                    </Card.Title>

                                    <small className={styles.cardSub}>
                                        {item.english}
                                    </small>

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