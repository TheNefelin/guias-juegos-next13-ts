import React from 'react'
import Image from 'next/image'
import { GameCharacter, ParamsPage } from '@/services/model'
import Controller_Ant from '@/services/controller_ant'
import Controller from '@/services/controller'

const Characters = async ({ params }: ParamsPage) => {
  if (isNaN(Number(params.id))) return <></>
  const id = Number(params.id)

  // const dt_ant = new Controller_Ant()
  // const data_ant = await dt_ant.get_characters_byidgame(id)

  const dt = new Controller()
  const data = await dt.get_characters_byidgame(id)

  if (data.length === 0) return <></>

  return (
    <div className='bg-base-200 mb-4 card card-side shadow-xl flex gap-4 flex-wrap justify-center p-4'>

      {data.map((e:GameCharacter) => (
        <div key={e.id} className="card bg-base-100 shadow-xl max-w-xs w-full">
          <figure>
            <Image
              className='w-auto pt-4'
              src={e.img_url}
              alt={e.nombre}
              height={50}
              width={50}
              blurDataURL={e.img_url}
              placeholder="blur"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{`${e.nombre} (${e.id})`}</h2>
            <p>{e.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Characters