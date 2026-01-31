'use client'
import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            // Você precisará configurar essas variáveis no .env.local
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('Configuração do EmailJS não encontrada. Verifique as variáveis de ambiente no arquivo .env.local')
            }

            const result = await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: process.env.NEXT_PUBLIC_RECEIVER_EMAIL || ''
                },
                publicKey
            )

            console.log('Email enviado com sucesso:', result)
            
            // Toast de sucesso
            toast.success('Mensagem enviada com sucesso! Entrarei em contato em breve.', {
                duration: 5000,
            })
            
            // Limpar formulário
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        } catch (error: any) {
            console.error('Erro ao enviar email:', error)
            
            // Mensagens de erro mais específicas
            let errorMsg = 'Erro ao enviar mensagem. '
            
            if (error?.text) {
                // Erro do EmailJS
                if (error.text.includes('Public Key is invalid') || error.text.includes('400')) {
                    errorMsg = 'Public Key inválida. Verifique o NEXT_PUBLIC_EMAILJS_PUBLIC_KEY no .env.local'
                } else if (error.text.includes('insufficient authentication scopes') || error.text.includes('412')) {
                    errorMsg = 'Erro de autenticação do Gmail. Verifique as configurações do EmailJS ou use outro provedor.'
                } else if (error.text.includes('Invalid template')) {
                    errorMsg = 'Template ID inválido. Verifique o NEXT_PUBLIC_EMAILJS_TEMPLATE_ID no .env.local'
                } else if (error.text.includes('Invalid service')) {
                    errorMsg = 'Service ID inválido. Verifique o NEXT_PUBLIC_EMAILJS_SERVICE_ID no .env.local'
                } else {
                    errorMsg = `Erro: ${error.text}`
                }
            } else if (error?.message) {
                errorMsg = error.message
            } else {
                errorMsg = 'Tente novamente ou entre em contato diretamente pelo email.'
            }
            
            // Toast de erro
            toast.error(errorMsg, {
                duration: 6000,
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section id="contato" className="py-20 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Vamos conversar
                    </h2>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-white mb-2 font-medium">
                                    Nome *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#1C2541]/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-white mb-2 font-medium">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#1C2541]/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="seu@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-white mb-2 font-medium">
                                Título da Mensagem *
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-[#1C2541]/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                                placeholder="Assunto da mensagem"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-white mb-2 font-medium">
                                Mensagem *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 bg-[#1C2541]/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                placeholder="Escreva sua mensagem aqui..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
