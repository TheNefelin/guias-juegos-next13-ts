import React from 'react'
import Image from 'next/image'
import Check from '@/components/Check'
import Controller from '@/services/controller'
import { ParamsPage } from '@/services/model'

const TimeLine = async ({ params }: ParamsPage) => {
  if (isNaN(Number(params.id))) return <></>

  const id = Number(params.id)
  const dt = new Controller()
  const data = await dt.get_game_guides_byid(id)

  if (data.length === 0) return <></>

  return (
    <>
      {data.map(guide => (
        <div key={guide.id} className="collapse collapse-arrow bg-base-200 mb-2 shadow-md">
          <input type="checkbox" />
          <div className={`collapse-title text-lg font-medium ${guide.status ? "bg-success text-success-content" : ""}`}>
            {`${guide.id}.- ${guide.name}`}
          </div>

          <div className="collapse-content">
            <Check text={"Capítulo Completado"} status={guide.status} id_game={id} id_guide={guide.id} id_adventure={0}></Check>

            {guide.adventure.map((adventure) => (
              <>
                {adventure.important ?
                  <div className='bg-accent-content p-2' key={adventure.id}>
                    {adventure.text}
                    <Check text={"Completado"} status={adventure.status} id_game={id} id_guide={guide.id} id_adventure={adventure.id}></Check>
                  </div>
                  :
                  <p key={adventure.id}>{adventure.text}</p>
                }

                {adventure.img.map((img, index) => (
                  <Image
                    key={index}
                    className='mx-auto my-4 shadow-md'
                    src={img}
                    alt="Imagen de Guia"
                    height={100}
                    width={500}
                  // blurDataURL={img}
                  // placeholder="blur"
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