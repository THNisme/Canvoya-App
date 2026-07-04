import type { Metadata } from "next";
import { Container } from 'react-bootstrap';
import styles from './BlogPage.module.css';
import BlogHeroSlider from "@/components/BlogHeroSlider/BlogHeroSlider";
import BlogSlider from "@/components/BlogSlider/BlogSlider";

export const metadata: Metadata = {
  title: "Blog | CANVOYA",
};

const Blog = () => {
  const blogs = [
    {
        id:1,
        slug:"cho-noi-cai-rang",
        title:"Một sáng ở Chợ Nổi Cái Răng",
        category:"Hành trình",
        description:"Khám phá nét văn hóa sông nước miền Tây qua buổi sáng nhộn nhịp trên chợ nổi Cái Răng cùng những món ăn dân dã và con người thân thiện.",
        image:"/images/blogs.jpg",
        readTime:12,
        date:"24.06.2026"
    },
    {
        id:2,
        slug:"gian-gua",
        title:"Giàn Gừa hơn 150 năm tuổi",
        category:"Khám phá",
        description:"Một trong những địa điểm linh thiêng và độc đáo nhất Cần Thơ với hệ thống rễ chằng chịt tạo thành khu rừng tự nhiên.",
        image:"/images/blogs.jpg",
        readTime:8,
        date:"20.06.2026"
    },
    {
        id:3,
        slug:"ben-ninh-kieu",
        title:"Bến Ninh Kiều về đêm",
        category:"Khám phá",
        description:"Một địa điểm nổi tiếng khi nhắc đến Cần Thơ thì không thể bỏ qua.",
        image:"/images/blogs.jpg",
        readTime:8,
        date:"20.06.2026"
    },
    {
        id:4,
        slug:"kham-lon",
        title:"Di tích Khám Lớn",
        category:"Di tích",
        description:"Nhà tù Khám Lớn nơi giữ những câu chuyện chưa kể",
        image:"/images/blogs.jpg",
        readTime:8,
        date:"20.06.2026"
    }
  ];
  return(
    <>
        <BlogHeroSlider blogs={blogs}/>
        <BlogSlider blogs={blogs}/>
    </> 
  );
};

export default Blog;