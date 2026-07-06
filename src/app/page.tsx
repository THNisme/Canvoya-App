import { Container } from 'react-bootstrap';
import styles from './page.module.css';
import HeroSection from '../components/HeroSection/HeroSection';
import ProductSection from '../components/ProductSection/ProductSection';
import LandmarkSection from '../components/LandmarkSection/LandmarkSection';
import BlogSlider from '../components/BlogSlider/BlogSlider';
import { blogs } from "@/data/blogs";

const Home = () => {
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