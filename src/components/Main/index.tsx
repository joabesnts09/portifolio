import { AboutMe } from '../AboutMe'
import { ProjectsList } from '../ProjectsList'
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
                    <ProjectsList/>
                </section>
                <BoxArrowUp />
            </main>
        </>
    )
}
