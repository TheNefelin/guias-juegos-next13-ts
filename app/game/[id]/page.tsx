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

  if (data.length === 0 ) return <></>

  return (
    <>
      <p className='indent-8 p-4 bg-base-200 shadow-md mb-4'>{data[0].text}</p>
      <Image
        className='m-auto shadow-xl mb-4'
        src={data[0].imgBackground.toString()}
        alt='background'
        height={700}
        width={700}
      >
      </Image>
    </>
  )
}

export default Game