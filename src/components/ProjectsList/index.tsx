'use client'
import { projectsList } from '../../../public/data/projectsDb'
import { ProjectsCard } from './ProjectCard'
import { motion } from 'framer-motion'

export const ProjectsList = () => {
    return (
        <section id="projetos" className="py-20 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-12"
                >
                    Projetos em Destaque
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {projectsList.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <ProjectsCard 
                                project={project} 
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
