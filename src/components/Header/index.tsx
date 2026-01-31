'use client'
import { useScroll } from '../../hooks/useScroll'
import { motion } from 'framer-motion'
import Image from 'next/image'
import imgLinkedin from '../../../public/assets/linkedin.svg'
import imgGithub from '../../../public/assets/github-octocat.svg'

export const Header = () => {
    useScroll()

    const useMenuMobile = () => {
        const mobileMenu = document.querySelector(
            '#mobileMenu'
        ) as HTMLButtonElement

        const navList = document.querySelector(
            '#mobileNav'
        ) as HTMLElement

        mobileMenu?.classList.toggle('active')
        navList?.classList.toggle('active')
    }

    return (
            <motion.header
                initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
                id="top"
            className="fixed top-0 left-0 w-full z-50 bg-[#0B132B]/80 backdrop-blur-md"
            >
            <div id="header" className="container mx-auto px-4 md:px-8 lg:px-16 py-6 flex items-center justify-between relative">
                <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-white text-xl md:text-2xl font-bold">
                        Joabe Santos
                    </span>
                    <span className="text-blue-400 text-xl">✓</span>
                </div>

                <div className="md:hidden flex-1 flex justify-end">
                    <button
                        id="mobileMenu"
                        onClick={useMenuMobile}
                        className="flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50 relative"
                        aria-label="Menu mobile"
                    >
                        <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
                        <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
                        <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
                    </button>
                </div>

                <nav className="hidden md:block">
                    <ul 
                        id="navigation" 
                        className="flex items-center gap-8 list-none"
                    >
                        <li>
                            <a 
                                id="nav-inicio"
                                href="#inicio" 
                                className="text-white hover:text-purple-300 transition-colors text-base font-medium relative py-2 px-1"
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a 
                                id="nav-servicos"
                                href="#servicos" 
                                className="text-white hover:text-purple-300 transition-colors text-base font-medium relative py-2 px-1"
                            >
                                Serviços
                                </a>
                            </li>
                        <li>
                            <a 
                                id="nav-habilidades"
                                href="#habilidades" 
                                className="text-white hover:text-purple-300 transition-colors text-base font-medium relative py-2 px-1"
                            >
                                    Habilidades
                                </a>
                            </li>
                        <li>
                            <a 
                                id="nav-projetos"
                                href="#projetos" 
                                className="text-white hover:text-purple-300 transition-colors text-base font-medium relative py-2 px-1"
                            >
                                    Projetos
                                </a>
                            </li>
                        <li>
                            <a 
                                id="nav-contato"
                                href="#contato" 
                                className="text-white hover:text-purple-300 transition-colors text-base font-medium relative py-2 px-1"
                            >
                                Contato
                            </a>
                        </li>
                        </ul>
                    </nav>

                <div className="hidden md:flex items-center gap-4">
                    <a 
                        href="https://www.linkedin.com/in/joabe-santos-5a20a3206/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                        <Image src={imgLinkedin} width={20} height={20} alt="LinkedIn" />
                    </a>
                    <a 
                        href="https://github.com/joabesnts09" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                        <Image src={imgGithub} width={20} height={20} alt="GitHub" />
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            <div 
                id="mobileNav"
                className="fixed top-0 left-0 w-full h-screen bg-[#0B132B] z-40 md:hidden opacity-0 pointer-events-none transition-opacity duration-300"
            >
                <ul className="flex flex-col items-center justify-center h-full gap-8 list-none">
                    <li>
                        <a 
                            id="mobile-nav-inicio"
                            href="#inicio" 
                            onClick={useMenuMobile} 
                            className="text-white text-2xl font-medium hover:text-purple-300 transition-colors relative py-2 px-1"
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a 
                            id="mobile-nav-servicos"
                            href="#servicos" 
                            onClick={useMenuMobile} 
                            className="text-white text-2xl font-medium hover:text-purple-300 transition-colors relative py-2 px-1"
                        >
                            Serviços
                        </a>
                    </li>
                    <li>
                        <a 
                            id="mobile-nav-habilidades"
                            href="#habilidades" 
                            onClick={useMenuMobile} 
                            className="text-white text-2xl font-medium hover:text-purple-300 transition-colors relative py-2 px-1"
                        >
                            Habilidades
                        </a>
                    </li>
                    <li>
                        <a 
                            id="mobile-nav-projetos"
                            href="#projetos" 
                            onClick={useMenuMobile} 
                            className="text-white text-2xl font-medium hover:text-purple-300 transition-colors relative py-2 px-1"
                        >
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a 
                            id="mobile-nav-contato"
                            href="#contato" 
                            onClick={useMenuMobile} 
                            className="text-white text-2xl font-medium hover:text-purple-300 transition-colors relative py-2 px-1"
                        >
                            Contato
                        </a>
                    </li>
                </ul>
            </div>

            <style jsx global>{`
                #mobileMenu {
                    position: relative;
                }
                #mobileMenu.active span:nth-child(1) {
                    position: absolute;
                    transform: rotate(45deg);
                    top: 50%;
                    left: 50%;
                    margin-left: -12px;
                    margin-top: -1px;
                }
                #mobileMenu.active span:nth-child(2) {
                    opacity: 0;
                    transform: scaleX(0);
                }
                #mobileMenu.active span:nth-child(3) {
                    position: absolute;
                    transform: rotate(-45deg);
                    top: 50%;
                    left: 50%;
                    margin-left: -12px;
                    margin-top: -1px;
                }
                #mobileNav.active {
                    opacity: 1 !important;
                    pointer-events: all !important;
                }
                /* Estilo para link ativo no desktop */
                #navigation a.active::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background-color: #06fc75;
                    border-radius: 2px;
                }
                /* Estilo para link ativo no mobile */
                #mobileNav a.active::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 80%;
                    height: 3px;
                    background-color: #06fc75;
                    border-radius: 2px;
                }
                #navigation a.active,
                #mobileNav a.active {
                    color: #06fc75;
                }
            `}</style>
            </motion.header>
    )
}
