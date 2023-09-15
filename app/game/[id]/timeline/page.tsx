import React from 'react'
import Image from 'next/image'
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
      {data.map(guide => (
        <div key={guide.id} className="collapse bg-base-200 mb-2">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            {`${guide.id}.- ${guide.name}`}
          </div>

          <div className="collapse-content">
            <Check></Check>

            {guide.adventure.map((adventure) => (
              <>
                {adventure.important ?
                  <p className='bg-accent-content p-2' key={adventure.id}>
                    {adventure.text}
                    <Check></Check>
                  </p>
                  :
                  <p key={adventure.id}>{adventure.text}</p>
                }

                {adventure.img.map((img, index) => (
                  <Image
                    key={index}
                    className='m-4'
                    src={img}
                    alt="Twitch"
                    height={100}
                    width={500}
                  ></Image>
                ))}
              </>
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