import React from 'react'
import Image from 'next/image'
import Controller from '@/services/controller'
import { GameImgBackground } from '@/services/model'

interface PageProps {
  params: { id: string }
}

const Game = async ( { params } :PageProps ) => {
  if (isNaN(Number(params.id))) return <></>
  const id = Number(params.id)

  // const dt_ant = new Controller_Ant()
  // const data_ant = await dt_ant.get_game_byid(id)

  const dt = new Controller()
  const data = await dt.get_background_byidgame(id)

  if (data.length === 0) return <></>

  return (
    <>
      {data.map((e:GameImgBackground) => (
        <Image
          key={e.id}
          className='m-auto shadow-xl mb-4'
          src={e.img_url}
          alt='background'
          height={1000}
          width={1000}
          blurDataURL={e.img_url}
          placeholder="blur"
        >
        </Image>
      ))}
    </>
  )
}

export default Game