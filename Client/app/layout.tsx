import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Providers } from './providers'
import Navbar from './components/navbar'
import { type ReactElement } from 'react'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

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
      <body className={roboto.className}>
        <Navbar />
        <Providers>
          <main className='text-foreground bg-background dark'>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
