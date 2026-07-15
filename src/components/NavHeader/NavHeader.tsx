'use client'
import Link from "next/link";
import {
    Navbar,
    Container,
    Nav,
} from "react-bootstrap";
import { HiShoppingBag } from "react-icons/hi2";
import styles from './NavHeader.module.css';

function NavHeader() {
    return (
        <Navbar expand="lg" sticky="top" className={styles.navbar}>
            <Container>
                <Link className={styles.logo} href="/">
                    CANVOYA
                </Link>

                <div className="d-flex align-items-center">
                    <button type="button" className={styles.navTranslate}>VIE</button>
                    <span>|</span>
                    <button type="button" className={styles.navTranslate}>EN</button>
                </div>

                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">

                    <Nav className="mx-auto gap-4">
                        <Nav.Link className={styles.navLink} href="/#_hero">HOME</Nav.Link>
                        <Nav.Link className={styles.navLink} href="/#_product">THE BOOK</Nav.Link>
                        <Nav.Link className={styles.navLink} href="/#_destination">DESTINATION</Nav.Link>
                        <Nav.Link className={styles.navLink} href="/#_about">ABOUT</Nav.Link>
                        <Nav.Link className={styles.navLink} href="/blog">BLOG</Nav.Link>
                    </Nav>

                    <div className="d-flex align-items-center">
                        <a
                            className={`d-none d-lg-inline-block ${styles.navBuyBtn}`}
                            href="https://forms.gle/LT9nve8Lb1GaCmS76"
                        >
                            <span>MUA NGAY</span>
                            <span><HiShoppingBag/></span>
                        </a>
                    </div>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavHeader;