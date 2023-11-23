import { useEffect } from 'react'



export const useScroll = () => {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const header = document.querySelector('#header') as HTMLAnchorElement
            header.classList.toggle('scroll', window.scrollY > 0)
        })
    }, [])
}
