"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import styles from "./BlogSlider.module.css"
import type { Blog } from "@/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLang } from "@/context/LanguageContext";
import { strings } from "@/i18n/strings";

export default function BlogSlider({ blogs }: { blogs: Blog[] }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { lang } = useLang();
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
                        {strings.blog.description[lang]}
                    </p>
                </div>

                <Swiper
                    className={styles.blogSlider}
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                                <Link href={`/blog/${blog.slug}`} className={styles.blogImageWrap}>
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                                        className={styles.blogImage}
                                    />
                                </Link>

                                <Card.Body className={styles.blogBody}>
                                    <Card.Title className={styles.blogTitle}>
                                        <Link href={`/blog/${blog.slug}`}>
                                            {blog.title}
                                        </Link>
                                    </Card.Title>

                                    <small className={styles.blogCategory}>
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
