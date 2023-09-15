import React from 'react'
import Check from '@/components/Check'
import { chronocross } from "@/data/chronocross"
import Controller from '@/services/Controller'

interface Params {
  params: { id: String }
}

const TimeLine = async ({ params }: Params) => {
  if (isNaN(Number(params.id))) return <></>

  const id = Number(params.id)
  const dt = new Controller()
  const data = await dt.test(id)

  if (data.length === 0) return <></>

  data.map(e => {
    console.log(e)
  })

  const temp = chronocross

  return (
    <>
      {data.map(e => (
        <div key={e.id} className="collapse bg-base-200 mb-2">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            {`${e.id}.- ${e.name}`}
          </div>

          <div className="collapse-content">
            <Check></Check>

            {e.adventure.map((a) => (
              <p key={a.id}>{a.text}</p>
            ))}
            
          </div>
        </div>
      ))}

      {/* {temp.map(e => (
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
      ))} */}
    </>
  )
}

export default TimeLine