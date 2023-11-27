"use client"
import Controller from '@/services/controller'
import React, { useState } from 'react'

interface Props {
  status: boolean
  id_adventure: number,
  email: string,
  token: string,
  txt: string,
}

const CheckAdventure = (props: Props) => {
  const [estado, setEstado] = useState(props.status)

  const handleClick = async () => {
    const body = {
      usuario: props.email,
      token: props.token,
      id_Aventura: props.id_adventure,
      estado: !estado
    } 

    if (body.usuario !== "" && body.token !== "") {
      const dt = new Controller()
      const data = dt.put_state_adventure(body)
    }
  
    setEstado(estado => !estado)
  }
 
  return (
    <div className="form-control">
      <label className="cursor-pointer flex items-center">
        <input type="checkbox" onChange={handleClick} checked={estado} className="checkbox checkbox-accent" />
        <label className='label'>{ props.txt }</label>
      </label>
    </div>
  )
}

export default CheckAdventure