'use client'
import styles from './style.module.scss'
import { skillsList } from '../../../public/data/dataBase'
import { SkillCard } from './SkillCard'
import { motion } from 'framer-motion'

export const Skills = () => {
    return (
        <section className={styles.container} id='skills'>
            <div className={styles.box_title}>
                <motion.h2
                    className={`${styles.title_skills}`}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: .5 }}
                >
                    ./Habilidades
                </motion.h2>
            </div>
            <motion.div
                className={styles.skill_list}
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                transition={{ duration: .5 }}
            >
                <motion.div className={styles.boxList}>
                    {skillsList.map((item) => (
                        <SkillCard key={item.id} item={item} />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
