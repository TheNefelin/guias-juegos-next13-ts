import React from 'react'
import Link from 'next/link'

interface Children {
  children:React.ReactNode
}

interface Testing {

}

const LayoutGame = ({children}:Children) => {
  // const id = children?.props?.segmentPath[3][1]
  const id = 1
  
  return (
    <div>
      <h1 className='card-body card-title bg-base-200'>{`CHRONO CROSS - ${id}`}</h1>
      <Link className='btn btn-ghost' href={`/game/${id}/timeline`}>Guia Time Line</Link>
      <Link className='btn btn-ghost' href={`/game/${id}/timeline`}>Fuentes</Link>
      {children}
    </div>
  )
}

export default LayoutGame