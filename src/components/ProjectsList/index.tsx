'use client'
import { projectsList } from '../../../public/data/projectsDb'
import { ProjectsCard } from './ProjectCard'
import styles from './style.module.scss'
import { motion } from 'framer-motion'


export const ProjectsList = () => {
    return (
        <>
            <section id="projects" className={styles.container}>
                <div className={styles.boxTitle}>
                    <motion.h2
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: .5 }}   
                    >
                        ./Projetos
                    </motion.h2>
                </div>
                <motion.div 
                    className={styles.boxCard}
                    initial={{ opacity: 0, x: 300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 300 }}
                    transition={{ duration: .5 }} 
                    >
                    {projectsList.map((project) => (
                        <ProjectsCard buttonText={project.type === 'Front-End'? 'Ver site': 'Ver repositório'} key={project.id} project={project} />
                    ))}
                </motion.div>
            </section>
        </>
    )
}
