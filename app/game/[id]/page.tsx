import React from 'react'
import Image from 'next/image'
import Controller from '@/services/Controller'

interface Params {
  params: { id: string }
}

const Game = async ({ params }: Params) => {
  if (isNaN(Number(params.id))) return <></>

  const id = Number(params.id)
  const dt = new Controller()
  const data = await dt.get_game_byid(id)
  //la funcion trae un arreglo filtrado por id por eso siempre sera data[0]

  if (data.length === 0) return <></>

  return (
    <>
      <p className='indent-8 p-4 bg-base-200 shadow-md mb-4'>{data[0].text}</p>
      {data[0].imgBackground.map((img, index) => (
        <Image
          key={index}
          className='m-auto shadow-xl mb-4'
          src={img}
          alt='background'
          height={700}
          width={700}
        >
        </Image>
      ))}
    </>
  )
}

export default Game