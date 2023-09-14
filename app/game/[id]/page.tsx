import React from 'react'
import Image from 'next/image'
import img from '@/img/Background.jpg'

import data from "@/data/data.json"

interface Params {
  params: { id: string }
}

const Game = ({ params }: Params) => {
  if (isNaN(Number(params.id))) return <></>

  const id = Number(params.id)
  const game = data.filter((e) => e.id == id)[0]
  console.log(game)

  return (
    <>
      <p className='indent-8 p-2 bg-base-200 shadow-md mb-4'>{game.text}</p>
      <Image
        className='m-auto shadow-xl'
        src={game.imgBackground}
        alt='background'
        width={400}
        height={100}
      >
      </Image>
    </>
  )
}

export default Game