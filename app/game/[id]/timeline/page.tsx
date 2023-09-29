import React from 'react'
import Image from 'next/image'
import Controller from '@/services/controller'
import Check from '@/components/Check'
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
          <div id={`G-${id}-${guide.id}-0`} className={`collapse-title text-lg font-medium ${guide.status ? "bg-success text-success-content" : ""}`}>
            {`${guide.id}.- ${guide.name}`}
          </div>

          <div key={guide.id} className="collapse-content">
            <Check text={"Capítulo Completado"} status={guide.status} id_game={id} id_guide={guide.id} id_adventure={0}></Check>
            {guide.adventure.map((adventure) => (
              <span key={adventure.id}>
                {adventure.important ?
                  <div className='bg-accent-content p-2'>
                    {adventure.text}
                    <Check text={"Completado"} status={adventure.status} id_game={id} id_guide={guide.id} id_adventure={adventure.id}></Check>
                  </div>
                  :
                  <p>{adventure.text}</p>
                }
                {adventure.img.length > 0 &&
                  <div className='my-4 flex flex-wrap gap-4 justify-center'>
                    {adventure.img.map((img, index) => (
                      <Image
                        key={index}
                        className='shadow-md'
                        src={img}
                        alt="Imagen de Guia"
                        height={100}
                        width={500}
                        blurDataURL={img}
                        placeholder="blur"
                      ></Image>
                    ))}
                  </div>
                }
              </span>
            ))}
          </div>

        </div>
      ))}
    </>
  )
}

export default TimeLine