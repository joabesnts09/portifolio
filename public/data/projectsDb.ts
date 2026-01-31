import imgAstronomyBlog from '../assets/projectImg/astrinimiaBlog.png'
import imgApiCourses from '../assets/projectImg/api-course.png'
import imgGtaV from '../assets/projectImg/gtaV.png'
import { StaticImageData } from 'next/image'

export interface IProject {
    id: number
    name: string
    image: StaticImageData
    type: 'Front-End' | 'Back-End' | 'Full-Stack'
    description: string
    url: string
}

export const projectsList: IProject[] = [
    {
        id: 1,
        name: 'Blog de Astronomia',
        image: imgAstronomyBlog,
        type: 'Full-Stack',
        description:
            'Blog de Astronomia com tecnologias como React, Next.js, TypeScript, Tailwind CSS, Shadcn UIm e no Back-End usei Python, Django, Django Rest Framework, PostgreSQL.',
        url: 'https://dr-universo.vercel.app/',
    },
    {
        id: 2,
        name: 'Clone site GTA V',
        image: imgGtaV,
        type: 'Front-End',
        description:
            'Esse projeto foi feito em uma maratona de programação, inicialmente usando HTML, CSS e JavaScript Vanilla, eu quis ir além e fiz usando React.Js + Styled-Components, e ficou sensacional.',
        url: 'https://maratona-dev-em-dobro.vercel.app/',
    },
    {
        id: 3,
        name: 'API: gerenciamento do cursos',
        image: imgApiCourses,
        type: 'Back-End',
        description:
            'Uma API que é possível cadastrar um usuário que que pode ser um estudante, instrutor ou administrador que pode criar cursos, conteúdos e adicionar estudantes nos cursos. - Tecnologias: Python, Django',
        url: 'https://github.com/Kenzie-Academy-Brasil-Developers/projeto-studante-courses-joabesnts09',
    },
]
