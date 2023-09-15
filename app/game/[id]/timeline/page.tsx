import React from 'react'
import Check from '@/components/Check'
import { chronocross } from "@/data/chronocross"

const TimeLine = () => {
  const data = chronocross

  return (
    <>
      {data.map(e => (
        <div key={e.id} className="collapse bg-base-200 mb-2">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            {`${e.id}.- ${e.titulo}`}
          </div>
          <div className="collapse-content">
            <Check></Check>
            {e.aventura.map((a, index) => (
              <p key={index}>{a.texto}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default TimeLine