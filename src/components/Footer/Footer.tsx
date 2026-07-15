'use client'
import { Container, Row, Col, Nav } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>

        <Row className="g-5">

          {/* Brand */}
          <Col lg={6} md={12}>
            <h3 className={styles.logo}>Canvoya</h3>

            <p className={styles.tagline}>
              Chạm vào trang sách, chạm lại chuyến đi.
              <br />
              Touch the pages, touch the journey again.
            </p>

            <p className={styles.caption}>
              A project by FPT University students for the EXE course.
            </p>
          </Col>

          {/* Product */}
          <Col lg={3} md={6}>
            <h6 className={styles.heading}>Sản phẩm</h6>

            <Nav className="flex-column">
              <Nav.Link href="/#_product" className={styles.link}>
                Dear Tho
              </Nav.Link>

              <Nav.Link
                href="https://forms.gle/LT9nve8Lb1GaCmS76"
                className={styles.link}
              >
                Đặt hàng
              </Nav.Link>

              <Nav.Link href="/#_faq" className={styles.link}>
                Câu hỏi thường gặp
              </Nav.Link>
            </Nav>
          </Col>

          {/* About */}
          <Col lg={3} md={6}>
            <h6 className={styles.heading}>Về chúng tôi</h6>

            <Nav className="flex-column">
              <Nav.Link href="/#_about" className={styles.link}>
                Đội ngũ
              </Nav.Link>

              <Nav.Link
                href="https://www.facebook.com/canvoya"
                className={styles.link}
              >
                Liên hệ
              </Nav.Link>

              <Nav.Link href="https://www.facebook.com/canvoya" className={styles.link}>
                Facebook
              </Nav.Link>
            </Nav>
          </Col>

        </Row>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <span>© 2026 Canvoya. All rights reserved.</span>
          <span>Made with care in Cần Thơ</span>
        </div>

      </Container>
    </footer>
  );
}

export default Footer;