import PostCard from '@/components/postCard/PostCard';
import styles from './blog.module.css'





const BlogPage = () => {
    return (
        <div className={styles.container}>
            <PostCard />
        </div>
    )
}

export default BlogPage;