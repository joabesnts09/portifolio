'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import imageProfile from '../../../public/assets/imgprof1gimp.jpg'
import imgGithub from '../../../public/assets/github-octocat.svg'
import imgLinkedin from '../../../public/assets/linkedin.svg'
import iconDownload from '../../../public/assets/download.svg'

export const Hero = () => {
    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center pt-32 pb-16 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Olá, meu nome é <span className="text-green-400">Joabe Santos</span>, sou desenvolvedor{' '}
                        <span className="text-pink-500 underline">Full-Stack</span>.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        Sejam bem vindos ao meu <span className="text-blue-400 underline">Portifólio</span> 🖖. Sou apaixonado por tecnologia, e a programação é o local perfeito para fazer o que eu tanto gosto 🚀.
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                        <a
                            href="https://drive.google.com/file/d/1plmhzaMZt7kFmwJ5OrKcb0R53gtXhfJU/view?usp=sharing"
                            target="_blank"
                            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center gap-2"
                        >
                            <p>Currículo</p>
                            <Image src={iconDownload} width={24} height={24} alt="Download" />
                        </a>
                        
                        {/* Social icons - visible only on mobile */}
                        <div className="flex md:hidden items-center gap-3">
                            <a 
                                href="https://www.linkedin.com/in/joabe-santos-5a20a3206/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg"
                            >
                                <Image src={imgLinkedin} width={24} height={24} alt="LinkedIn" />
                            </a>
                            <a 
                                href="https://github.com/joabesnts09" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors shadow-lg"
                            >
                                <Image src={imgGithub} width={24} height={24} alt="GitHub" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative flex justify-center items-center"
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-3xl"></div>
                        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-2">
                            <div className="w-full h-full rounded-full bg-[#0B132B] p-4 flex items-center justify-center">
                                <Image
                                    src={imageProfile}
                                    alt="Joabe Santos"
                                    width={400}
                                    height={400}
                                    className="rounded-full object-cover w-full h-full"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
