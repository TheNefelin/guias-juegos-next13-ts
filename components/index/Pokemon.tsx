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
  const [newPokemon, setNewPokemon] = useState<Pokemon | null>(null)

  const randomID = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const getPokemon = async () => {
    setNewPokemon(null)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomID(1, 1010)}`, { cache: 'no-cache' })
    const data: Pokemon = await response.json()
    setNewPokemon(data)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <button onClick={getPokemon} className='bg-base-100/10 rounded-full backdrop-blur-sm fixed z-10 p-0'>
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