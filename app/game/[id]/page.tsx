import React from 'react'
import Image from 'next/image'
import data from '@/data/data.json'

interface Params {
  params: { id: string }
}

const Game = ({ params }: Params) => {
  if (isNaN(Number(params.id))) return <></>

  const id = Number(params.id)
  const game = data.filter((e) => e.id == id)[0]

  return (
    <>
      <p className='indent-8 p-4 bg-base-200 shadow-md mb-4'>{game.text}</p>
      <Image
        className='m-auto shadow-xl mb-4'
        src={game.imgBackground}
        alt='background'
        height={700}
        width={700}
      >
      </Image>
    </>
  )
}

export default Game