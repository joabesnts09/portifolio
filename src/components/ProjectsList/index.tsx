import { projectsList } from '../../../public/data/projectsDb'
import { ProjectsCard } from './ProjectCard'
import styles from './style.module.scss'

export const ProjectsList = () => {
    return (
        <>
            <section id="projects" className={styles.container}>
                <div className={styles.boxTitle}>
                    <h2>./Projetos</h2>
                </div>
                <div className={styles.boxCard}>
                    {projectsList.map((project) => (
                        <ProjectsCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </>
    )
}
