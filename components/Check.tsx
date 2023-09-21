'use client'
import React, { useState } from 'react'
import Controller from '@/services/controller'

interface Props {
  text: string,
  status: boolean
  id_game: number,
  id_guide: number,
  id_adventure: number
}

const Check = (props: Props) => {
  const [estado, setEstado] = useState(props.status)

  const dt = new Controller()
  
  const handleClick = () => {
    setEstado(!estado)

    const obj = {
      status: estado,
      id_game: props.id_game,
      id_guide: props.id_guide,
      id_adventure: props.id_adventure
    }

    dt.set_game_guides_byid(obj)
  }

  return (
    <div className="form-control">
      <label className="cursor-pointer flex items-center">
        <input type="checkbox" onChange={handleClick} checked={estado} className="checkbox checkbox-accent" />
        <label className='label'>{props.text}</label>
      </label>
    </div>
  )
}

export default Check