import React from 'react'
import Link from 'next/link'
import Controller from '@/services/Controller'

interface Params {
  children: React.ReactNode
  params: { id: String }
}

const LayoutGame = async ({ children, params }: Params) => {
  if (isNaN(Number(params.id))) return <></>

  const id = Number(params.id)
  const dt = new Controller()
  const data = await dt.get_game_menu_byid(id)

  if (data.length === 0) return <></>

  return (
    <article className='mr-2'>
      <h1 className='card-body card-title bg-base-200 uppercase shadow-xl'>{data[0].name}</h1>
      <div className='my-2'>
        <Link className='btn btn-ghost' href={`/game/${id}`}>Juego</Link>
        {
          data[0].cantGuides > 0 &&
          <Link className='btn btn-ghost' href={`/game/${id}/timeline`}>Guia Time Line</Link>
        }
        {
          data[0].cantCharacters > 0 &&
          <Link className='btn btn-ghost' href={`/game/${id}/characters`}>Personajes</Link>
        }
        {
          data[0].cantSource > 0 &&
          <Link className='btn btn-ghost' href={`/game/${id}/links`}>Fuentes</Link>
        }
      </div>
      {children}
    </article>
  )
}

export default LayoutGame