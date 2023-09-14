import React from 'react'
import Game from '@/components/Game'
import Link from 'next/link'

import data from "@/data/data.json"

const SideBar = () => {
  return (
    <ul className="bg-base-100 h-full menu menu-xs">
      {data.map(e => (
        <li key={e.id}>
          <Link href={`/game/${e.id}`}>
            <Game id={e.id} name={e.name} img={e.imgUrl}></Game>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SideBar