
import Links from "@/components/navbar/links/Links";
import styles from  "./navbar.module.css";
import Image from "next/image";


const NavBar = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.logo}>
                <Image src="/logo.svg" alt="Logo" width={80} height={80}/>
            </div>
            <Links />
            
        </div>
    );
}

export default NavBar;