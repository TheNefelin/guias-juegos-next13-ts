import Controller_Ant from '@/services/controller_ant'
import Image from 'next/image'
import React from 'react'
import Check_Ant from './Check_Ant'

interface Props {
  id: string
}

const Guide_Ant = async (props: Props) => {
  if (isNaN(Number(props.id))) return <></>
  const id = Number(props.id)

  const dt = new Controller_Ant()
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
            <Check_Ant status={guide.status}></Check_Ant>
            {guide.adventure.map((adventure) => (
              <span key={adventure.id}>
                {adventure.important ?
                  <div className='bg-accent-content p-2'>
                    {adventure.text}
                    <Check_Ant status={adventure.status}></Check_Ant>
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

export default Guide_Ant