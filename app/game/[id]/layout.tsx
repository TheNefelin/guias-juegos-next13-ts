import React from 'react'
import Link from 'next/link'

interface Params {
  children: React.ReactNode
  params: {id: string}
}

const LayoutGame = ({ children, params }: Params) => {
  const { id } = params
  
  return (
    <div>
      <h1 className='card-body card-title bg-base-200'>{`CHRONO CROSS - ${id}`}</h1>
      <Link className='btn btn-ghost' href={`/game/${id}/timeline`}>Guia Time Line</Link>
      <Link className='btn btn-ghost' href={`/game/${id}/links`}>Fuentes</Link>
      {children}
    </div>
  )
}

export default LayoutGame