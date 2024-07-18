import { ListProject } from '../ListPorject'
import styles from './style.module.scss'


export const MainProject = () => {

    return (
        <>
            <main className={styles.container}>
                <ListProject/>
            </main>
        </>
    )
}