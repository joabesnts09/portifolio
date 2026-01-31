'use client'
import { skillsList } from '../../../public/data/dataBase'
import { SkillCard } from './SkillCard'
import { motion } from 'framer-motion'

export const Skills = () => {
    return (
        <section id="habilidades" className="py-20 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-12"
                >
                    Habilidades
                </motion.h2>
            <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                    {skillsList.map((item) => (
                        <SkillCard key={item.id} item={item} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
