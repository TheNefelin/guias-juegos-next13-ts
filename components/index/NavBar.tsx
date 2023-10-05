"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Theme from '@/components/nav/Theme'
import logo from '@/img/logo.svg'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const NavBar = () => {
  const { data: session } = useSession()
  const router = useRouter();

  return (
    <section className="navbar bg-base-300 shadow-lg">

      <div className='flex-1'>
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          <Image src={logo} alt='Logo' width={60} priority></Image>
          Guias
        </Link>
        <Theme></Theme>
      </div>

      {session?.user?
        <div className='flex-none gap-2'>
          { session.user.image && session.user.name &&
            <img
              className='w-10 h-10 rounded-full'
              src={ session.user.image }
              alt={ session.user.name }
            />      
          }
          <button 
            className="btn btn-secondary"
            onClick={ async () => await signOut({ callbackUrl: "/" }) }
          >Cerrar Sesión</button>
        </div>
      :
        <div className='flex-none'>
          <button 
            className="btn btn-secondary"
            onClick={ async () => await signIn().then(() => router.push("/")) }
          >Inicia Sesión</button>
        </div>
      }

    </section>
  )
}

export default NavBar