import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Providers } from './providers'
import Navbar from './components/navbar'
import { type ReactElement } from 'react'
import { Toaster } from 'sonner'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700', '100', '300', '900'] })

export const metadata: Metadata = {
  title: 'Learning Quokka',
  description: 'Learn your life, learn every you like.',
  authors: [
    { name: 'Stiven Blandón Urrego', url: 'https://github.com/ConanGH-S' },
    { name: 'Angie Vannesa Mendieta', url: 'https://github.com/AngieVMR29' },
    { name: 'Mario Alfonso Orozco Pachecho', url: 'https://github.com/alfons03' }
  ],
  colorScheme: 'dark light'
}

export default function RootLayout({ children }: { children: React.ReactNode }): ReactElement {
  return (
    <html lang='es'>
      <body className={`${roboto.className} grid min-h-screen grid-rows-[auto_1fr_auto]`}>
        <Navbar />
        <Providers>
          <Toaster richColors expand={false} position='top-right' />
          <main className='h-full bg-background text-foreground dark'>{children}</main>
        </Providers>
        <footer className='mt-4 w-full border-t border-t-[#ffbe0b] bg-[#181818] py-2'>
          <p className='text-center font-light text-white'>Derechos reservados SENASoft 2023 ©️</p>
        </footer>
      </body>
    </html>
  )
}
