import React from 'react'
import Image from 'next/image'
import img from "@/img/ChronoCross.jpg"

const Game = () => {
  return (
    <>
      <div className="avatar grid place-items-center">
        <div className="rounded-xl">
          <Image
            src={ img }
            width={80}
            height={80}
            alt='Chrono Cross'
          ></Image>
        </div>
        <p>Chrono Cross</p>
      </div>
    </>
  )
}

export default Game