'use client'
import Image from 'next/image'
import imageProfile from '../../../public/assets/imgprof1gimp.jpg'
import styles from './style.module.scss'
import imgGIt from '../../../public/assets/github.svg'
import imgDownload from '../../../public/assets/icons-download.png'
import imgLinkedin from '../../../public/assets/linkedin.svg'
import { motion } from 'framer-motion' 


export const AboutMe = () => {
    return (
        <>
            <section className={styles.container} id="aboutme">
                <motion.div
                    className={`${styles.image_profile}`}
                    initial={{ opacity: 0, y: 200, scale: .5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 200, scale: .5 }}
                    transition={{ duration: .5 }}
                    >
                    <Image
                        className={styles.image}
                        src={imageProfile}
                        alt="image profile"
                        width={360}
                        height={435}
                        priority={true}
                    />
                </motion.div>

                <motion.div
                    className={styles.description_profile}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: .5 }}                    
                    >
                    <h1 className={styles.paragh_intro}>
                        Olá, meu nome é{' '}
                        <span className={styles.name}>Joabe Santos</span>, sou
                        desenvolvedor{' '}
                        <span className={styles.profession}>Full-Stack</span>
                        <span className={styles.point}>.</span>
                    </h1>
                    <p className={styles.training}>
                        Sejam bem vindos ao meu{' '}
                        <span className={styles.profession_training}>
                            Portifólio
                        </span>{' '}
                        &#x1F596;
                        <span className={`${styles.point} `}>.</span> {' '}
                        Sou apaixonado por tecnologia, e a programaçào é o
                        local perfeito para fazer o que eu tanto gosto &#x1F680;<span className={`${styles.point} `}>.</span>
                    </p>

                    <motion.div 
                        className={styles.BoxContacts}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: .5}}
                        >
                        <a className={styles.contact} href='https://github.com/joabesnts09' target='blank'>
                            <Image src={imgGIt} width={70} alt='image git hub'/>
                            {/* <span>Git Hub</span> */}
                        </a>
                        <a className={styles.contact} href='https://www.linkedin.com/in/joabe-santos-5a20a3206/' target='blank'>
                            <Image src={imgLinkedin} width={70} alt='image linkedin'/>
                            {/* <span>Linkedin</span> */}
                        </a>
                    </motion.div>

                    <motion.div
                        className={styles.boxCv}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: .5, delay: 0.1 }}
                        >
                        <a href='https://drive.google.com/file/d/1HO_-BTpbRVet0huX4DMs1e9OACzCTXeD/view?usp=sharing' target='blank'>
                            <p>Currículo</p>
                            <Image src={imgDownload} width={22} alt='image download'/>
                        </a>
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}
