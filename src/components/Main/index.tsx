import { AboutMe } from '../AboutMe'
import { Skills } from '../Skills'
import { BoxArrowUp } from './BoxArroeUp'
import styles from './styles.module.scss'

export const Main = () => {
    return (
        <>
            <main className={styles.container}>
                <div className={styles.void}></div>
                <section>
                    <AboutMe />
                    <Skills />
                </section>
                <BoxArrowUp />
            </main>
        </>
    )
}
