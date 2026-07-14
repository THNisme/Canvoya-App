'use client'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./BlogDetailHeading.module.css";

interface Blog { category: string; date: string; title: string; description: string; readTime: number }

export default function BlogDetailHeading({blog}: { blog: Blog }) {
  return (
    <section id="_hero" className={styles.hero}>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      <Container fluid className={styles.content}>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>

            <p className={styles.subtitle}>
              Blog Canvoya / {blog.category} / {blog.date} 
            </p>

            <h1 className={styles.title}>
              {blog.title}
            </h1>

            {/* Decorative Divider */}
            <div className={styles.divider}>
              <span className={styles.line}></span>
              <span className={styles.diamond}></span>
              <span className={styles.line}></span>
            </div>

            <p className={styles.description}>
              {blog.description}
            </p>

            <p className={styles.subtitle}>
                Thời lượng đọc: {blog.readTime} phút
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
