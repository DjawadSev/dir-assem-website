import Image from "next/image";
import styles from "./home.module.css";


const Home = () => {
  return <div className={styles.container}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>DirAssem<br></br> Digital Marketing Agency.</h1>
              <p className={styles.desc}>
              At DirAssem, we're not just a digital marketing agency —
              we're your partners in growth. Our mission is to help your
                business reach its full potential through innovative,
                tailored marketing strategies. We believe in the power 
                of digital technology to transform businesses, and we're
                  committed to ethical, sustainable practices that benefit
                  our clients and the wider community. Let's navigate the
                    digital landscape together and create meaningful
                    connections with your audience.
              </p>
              <div className={styles.buttons}>
                <button className={styles.button}>Learn More</button>
                <button className={styles.button}>Contact</button>
              </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/hero.svg" alt="hero image" fill className={styles.heroImg} />
            </div>
          </div>
};

export default Home;