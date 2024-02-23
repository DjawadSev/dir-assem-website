import Image from "next/image" 
import styles from "./about.module.css"



const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About us</h2>
                    <h1 className={styles.title}>
                        Empowering Brands, Elevating Presence, Crafting Digital 
                        Success through
                        Innovative Marketing Solutions and Timeless Values.
                    </h1>
                    <p className={styles.desc} >
                        At Dir-Assem, we are dedicated to revolutionizing the digital landscape
                        through our comprehensive and innovative marketing solutions.
                        With a passion for excellence, we seamlessly blend creativity
                        and strategy to propel brands into the spotlight. Our team is
                        committed to understanding your unique identity, tailoring
                        bespoke campaigns, and fostering authentic connections with
                        your audience. We believe in the power of collaboration,
                        transparency, and staying at the forefront of industry trends.
                        Let us navigate the digital realm together, turning visions into measurable
                        success and setting new benchmarks for your brand's online journey.
                        Welcome to a partnership built
                        on expertise, integrity, and a shared commitment to excellence.
                    </p>
                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <h1>5+</h1>
                            <p>Years of experience</p>
                        </div>
                        <div className={styles.box}>
                            <h1>500k+</h1>
                            <p>People Reached</p>
                        </div>
                    </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="About Image" fill className={styles.abtImg}/>
            </div>
        </div>
    );
};

export default AboutPage;