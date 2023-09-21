import React from 'react'
import Image from 'next/image'
import Controller from '@/services/controller'

interface Params {
  params: { id: string }
}

const Characters = async ({ params }: Params) => {
  if (isNaN(Number(params.id))) return <></>

  const id = Number(params.id)
  const dt = new Controller()
  const data = await dt.get_game_characters_byid(id)

  return (
    <div className='bg-base-200 mb-4 card card-side shadow-xl flex gap-4 flex-wrap justify-center p-4'>

      {data.map(character => (
        <div key={character.id} className="card bg-base-100 shadow-xl max-w-xs w-full">
          <figure>
            <Image
              className='w-auto pt-4'
              src={character.img}
              alt={character.name}
              height={50}
              width={50}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{`${character.name} (${character.id})`}</h2>
            <p>{character.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Characters