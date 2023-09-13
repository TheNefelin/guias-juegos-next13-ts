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
      <h1>{`LayoutGame - ${id}`}</h1>
      <Link href={`/game/${id}/timeline`}>Time Line</Link>
      {children}
    </div>
  )
}

export default LayoutGame