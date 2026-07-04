import { Container } from 'react-bootstrap';
import styles from './page.module.css';
import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import LandmarkSection from '@/components/LandmarkSection';
import BlogSlider from '@/components/BlogSlider';

const Home = () => {
  const blogs = [
    {
        id: 1,
        title: "Book Review",
        image: "/images/blogs.jpg",
        description: "Lorem ipsum dolor sit amet..."
    },
    {
        id: 2,
        title: "Reading Tips",
        image: "/images/blogs.jpg",
        description: "Lorem ipsum dolor sit amet..."
    },
    {
        id: 3,
        title: "Top 10 Books",
        image: "/images/blogs.jpg",
        description: "Lorem ipsum dolor sit amet..."
    },
    {
        id: 4,
        title: "Best Novel",
        image: "/images/blogs.jpg",
        description: "Lorem ipsum dolor sit amet..."
    }
  ];

  return(
    <>
      <HeroSection/>
      <ProductSection/>
      <LandmarkSection/>
      <BlogSlider blogs={blogs}/>
    </>

  );
};

export default Home;