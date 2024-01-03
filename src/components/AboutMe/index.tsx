import Image from 'next/image'
import imageProfile from '../../../public/assets/imgprof1gimp.jpg'
import styles from './style.module.scss'
// import imgGIt from '../../../public/assets/github-octocat.svg'
import imgGIt from '../../../public/assets/github.svg'
import imgDownload from '../../../public/assets/icons-download.png'
import imgLinkedin from '../../../public/assets/linkedin.svg'

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
                        priority={true}
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
                        <span className={`${styles.point} `}>.</span>
                    </p>

                    <div className={styles.BoxContacts}>
                        <a className={styles.contact} href='https://github.com/joabesnts09' target='blank'>
                            <Image src={imgGIt} width={70} alt='image git hub'/>
                            {/* <span>Git Hub</span> */}
                        </a>
                        <a className={styles.contact} href='https://www.linkedin.com/in/joabe-santos-5a20a3206/' target='blank'>
                            <Image src={imgLinkedin} width={70} alt='image linkedin'/>
                            {/* <span>Linkedin</span> */}
                        </a>
                    </div>

                    <div className={styles.boxCv}>
                        <a href='https://drive.google.com/file/d/1otkxTcYprIRykCppHG4Hb7x21MfiLEyh/view?usp=sharing' target='blank'>
                            <p>Currículo</p>
                            <Image src={imgDownload} width={22} alt='image download'/>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
