import { log } from 'console'
import styles from '../components/Header/style.module.scss'
import style from '../components/Main//BoxArroeUp/style.module.scss'

export const useScroll = () => {
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            const header = document.querySelector(
                '#header'
            ) as HTMLAnchorElement
            const arrouUp = document.querySelector(
                '#arrouUp'
            ) as HTMLAnchorElement

            const secAbout = document.querySelector(
                '#aboutme'
            ) as HTMLAnchorElement
            const secSkill = document.querySelector(
                '#skills'
            ) as HTMLAnchorElement
            const secProjects = document.querySelector(
                '#projects'
            ) as HTMLAnchorElement

            const sectionAbout = document.querySelector(
                '#about'
            ) as HTMLAnchorElement
            const sectionSkills = document.querySelector(
                '#skill'
            ) as HTMLAnchorElement
            const sectionProjects = document.querySelector(
                '#project'
            ) as HTMLAnchorElement

            header.classList.toggle(styles.scroll, window.scrollY > 0)
            arrouUp.classList.toggle(style.scrollArrow, window.scrollY > 600)

            if (
                window.scrollY > 100 &&
                window.scrollY < secAbout.scrollHeight
            ) {
                sectionAbout.classList.add(styles.actived)
                sectionSkills.classList.remove(styles.actived)
            } else if (
                window.scrollY >= secAbout.scrollHeight &&
                window.scrollY < secAbout.scrollHeight + secSkill.scrollHeight
            ) {
                sectionAbout.classList.remove(styles.actived)
                sectionProjects.classList.remove(styles.actived)
                sectionSkills.classList.add(styles.actived)
            } else if (
                window.scrollY >=
                secAbout.scrollHeight + secSkill.scrollHeight
            ) {
                sectionSkills.classList.remove(styles.actived)
                sectionProjects.classList.add(styles.actived)
            } else {
                sectionAbout.classList.remove(styles.actived)
                sectionSkills.classList.remove(styles.actived)
                sectionProjects.classList.remove(styles.actived)
            }
        })
    }
}
