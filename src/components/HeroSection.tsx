'use client'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      <Container fluid className={styles.content}>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>

            <p className={styles.subtitle}>
              Canvoya presents
            </p>

            <h1 className={styles.title}>
              Dear Tho
            </h1>

            {/* Decorative Divider */}
            <div className={styles.divider}>
              <span className={styles.line}></span>
              <span className={styles.diamond}></span>
              <span className={styles.line}></span>
            </div>

            <p className={styles.description}>
              Chạm vào trang sách, chạm lại chuyến đi.
            </p>

            {/* Có thể thêm Button sau này */}
            <div className={styles.actions}>
              {/* <Button>Khám phá</Button> */}
            </div>

          </Col>
        </Row>
      </Container>

    </section>
  );
}