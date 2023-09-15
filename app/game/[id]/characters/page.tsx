import Controller from '@/services/Controller'
import React from 'react'
import Image from 'next/image'

import img from '../public/ChronoCross/characters/serge.jpg'

interface Params {
  params: { id: string }
}

const Characters = async ({ params }: Params) => {
  if (isNaN(Number(params.id))) return <></>

  const id = Number(params.id)
  const dt = new Controller()
  const data = await dt.get_game_characters_byid(id)

  return (
    <div className='bg-base-200 mb-2 shadow-md p-4 grid gap-4'>
      {data.map((character, index) => (
        <div key={index} className="card card-side bg-base-100 shadow-xl">
          <figure>
            <Image
              className='w-24'
              src={character.img}
              alt={character.name}
              height={60}
              width={60}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{character.name}</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
        </div>
      ))}



      {data.map((character, index) => (
        <div key={index} className='card'>
          <p className='t card-title'>{character.name}</p>
          <Image
            src={character.img}
            alt={character.name}
            height={100}
            width={100}
            loading='lazy'
          >
          </Image>
        </div>
      ))}
    </div>
  )
}

export default Characters