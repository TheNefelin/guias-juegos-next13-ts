import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Controller from '@/services/Controller'

const SideBar = async () => {
  const dt = new Controller()
  const data = await dt.get_game_all()

  return (
    <ul className="bg-base-100 h-full menu menu-xs">
      {data.map(e => (
        <li key={e.id.toString()}>
          <Link href={`/game/${e.id}`}>

            <div key={e.id.toString()} className="avatar grid place-items-center">
              <div className="rounded-xl">
                <Image
                  src={e.imgCover.toString()}
                  width={100}
                  height={100}
                  alt={e.name.toString()}
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