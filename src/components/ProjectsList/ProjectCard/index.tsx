import Image from 'next/image'

export interface IProjectProps {
    project: {
        id: number
        name: string
        image: any
        description: string
        url: string
        type: 'Front-End' | 'Back-End' | 'Full-Stack'
    }
}

export const ProjectsCard = ({ project }: IProjectProps) => {
    const getTechnologies = () => {
        if (project.name === 'API: gerenciamento do cursos') {
            return ['Django', 'Django Rest Framework', 'PostgreSQL']
        }
        if (project.name === 'Blog de Astronomia') {
            return ['React', 'Next.js', 'TypeScript', 'Python', 'Django', 'Django Rest Framework', 'PostgreSQL']
        }
        if (project.name === 'Clone site GTA V') {
            return ['React', 'Styled Components', 'JavaScript']
        }
        return ['React', 'Next.js', 'TypeScript']
    }

    const technologies = getTechnologies()

    return (
        <div className="bg-[#1C2541]/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group h-full flex flex-col">
            <div className="relative w-full h-48 flex-shrink-0 overflow-hidden">
                    <Image
                        src={project.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={200}
                        alt={project.name}
                    />
                </div>

            <div className="p-6 flex flex-col flex-grow min-h-0">
                <h3 className="text-xl font-bold text-white mb-3 flex-shrink-0">
                    {project.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm overflow-hidden" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    lineHeight: '1.5rem',
                    maxHeight: '4.5rem'
                }}>
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-[#0B132B] text-gray-300 text-xs rounded-lg border border-gray-700 whitespace-nowrap"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto flex-shrink-0">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 text-sm whitespace-nowrap"
                    >
                        {project.type === 'Back-End' ? 'Ver repositório' : 'Ver site'} →
                    </a>
                    {project.type === 'Full-Stack' && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 text-sm whitespace-nowrap"
                        >
                            Ver repositório →
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
