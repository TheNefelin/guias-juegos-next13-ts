import React from 'react'
import Image from 'next/image'
import img from '@/img/Background.jpg'

interface Params {
  params: { id: string }
}

const Game = ({ params }: Params) => {
  const { id } = params
  
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