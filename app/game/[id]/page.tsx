import React from 'react'
import Image from 'next/image'
import img from '@/img/Background.jpg'

const Game = () => {
  return (
    <Image
      src={img}
      alt='background'
      width={400}
      height={100}
    > 
    </Image>
  )
}

export default Game