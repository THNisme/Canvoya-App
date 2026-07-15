"use client";

import { Carousel, Container, Row, Col, Badge } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from "./BlogHeroSlider.module.css";
import type { Blog } from "@/types";

export default function BlogHeroSlider({ blogs }: { blogs: Blog[] }) {
    return (
        <section className={styles.blogHero}>
            <Container>
                <Carousel interval={null}>
                {blogs.map((blog) => (
                    <Carousel.Item key={blog.id} className={styles.blogCarouselItem}>
                        <Row className="align-items-center">

                            <Col lg={7}>
                                <div className={styles.heroImageWrapper}>
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        sizes="(max-width: 991px) 100vw, 58vw"
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
