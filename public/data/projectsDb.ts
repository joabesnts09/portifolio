import imgKezieHub from '../assets/projectImg/kenzieHub.png'
import imgParallax from '../assets/projectImg/parallax.png'
import imgNuKenzie from '../assets/projectImg/nuKenzie.png'
import { StaticImageData } from 'next/image'

export interface IProject {
    id: number
    name: string
    image: StaticImageData
    description: string
    url: string
}

export const projectsList: IProject[]  = [
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
        name: 'Efeito Parallax',
        image: imgParallax,
        description:
            'Parallax é um efeito aplicado no movimento de algo em uma aplicação, nesse caso o efeito é aplicado no scroll do site. É um efeito muito elegante e que passa um impressão de modernidade.',
        url: 'https://effeito-prarallax-joabesnts09-ca6p-62pt9gvrw-joabesnts09.vercel.app/',
    },
    {
    id: 3,
    name: 'Nu Kenzie',
    image: imgNuKenzie,
    description:
        'O Nu Kenzie é uma aplicação que simula transações bancárias, o usuário pode escolher o tipo de transação de entrada ou despesa, e por fim faz um resumo finaceiros de todas as transações.',
    url: 'https://react-entrega-s1-template-nu-kenzie-joabesnts09-hdo8ee6xx.vercel.app/',
    }

]
