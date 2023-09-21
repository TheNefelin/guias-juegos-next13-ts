import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Controller from '@/services/controller'

const SideBar = async () => {
  const dt = new Controller()
  const data = await dt.get_game_all()

  if (data.length === 0 ) return <></>

  return (
    <ul className="bg-base-100 h-full menu menu-xs pr-0">
      {data.map(e => (
        <li key={e.id} className='mb-2'>
          <Link href={`/game/${e.id}`}>

            <div key={e.id} className="avatar grid place-items-center">
              <div className="rounded-xl">
                <Image
                  className='shadow-md'
                  src={e.imgCover}
                  width={100}
                  height={100}
                  alt={e.name}
                ></Image>
              </div>
              <p>{e.name}</p>
            </div>

          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SideBar