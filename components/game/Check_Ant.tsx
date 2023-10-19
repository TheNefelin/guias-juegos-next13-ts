"use client"
import React, { useState } from 'react'

interface Props {
  status: boolean,
}

const Check_Ant = (props: Props) => {
  const [estado, setEstado] = useState(props.status)

  const handleClick = async () => {
    setEstado(estado => !estado)
  }

  return (
    <div className="form-control">
      <label className="cursor-pointer flex items-center">
        <input type="checkbox" onChange={handleClick} checked={estado} className="checkbox checkbox-accent" />
        <label className='label'>Completado</label>
      </label>
    </div>
  )
}

export default Check_Ant