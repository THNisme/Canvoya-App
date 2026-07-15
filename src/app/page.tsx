import HeroSection from '../components/HeroSection/HeroSection';
import ProductSection from '../components/ProductSection/ProductSection';
import LandmarkSection from '../components/LandmarkSection/LandmarkSection';
import AboutSection from '../components/AboutSection/AboutSection';
import BlogSlider from '../components/BlogSlider/BlogSlider';
import FaqSection from '../components/FaqSection/FaqSection';
import { blogs } from "@/data/blogs";

const Home = () => {
  return(
    <>
      <HeroSection/>
      <ProductSection/>
      <LandmarkSection/>
      <AboutSection/>
      <BlogSlider blogs={blogs}/>
      <FaqSection/>
    </>

  );
};

export default Home;
