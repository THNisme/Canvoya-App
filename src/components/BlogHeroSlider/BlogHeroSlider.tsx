"use client";

import { Carousel, Container, Row, Col, Badge } from "react-bootstrap";
import Link from "next/link";
import styles from "./BlogHeroSlider.module.css";

interface Blog { id: number; image: string; title: string; category: string; slug: string; description: string; readTime: number; date: string }

export default function BlogHeroSlider({ blogs }: { blogs: Blog[] }) {
    return (
        <section className={styles.blogHero}>
            <Container>
                <Carousel>
                {blogs.map((blog) => (
                    <Carousel.Item key={blog.id} className={styles.blogCarouselItem}>
                        <Row className="align-items-center">

                            <Col lg={7}>
                                <div className={styles.heroImageWrapper}>
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className={styles.heroImage}
                                    />
                                </div>
                            </Col>

                            <Col lg={5}>
                                <Badge className={styles.heroCategory}>
                                    {blog.category}
                                </Badge>

                                <Link
                                    href={`/blog/${blog.slug}`}
                                    className={styles.heroTitleLink}
                                >
                                    <h1 className={styles.heroTitle}>
                                        {blog.title}
                                    </h1>
                                </Link>

                                <p className={styles.heroDescription}>
                                    {blog.description}
                                </p>

                                <div className={styles.heroMeta}>
                                    <span>{blog.readTime} phút đọc</span>
                                    <span>•</span>
                                    <span>{blog.date}</span>
                                </div>
                            </Col>

                        </Row>
                    </Carousel.Item>
                ))}
                </Carousel>
            </Container>
        </section>
    );
}
