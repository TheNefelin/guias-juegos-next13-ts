'use client'
import React, { Suspense, useEffect, useState } from 'react'
import Image from 'next/image'
import Loading from '@/components/Loading'

interface Pokemon {
  name: string,
  sprites: {
    front_default: string,
    front_shiny: string,
    back_default: string,
    back_shiny: string,
  },
}

const Pokemon = () => {
  const [seeMenu, setSeeMenu] = useState(true)
  const [newPokemon, setNewPokemon] = useState<Pokemon | null>(null)

  const randomID = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const handleClick = async () => {
    setSeeMenu(!seeMenu)

    const body = document.querySelector("body")
    const menu = document.querySelector(".sidebar")

    if (seeMenu) {
      body?.classList.remove("body_hide_menu")
      menu?.classList.remove("sidebar_hide_menu")
    } else {
      body?.classList.add("body_hide_menu")
      menu?.classList.add("sidebar_hide_menu")
    }

    setNewPokemon(null)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomID(1, 1010)}`, { cache: 'no-store' })
    const data: Pokemon = await response.json()
    setNewPokemon(data)
  }

  useEffect(() => {
    // handleClick()
    fetch(`https://pokeapi.co/api/v2/pokemon/150`)
    .then(res => res.json())
    .then(data => {
      setNewPokemon(data)
    })
  }, [])

  return (
    <button className='bg-base-100/10 rounded-full backdrop-blur-sm fixed z-10'>
    {/* <button onClick={handleClick} className='bg-base-100/10 rounded-full backdrop-blur-sm fixed z-10'> */}
      {newPokemon ?
        <Image
          className="m-0 p-0"
          src={newPokemon.sprites.front_default}
          alt={newPokemon.name}
          width={70}
          height={70}
          priority={true}
        ></Image>
        :
        <Loading></Loading>
      }
    </button>
  )
}

export default Pokemon