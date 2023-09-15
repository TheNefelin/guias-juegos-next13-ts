import React from 'react'
import Image from 'next/image'
import Check from '@/components/Check'
import Controller from '@/services/Controller'

interface Params {
  params: { id: String }
}

const TimeLine = async ({ params }: Params) => {
  if (isNaN(Number(params.id))) return <></>

  const id = Number(params.id)
  const dt = new Controller()
  const data = await dt.get_game_guides_byid(id)

  if (data.length === 0) return <></>

  return (
    <>
      {data.map(guide => (
        <div key={guide.id} className="collapse bg-base-200 mb-2">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium">
            {`${guide.id}.- ${guide.name}`}
          </div>

          <div className="collapse-content">
            <Check text={"Capítulo Completado"}></Check>

            {guide.adventure.map((adventure) => (
              <>
                {adventure.important ?
                  <div className='bg-accent-content p-2' key={adventure.id}>
                    {adventure.text}
                    <Check text={"(NG+) Completado"}></Check>
                  </div>
                  :
                  <p key={adventure.id}>{adventure.text}</p>
                }

                {adventure.img.map((img, index) => (
                  <Image
                    key={index}
                    className='mx-auto my-4'
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
    </>
  )
}

export default TimeLine