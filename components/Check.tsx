'use client'
import React, { useState } from 'react'

interface Props {
  text: string,
  status: boolean
}

const Check = (props: Props) => {
  const [estado, setEstado] = useState(props.status)

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