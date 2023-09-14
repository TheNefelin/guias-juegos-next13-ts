import React from 'react'
import Image from 'next/image'
import { chronocross } from "@/data/chronocross"

const TimeLine = () => {
  const data = chronocross
  console.log(data)

  return (
    <>
      {data.map(e => (
        <div key={e.id} className="collapse bg-base-300">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            {`${e.id}.- ${e.titulo}`}
          </div>
          <div className="collapse-content">
            {e.aventura.map(a => (
              <p>{a.texto}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default TimeLine