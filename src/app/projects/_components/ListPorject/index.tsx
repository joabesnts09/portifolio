import { Project } from './Project'
import styles from './style.module.scss'

export const ListProject = () => {

    return (
        <>
            <section className={styles.boxContainerList}>
                <Project/>
            </section>
        </>
    )
}
