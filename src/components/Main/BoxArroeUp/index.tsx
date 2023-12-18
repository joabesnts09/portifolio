
import styles from './style.module.scss'
import Image from "next/image"
import upArrow from '../../../../public/assets/up-arrow.svg'

export const BoxArrowUp = () => {
    return (
        <div id="arrouUp" className={styles.box_arrouUp}>
            <a href="#top"><Image className={styles.arrowUp} src={upArrow} alt="Arrow Up" /></a>
        </div>
    )
}