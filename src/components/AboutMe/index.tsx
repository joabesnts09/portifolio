import Image from 'next/image'
// import imageProfile from '../../../public/assets/imageprofile.jpeg'
import imageProfile from '../../../public/assets/imgprof1gimp.jpg'
import styles from './style.module.scss'

export const AboutMe = () => {
    return (
        <>
            <section className={styles.container} id="aboutme">
                <div className={styles.image_profile}>
                    <Image
                        className={styles.image}
                        src={imageProfile}
                        alt="image profile"
                        width={360}
                        height={435}
                    />
                </div>

                <div className={styles.description_profile}>
                    <h1 className={styles.paragh_intro}>
                        Olá, meu nome é{' '}
                        <span className={styles.name}>Joabe Santos</span>, sou
                        desenvolvedor{' '}
                        <span className={styles.profession}>Front-End</span>
                        <span className={styles.point}>.</span>
                    </h1>
                    <p className={styles.training}>
                        Desenvolvedor{' '}
                        <span className={styles.profession_training}>
                            Full-Stak
                        </span>{' '}
                        em formação na Kezie Academy Brasil
                        <span className={`${styles.point} `}>
                            .
                        </span>
                    </p>
                </div>
            </section>
        </>
    )
}
