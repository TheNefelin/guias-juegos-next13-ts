import React from 'react'
import Image from 'next/image'

interface Pokemon {
  name: string,
  sprites: {
    front_default: string,
    front_shiny: string,
    back_default: string,
    back_shiny: string,
  },
}

const Pokemon = async () => {
  function randomID(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomID(1, 1010)}`, { cache: 'no-cache' })
  const pokemon: Pokemon = await response.json()

  return (
    <div>
      <Image
        className="-scale-x-100"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={80}
        height={80}
        priority={true}
      ></Image>
    </div>
  )
}

export default Pokemon