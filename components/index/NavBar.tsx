"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Theme from '@/components/nav/Theme'
import logo from '@/img/logo.png'
import { signIn, signOut, useSession } from 'next-auth/react'
import Pokemon from './Pokemon'

const NavBar = () => {
  const { data: session } = useSession()

  const login = async () => {
    await signIn("google", { callbackUrl: "/" })
  }

  return (
    <section className="navbar bg-base-300 shadow-lg py-4">

      <div className='flex-1'>
        <Pokemon></Pokemon>
        <Link href={"/"} className="btn bg-transparent border-none px-2 normal-case text-xl ml-20">
          <Image
            className='img'
            src={logo}
            alt='Logo'
            width={60}
            priority
          ></Image>
          Guias
        </Link>
        <Theme></Theme>
      </div>

      {session?.user ?
        <button
          className='btn bg-transparent border-none'
          onClick={async () => await signOut({ callbackUrl: "/" })}
        >
          {session.user.image && session.user.name &&
            <Image
              className='w-12 h-12 rounded-full'
              src={session.user.image}
              alt={session.user.name}
              width={100}
              height={100}
            >
            </Image>
          }
        </button>
        :
        <div className='flex-none'>
          <button
            className="btn btn-secondary p-3"
            //onClick={ async () => await signIn().then(() => router.push("/")) }
            onClick={login}
          >Inicia Sesión</button>
        </div>
      }

    </section>
  )
}

export default NavBar