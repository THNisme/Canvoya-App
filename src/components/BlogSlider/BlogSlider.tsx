"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import styles from "./BlogSlider.module.css"
import type { Blog } from "@/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function BlogSlider({ blogs }: { blogs: Blog[] }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    useScrollReveal(sectionRef);

    return (
        <Container ref={sectionRef}>
            <div className={styles.blogSliderContainer}>
                <div className="text-center mb-5" data-reveal>
                    <p className={styles.subtitle}>BLOG CANVOYA</p>

                    <h2 className={styles.title}>
                        Những câu chuyện mới
                    </h2>

                    <p className={styles.description}>
                        Stories from the journey · behind every page of Dear Tho
                    </p>
                </div>

                <Swiper
                    className={styles.blogSlider}
                    modules={[ Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    spaceBetween={24}
                    slidesPerView={3}
                    breakpoints={{
                        320: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2
                        },
                        1200: {
                            slidesPerView: 3
                        }
                    }}
                >
                    {blogs.map(blog => (
                        <SwiperSlide key={blog.id}>
                            <Card className={`${styles.blogCard} h-100 border-0 shadow-sm`}>
                                <Link href={`/blog/${blog.slug}`}>
                                    <Card.Img
                                        variant="top"
                                        src={blog.image}
                                        className={styles.blogImage}
                                    />
                                </Link>

                                <Card.Body>
                                    <Card.Title className={styles.blogTitle}>
                                        <Link href={`/blog/${blog.slug}`}>
                                            {blog.title}
                                        </Link>
                                    </Card.Title>

                                    <small className="text-muted">
                                        {blog.category}
                                    </small>

                                    <Card.Text className={styles.cardDescription}>
                                        {blog.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    );
}