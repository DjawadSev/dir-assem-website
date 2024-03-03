import Image from 'next/image';
import styles from './postcard.module.css';
import Link from 'next/link';







const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/post.png" alt="post image" fill className={styles.Img} />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Desc</p>
                <Link href="/blog/post">READ MORE</Link>
            </div>
        </div>
    );
}

export default PostCard;