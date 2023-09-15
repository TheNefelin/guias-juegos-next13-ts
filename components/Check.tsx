'use client'
import React, { useState } from 'react'

interface Txt {
  text: string
}

const Check = (props: Txt) => {
  const [estado, setEstado] = useState(false)

  const handleClick = () => {
    setEstado(!estado)
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