'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    Navbar,
    Container,
    Nav,
} from "react-bootstrap";
import { HiShoppingBag } from "react-icons/hi2";
import styles from './NavHeader.module.css';
import { useLang } from '@/context/LanguageContext';
import { strings } from '@/i18n/strings';

function NavHeader() {
    const [scrolled, setScrolled] = useState(false);
    const { lang, setLang } = useLang();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}
        >
            <Container>
                <Link className={styles.logo} href="/">
                    CANVOYA
                </Link>

                <div className={`d-flex align-items-center ${styles.langSwitch}`}>
                    <button
                        type="button"
                        className={`${styles.navTranslate} ${lang === 'vi' ? styles.navTranslateActive : ''}`}
                        onClick={() => setLang('vi')}
                        aria-pressed={lang === 'vi'}
                    >
                        VI
                    </button>
                    <span className={styles.langDivider}>|</span>
                    <button
                        type="button"
                        className={`${styles.navTranslate} ${lang === 'en' ? styles.navTranslateActive : ''}`}
                        onClick={() => setLang('en')}
                        aria-pressed={lang === 'en'}
                    >
                        EN
                    </button>
                </div>

                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">

                    <Nav className={`mx-auto ${styles.navMenu}`}>
                        <Nav.Link className={styles.navLink} href="/#_product">{strings.nav.book[lang]}</Nav.Link>
                        <Nav.Link className={styles.navLink} href="/#_destination">{strings.nav.destination[lang]}</Nav.Link>
                        <Nav.Link className={styles.navLink} href="/#_about">{strings.nav.about[lang]}</Nav.Link>
                        <Nav.Link className={styles.navLink} href="/blog">{strings.nav.blog[lang]}</Nav.Link>
                        <Nav.Link className={styles.navLink} href="/#_faq">{strings.nav.faq[lang]}</Nav.Link>
                    </Nav>

                    <div className="d-flex align-items-center">
                        <a
                            className={`d-none d-lg-inline-flex ${styles.navBuyBtn}`}
                            href="https://forms.gle/LT9nve8Lb1GaCmS76"
                        >
                            <span>{strings.nav.buy[lang]}</span>
                            <HiShoppingBag className={styles.buyIcon} aria-hidden="true" />
                        </a>
                    </div>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavHeader;
