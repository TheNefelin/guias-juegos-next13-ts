'use client'
import React, { useState } from 'react'

const Check = () => {
  const [estado, setEstado] = useState(false)

  const handleClick = () => {
    setEstado(!estado)
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

export default Check