import type { Metadata } from "next";
import BlogHeroSection from "@/components/BlogHeroSection/BlogHeroSection";
import BlogHeroSlider from "@/components/BlogHeroSlider/BlogHeroSlider";
import BlogSlider from "@/components/BlogSlider/BlogSlider";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog | CANVOYA",
};

const Blog = () => {
  return(
    <>
        <BlogHeroSection/>
        <BlogHeroSlider blogs={blogs}/>
        <BlogSlider blogs={blogs}/>
    </> 
  );
};

export default Blog;