import Link from 'next/link'
import styles from './style.module.scss'
import iconReturn from '../../../../../../public/assets/icons/iconReturn.svg'
import Image from 'next/image'
import { Play } from 'next/font/google'


const play = Play({
    weight: ['400', '700'],
    subsets: ['latin'],
})



export const HeaderProject = () => {
    return (
        <>
            <header className={`${play.className} ${styles.headerContainer}`}>
                <div className={styles.content}>
                    <div>
                        <Link href='/'>
                            <button className={styles.buttonBack}>
                                <Image src={iconReturn} alt='icon Back to Home' />
                                <p>Voltar</p>
                            </button>
                        </Link>
                    </div>

                    <div className={styles.boxTitle}>
                        <span className={styles.title}>
                            &#60; <span>Projetos</span> &#47; &#62;
                        </span>
                    </div>
                </div>
            </header>
        </>
    )
}