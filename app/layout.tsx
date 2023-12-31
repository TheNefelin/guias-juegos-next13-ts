import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/index/NavBar'
import SideBar from '@/components/index/SideBar'
import BtnUp from '@/components/BtnUp'
import { SessionProv } from '@/context/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guias',
  description: 'Next 13 ts',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="es" >
      <body id="id_body" className={`${inter.className}`}>
        <SessionProv>

          <section className='header'>
            <NavBar></NavBar>            
          </section>

          <section className='sidebar'>
            <SideBar></SideBar>
          </section>

          <section className='btn_up'>
            <BtnUp></BtnUp>
          </section>

          <section className='main'>
            {children}
          </section>

        </SessionProv>
      </body>
    </html>
  )
}
