import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import Pokemon from './components/Pokemon'
import SideBar from './components/SideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GuiasQL',
  description: 'Next 13 ts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" data-theme="winter">
      <body className={`${inter.className} ${"bg-base-200"}`}>
        <section className='header'>
          <NavBar></NavBar>
        </section>
        <section className='pokemon'>
          <Pokemon></Pokemon>
        </section>
        <section className='search'>

        </section>
        <section className='sidebar'>
          <SideBar></SideBar>
        </section>
        <section className='main'>
          {children}
        </section>
      </body>
    </html>
  )
}
