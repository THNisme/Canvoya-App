'use client'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./BlogHeroSection.module.css";
import { useLang } from "@/context/LanguageContext";
import { strings } from "@/i18n/strings";

export default function BlogHeroSection() {
  const { lang } = useLang();

  return (
    <section id="_hero" className={styles.hero}>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      <Container fluid className={styles.content}>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>

            <p className={styles.subtitle}>
              Blog Canvoya
            </p>

            <h1 className={styles.title}>
              Những câu chuyện mới
            </h1>

            {/* Decorative Divider */}
            <div className={styles.divider}>
              <span className={styles.line}></span>
              <span className={styles.diamond}></span>
              <span className={styles.line}></span>
            </div>

            <p className={styles.description}>
              {strings.blog.description[lang]}
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
