import Image from "next/image";
import styles from "./home.module.css";


const Home = () => {
  return <div className={styles.container}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>DirAssem!<br></br> Digital Marketing Agency.</h1>
              <p className={styles.desc}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem illum architecto voluptate veritatis nam facere saepe
                libero mollitia. Deleniti voluptatum saepe corrupti voluptates
                aut ratione assumenda suscipit dolores sapiente quod!
              </p>
              <div className={styles.buttons}>
                <button className={styles.button}>Learn More</button>
                <button className={styles.button}>Contact</button>
              </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/hero.gif" alt="hero image" fill className={styles.heroImg} />
            </div>
          </div>
};

export default Home;