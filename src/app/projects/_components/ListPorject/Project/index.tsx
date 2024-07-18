import Image from 'next/image'
import styles from './style.module.scss'
import imageProject from '../../../../../../public/assets/projectImg/kenzieHub.png'

export const Project = () => {
    return (
        <>
            <div className={styles.projectContainer}>
                <div className={styles.content}>
                    <div className={styles.boxDescription}>
                        <h3>Kenzie Hub</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est unde quos quasi deleniti ipsum
                            voluptatibus sunt hic laborum. Voluptate dignissimos
                            explicabo in qui. Quas, reprehenderit. Veniam
                            nesciunt aliquam accusamus atque?
                        </p>
                    </div>

                    <div className={styles.boxImage}>
                        <Image src={imageProject} alt='' />
                    </div>
                </div>
            </div>
        </>
    )
}
