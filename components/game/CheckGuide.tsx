"use client"
import Controller from '@/services/controller'
import React, { useEffect, useState } from 'react'

interface Props {
  status: boolean
  id_guide: number,
  email: string,
  token: string,
}

const CheckGuide = (props: Props) => {
  const [estado, setEstado] = useState(props.status)

  const handleClick = async () => {
    const body = {
      usuario: props.email,
      token: props.token,
      id_Guia: props.id_guide,
      estado: !estado
    }

    if (body.usuario !== "" && body.token !== "") {
      const dt = new Controller()
      const data = dt.put_state_guide(body)
    }
  
    setEstado(estado => !estado)
  }

  useEffect(() => {
    const el = document.querySelector(`#G-${props.id_guide}`)
    
    if (estado) {
      el?.classList.add("bg-success", "text-success-content")
    } else {
      el?.classList.remove("bg-success", "text-success-content")
    }
  }, [estado])

  return (
    <div className="form-control">
      <label className="cursor-pointer flex items-center">
        <input type="checkbox" onChange={handleClick} checked={estado} className="checkbox checkbox-accent" />
        <label className='label'>Capítulo Completado</label>
      </label>
    </div>
  )
}

export default CheckGuide