import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface NewGame {
  id: number,
  name: string,
  img: string,
}

const Game = (props: NewGame) => {
  return (
    <>
      <div key={props.id} className="avatar grid place-items-center">
        <div className="rounded-xl">
          <Image
            src={props.img}
            width={100}
            height={100}
            alt={props.name}
          ></Image>
        </div>
        <p>{props.name}</p>
      </div>
    </>
  )
}

export default Game