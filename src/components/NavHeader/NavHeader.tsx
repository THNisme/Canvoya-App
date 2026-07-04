'use client'
import Link from "next/link";
import {
    Navbar,
    Container,
    Nav,
    Button,
} from "react-bootstrap";
import { HiShoppingBag } from "react-icons/hi2";
import styles from './NavHeader.module.css';

function NavHeader() {
    return (
        <Navbar expand="lg" sticky="top" className={styles.navbar}>
            <Container>
                <Navbar.Brand className={styles.logo} as={Link} href="/">
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
                        <Nav.Link className={styles.navLink} as={Link} href="/#_hero">HOME</Nav.Link>
                        <Nav.Link className={styles.navLink} as={Link} href="/#_product">THE BOOK</Nav.Link>
                        <Nav.Link className={styles.navLink} as={Link} href="/#_destination">DESTINATION</Nav.Link>
                        <Nav.Link className={styles.navLink} as={Link} href="/blog">BLOG</Nav.Link>
                    </Nav>

                    <div className="d-flex align-items-center">
                        <Button className={`d-none d-lg-inline-block ${styles.navBuyBtn}`} as={Link} href="/buy">
                            <span>MUA NGAY</span>
                            <span><HiShoppingBag/></span>
                        </Button>
                    </div>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavHeader;