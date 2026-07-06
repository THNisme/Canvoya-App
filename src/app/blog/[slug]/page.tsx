import { blogs } from "@/data/blogs";
import styles from "./BlogDetailPage.module.css"
import BlogDetailHeading from "@/components/BlogDetailHeading/BlogDetailHeading";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function BlogDetail({ params }: Props) {

    const { slug } = await params;

    const blog = blogs.find(item => item.slug === slug);

    if (!blog) {
        return <h1>Not Found</h1>;
    }

    return (
        <>  
            <BlogDetailHeading blog={blog}/>
            <div
                className={styles.article}
                dangerouslySetInnerHTML={{
                    __html: blog.content
                }}
            />
        </>
    );
}