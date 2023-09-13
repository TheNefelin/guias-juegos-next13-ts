import React from 'react'
import Game from '@/components/Game'
import Link from 'next/link'

import img1 from "@/img/ChronoCross.jpg"
import img2 from "@/img/Comrades.png"
import img3 from "@/img/Darksiders2.jpg"

const data = [
  {
    id: 1,
    name: "Chrono Cross",
    img: img1,
  },
  {
    id: 2,
    name: "Comrades",
    img: img2,
  },
  {
    id: 3,
    name: "Darksiders 2",
    img: img3,
  },
]

const SideBar = () => {
  return (
    <ul className="bg-base-100 h-full menu menu-xs">
      {data.map(e => (
        <li key={e.id}>
          <Link href={`/game/${e.id}`}>
            <Game id={e.id} name={e.name} img={e.img}></Game>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SideBar