import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const roboto = Roboto({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'] 
})


export const metadata: Metadata = {
  title: 'Joabe Santos | Desenvolvedor Full-Stack',
  description: 'Portfólio de Joabe Santos - Desenvolvedor Full-Stack especializado em criar aplicações web escaláveis, APIs robustas e experiências focadas no usuário.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1C2541',
              color: '#fff',
              border: '1px solid #3A506B',
              borderRadius: '0.5rem',
            },
            success: {
              iconTheme: {
                primary: '#06fc75',
                secondary: '#1C2541',
              },
              style: {
                border: '1px solid #06fc75',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#1C2541',
              },
              style: {
                border: '1px solid #ef4444',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
