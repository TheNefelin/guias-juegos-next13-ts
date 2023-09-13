import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/img/logo.svg'

const NavBar = () => {
  return (
    <section className="navbar bg-base-100 shadow-lg">
      <div className='flex-1'>
        <a className="btn btn-ghost normal-case text-xl">
          <Image src={logo} alt='Logo' width={60} priority></Image>
          GuiasQL
        </a>
      </div>
      <div className='flex-none'>
        <Link href='#' className="btn">Inicia Sesión</Link>
      </div>
    </section>
  )
}

export default NavBar