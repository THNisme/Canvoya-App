'use client'
import { Container, Row, Col, Nav } from "react-bootstrap";
import styles from "./Footer.module.css";
import { useLang } from '@/context/LanguageContext';
import { strings } from '@/i18n/strings';

const Footer = () => {
  const { lang } = useLang();

  return (
    <footer className={styles.footer}>
      <Container>

        <Row className="g-5">

          {/* Brand */}
          <Col lg={6} md={12}>
            <h3 className={styles.logo}>Canvoya</h3>

            <p className={styles.tagline}>
              {strings.footer.tagline[lang]}
            </p>

            <p className={styles.caption}>
              {strings.footer.caption[lang]}
            </p>
          </Col>

          {/* Product */}
          <Col lg={3} md={6}>
            <h6 className={styles.heading}>{strings.footer.productHeading[lang]}</h6>

            <Nav className="flex-column">
              <Nav.Link href="/#_product" className={styles.link}>
                Dear Tho
              </Nav.Link>

              <Nav.Link
                href="https://forms.gle/LT9nve8Lb1GaCmS76"
                className={styles.link}
              >
                {strings.footer.linkOrder[lang]}
              </Nav.Link>

              <Nav.Link href="/#_faq" className={styles.link}>
                {strings.footer.linkFaq[lang]}
              </Nav.Link>
            </Nav>
          </Col>

          {/* About */}
          <Col lg={3} md={6}>
            <h6 className={styles.heading}>{strings.footer.aboutHeading[lang]}</h6>

            <Nav className="flex-column">
              <Nav.Link href="/#_about" className={styles.link}>
                {strings.footer.linkTeam[lang]}
              </Nav.Link>

              <Nav.Link
                href="https://www.facebook.com/canvoya"
                className={styles.link}
              >
                Facebook
              </Nav.Link>

              <Nav.Link href="/blog" className={styles.link}>
                {strings.nav.blog[lang]}
              </Nav.Link>
            </Nav>
          </Col>

        </Row>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <span>{lang === 'vi' ? '© 2026 Canvoya. Đã đăng ký bản quyền.' : '© 2026 Canvoya. All rights reserved.'}</span>
          <span>{strings.footer.madeIn[lang]}</span>
        </div>

      </Container>
    </footer>
  );
}

export default Footer;
