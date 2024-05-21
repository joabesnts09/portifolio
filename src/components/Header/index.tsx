'use client'
import { useScroll } from '../../hooks/useScroll'
import styles from './style.module.scss'
import '../../styles/index.scss'
import { Play } from 'next/font/google'
import { motion } from 'framer-motion'

const play = Play({
    weight: ['400', '700'],
    subsets: ['latin'],
})

export const Header = () => {
    useScroll()

    const useMenuMobile = () => {
        const mobileMenu = document.querySelector(
            '#mobileMenu'
        ) as HTMLAnchorElement

        const navList = document.querySelector(
            '#navigation'
        ) as HTMLAnchorElement

        mobileMenu.classList.toggle(styles.active_btn)
        navList.classList.toggle(styles.active)
    }

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -100 }}
                animate={{opacity: 1, y: 0}}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: .5 }}
                id="top"
                className={`${play.className} ${styles.containerHeader}`}
            >
                <div id="header" className={`${styles.containerBox} `}>
                    <div className={styles.box_logo}>
                        <span className={styles.logo}>
                            &#60; <span>Joabe Santos</span> &#47; &#62;
                        </span>
                    </div>

                    <button
                        id="mobileMenu"
                        onClick={useMenuMobile}
                        className={styles.mobileMenu}
                    ></button>

                    <nav>
                        <ul id="navigation" className={styles.navigation}>
                            <li id="about" className={styles.nav_item}>
                                <a onClick={useMenuMobile} href="#aboutme">
                                    Sobre mim
                                </a>
                            </li>
                            <li id="skill" className={styles.nav_item}>
                                <a onClick={useMenuMobile} href="#skills">
                                    Habilidades
                                </a>
                            </li>
                            <li id="project" className={styles.nav_item}>
                                <a onClick={useMenuMobile} href="#projects">
                                    Projetos
                                </a>
                            </li>
                            {/* <li className={styles.nav_item}>
                <a onClick={useMenuMobile} href="#">Contatos</a>
              </li> */}
                        </ul>
                    </nav>
                </div>
            </motion.header>
        </>
    )
}
