import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img from '@/img/arrow.gif'

const BtnUp = () => {
  return (
    <Link href={"#"} className='fixed z-10 bottom-4'> 
      <Image
        className="m-0 p-0"
        src={img}
        alt='Arrriba'
        height={50}
        width={50}
      ></Image>
    </Link>
  )
}

export default BtnUp