import React from 'react'
import Game from './Game'

const SideBar = () => {
  return (
    <ul className="menu bg-base-300 h-full">
      <li>
        <a>
          <Game></Game>
        </a>
      </li>
      <li>
        <a>
          <Game></Game>
        </a>
      </li>
      <li>
        <a>
          <Game></Game>
        </a>
      </li>
    </ul>
  )
}

export default SideBar