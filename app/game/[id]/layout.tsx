import React from 'react'
import Link from 'next/link'

import data from "@/data/data.json"

interface Params {
  children: React.ReactNode
  params: {id: string}
}

const LayoutGame = ({ children, params }: Params) => {
  if (isNaN(Number(params.id))) return <></>

  const id = Number(params.id)
  const game = data.filter((e) => e.id == id)[0]
  
  return (
    <div>
      <h1 className='card-body card-title bg-base-200 uppercase'>{ game.name }</h1>
      <Link className='btn btn-ghost' href={`/game/${id}`}>Juego</Link>
      { game.guides.length > 0 && 
        <Link className='btn btn-ghost' href={`/game/${id}/timeline`}>Guia Time Line</Link>
      }
      {
        game.source.length > 0 &&
        <Link className='btn btn-ghost' href={`/game/${id}/links`}>Fuentes</Link>
      }
      {children}
    </div>
  )
}

export default LayoutGame