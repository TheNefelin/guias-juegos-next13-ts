import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Theme from './Theme'
import logo from '@/img/logo.svg'

const NavBar = () => {
  return (
    <section className="navbar bg-base-300 shadow-lg">
      <div className='flex-1'>
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          <Image src={logo} alt='Logo' width={60} priority></Image>
          Guias
        </Link>
        <Theme></Theme>
      </div>
      <div className='flex-none'>
        <Link href='#' className="btn btn-secondary">Inicia Sesión</Link>
      </div>
    </section>
  )
}

export default NavBar