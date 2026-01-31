'use client'
import Image from "next/image"
import upArrow from '../../../../public/assets/up-arrow.svg'
import { useEffect, useState } from 'react'

export const BoxArrowUp = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 600) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div 
            id="arrouUp" 
            className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
                isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
            <button 
                onClick={scrollToTop}
                className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 cursor-pointer"
                aria-label="Voltar ao topo"
            >
                <Image className="w-6 h-6" src={upArrow} alt="Arrow Up" />
            </button>
        </div>
    )
}
