import { Container } from 'react-bootstrap';
import styles from './page.module.css';
import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import LandmarkSection from '@/components/LandmarkSection';

const Home = () => {
  return(
    <>
      <HeroSection/>
      <ProductSection/>
      <LandmarkSection/>
    </>

  );
};

export default Home;