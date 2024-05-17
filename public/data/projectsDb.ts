import imgKezieHub from '../assets/projectImg/kenzieHub.png'
import imgApiCourses from '../assets/projectImg/api-course.png'
import imgGtaV from '../assets/projectImg/gtaV.png'
import { StaticImageData } from 'next/image'

export interface IProject {
    id: number
    name: string
    image: StaticImageData
    description: string
    url: string
}

export const projectsList: IProject[] = [
    {
        id: 1,
        name: 'Kenzie Hub',
        image: imgKezieHub,
        description:
            'O Kenzie Hub é uma aplicação que você pode adicionar as tecnologias que você domina, e de acordo com seus conhecimentos você pode colocar o nível experiencia de cada uma delas.',
        url: 'https://react-entrega-kenzie-hub-joabesnts09-eta.vercel.app/',
    },
    {
        id: 2,
        name: 'Clone site GTA V',
        image: imgGtaV,
        description:
            'Esse projeto foi feito em uma maratona de programação, inicialmente usando HTML, CSS e JavaScript Vanilla, eu quis ir além e fiz usando React.Js + Styled-Components, e ficou sensacional.',
        url: 'https://maratona-dev-em-dobro.vercel.app/',
    },
    {
        id: 3,
        name: 'API: gerenciamento do cursos',
        image: imgApiCourses,
        description:
            'Uma API que é possível cadastrar um usuário que que pode ser um estudante, instrutor ou administrador que pode criar cursos, conteúdos e adicionar estudantes nos cursos. - Tecnologias: Python, Django',
        url: 'https://github.com/Kenzie-Academy-Brasil-Developers/projeto-studante-courses-joabesnts09',
    },
]
