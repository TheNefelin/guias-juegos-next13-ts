import React from 'react'
import Link from 'next/link'
import Controller from '@/services/controller'

interface LayoutProps {
  children: React.ReactNode
  params: { id: String }
}

const LayoutGame = async ({ children, params }: LayoutProps) => {
  if (isNaN(Number(params.id))) return <></>
  const id = Number(params.id)

  // const dt_ant = new Controller_Ant()
  // const data_ant = await dt_ant.get_game_menu_byid(id)

  const dt = new Controller()
  const data = await dt.get_game_byid(id)

  if (data.length === 0) return <></>

  return (
    <article className='mx-2'>
      <h1 className='card-body card-title bg-base-200 uppercase shadow-xl'>{data[0].nombre}</h1>
      <div className='my-2'>
        <Link className='btn btn-ghost' href={`/game/${id}`}>Juego</Link>
        {
          data[0].cant_guias > 0 &&
          <Link className='btn btn-ghost' href={`/game/${id}/timeline`}>Guia Time Line</Link>
        }
        {
          data[0].cant_personaes > 0 &&
          <Link className='btn btn-ghost' href={`/game/${id}/characters`}>Personajes</Link>
        }
        {
          data[0].cant_fuentes > 0 &&
          <Link className='btn btn-ghost' href={`/game/${id}/links`}>Fuentes</Link>
        }
      </div>
      <p className='indent-8 p-4 bg-base-200 shadow-md mb-4'>{data[0].descripcion}</p>
      { children }
    </article>
  )
}

export default LayoutGame