'use client'

import {
  Navbar,
  Container,
  Nav,
  Button,
} from "react-bootstrap";
import styles from '@/components/NavHeader.module.css';

function NavHeader() {
  return (
<Navbar expand="lg" sticky="top" className={styles.navbar}>
    <Container>
        <Navbar.Brand className={styles.logo}>
            CANVOYA
        </Navbar.Brand>

        <div className="d-flex align-items-center">
            <Button variant="link" className={styles.navTranslate}>VIE</Button>
            <span>|</span>
            <Button variant="link" className={styles.navTranslate}>EN</Button>
        </div>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">

            <Nav className="mx-auto gap-4">
                <Nav.Link className={styles.navLink}>HOME</Nav.Link>
                <Nav.Link className={styles.navLink}>THE BOOK</Nav.Link>
                <Nav.Link className={styles.navLink}>DESTINATION</Nav.Link>
                <Nav.Link className={styles.navLink}>BLOG</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center">
                <Button className={`d-none d-lg-inline-block ${styles.navBuyBtn}`}>MUA NGAY</Button>
            </div>

        </Navbar.Collapse>

    </Container>
</Navbar>
  );
}

export default NavHeader;