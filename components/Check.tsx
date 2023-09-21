'use client'
import React, { useState, useEffect } from 'react'
import Controller from '@/services/controller'
import { LSType, PropsCheck } from '@/services/model'

const Check = (props: PropsCheck) => {
  const [estado, setEstado] = useState(props.status)

  const obj: LSType = { status: props.status, id_game: props.id_game, id_guide: props.id_guide, id_adventure: props.id_adventure }
  const dt = new Controller()

  const handleClick = () => {
    setEstado(!estado)
    obj.status = estado
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