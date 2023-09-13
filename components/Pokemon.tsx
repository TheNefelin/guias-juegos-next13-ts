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
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/150')
  const pokemon: Pokemon = await response.json()

  return (
    <div>
      <Image
        className="-scale-x-100"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={100}
        height={100}
        priority={true}
      ></Image>
    </div>
  )
}

export default Pokemon