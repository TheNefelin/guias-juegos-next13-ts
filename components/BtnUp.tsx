import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img from '@/img/arrow.gif'

const BtnUp = () => {
  return (
    <Link href={"#id_body"} className='bg-base-100/10 rounded-full backdrop-blur-sm fixed z-10 bottom-4 hover:scale-110 duration-300'> 
      <Image
        className="m-0 p-0"
        src={img}
        alt='Subir'
        height={50}
        width={50}
      ></Image>
    </Link>
  )
}

export default BtnUp