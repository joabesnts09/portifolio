'use client'
import { motion } from 'framer-motion'

interface Service {
    title: string
    description: string
    technologies: string[]
    icon: string
}

const services: Service[] = [
    {
        title: 'Websites e Plataformas',
        description: 'Especializado no desenvolvimento de interfaces modernas e responsivas usando as principais tecnologias do mercado',
        technologies: ['Node.js', 'Python'],
        icon: '🖥️'
    },
    {
        title: 'Front-End',
        description: 'Desenvolvimento de interfaces de usuário modernas, responsivas e interativas utilizando as melhores tecnologias do mercado',
        technologies: ['React', 'Next.js', 'TypeScript', 'Angular'],
        icon: '💻'
    },
    {
        title: 'Back-End',
        description: 'Criação de APIs REST robustas, arquitetura de servidores escaláveis e gerenciamento de bancos de dados',
        technologies: ['Python', 'Django', 'Flask', 'Node.js', 'Express.js', 'Nest.js'],
        icon: '⚙️'
    }
]

export const Services = () => {
    return (
        <section id="servicos" className="py-20 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-12"
                >
                    Serviços
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#1C2541]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                        >
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {service.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-[#0B132B] text-gray-300 text-sm rounded-lg border border-gray-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
