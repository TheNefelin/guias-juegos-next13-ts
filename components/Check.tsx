'use client'
import React, { useState, useEffect } from 'react'
import { PropsCheck } from '@/services/model'

const Check = (props: PropsCheck) => {
  const [estado, setEstado] = useState(props.status)

  const handleClick = () => {
    setEstado(!estado)

    if (props.id_adventure === 0) {
      const el = document.querySelector(`#G-${props.id_game}-${props.id_guide}-0`)

      if (estado) {
        el?.classList.remove("bg-success", "text-success-content")
      } else {
        el?.classList.add("bg-success", "text-success-content")
      }
    }
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