'use client'

import { useState } from "react";
import styles from "./links.module.css"
import NavLink from "./navLink/NavLink";

const Links = () => {
    
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        }
    ];

    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className={styles.container}>
            <nav className={styles.links}>
                {links.map((link=>{
                    return (

                    <NavLink item={link} key={link.title} />
                    );
                }))}
            </nav>
            <button onClick={toggleMenu} className={styles.burgerMenu}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                            {links.map((link)=> 
                                (
                                    <NavLink item={link} key={link.title} />
                                )
                            )}
                        </div>
            }
        </div>
    );
}

export default Links;