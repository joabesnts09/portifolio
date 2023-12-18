import styles from './style.module.scss'
import { skillsList } from '../../../public/data/dataBase'
import { SkillCard } from './SkillCard'

export const Skills = () => {
    return (
        <section className={styles.container} id='skills'>
            <div className={styles.box_title}>
                <h2 className={styles.title_skills}>./Habilidades</h2>
            </div>
            <div className={styles.skil_list}>
                <div className={styles.boxList}>
                    {skillsList.map((item) => (
                        <SkillCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
