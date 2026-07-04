"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import styles from "./BlogSlider.module.css"

export default function BlogSlider({ blogs }) {
    return (
        <Container>
            <Swiper
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

                                <Card.Text>
                                    {blog.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}