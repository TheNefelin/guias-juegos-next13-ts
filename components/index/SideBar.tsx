import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Controller2 from '@/services/controller'
import { Game } from '@/services/model'

const SideBar = async () => {
  const res = new Controller2()
  const data = await res.get_game_all()
  // console.log(data2)

  if (data.length === 0 ) return <></>

  return (
    <ul className="bg-base-100 h-full menu menu-xs pr-0">
      {data.map((e:Game) => (
        <li key={e.id} className='mb-2'>
          <Link href={`/game/${e.id}`}>
            <div key={e.id} className="avatar grid place-items-center">
              <div className="rounded-xl">
                <Image
                  className='shadow-md'
                  src={e.img_cover}
                  width={250}
                  height={250}
                  alt={e.nombre}
                ></Image>
              </div>
              <p>{e.nombre}</p>
            </div>

          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SideBar