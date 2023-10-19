import React from 'react'
import Image from 'next/image'
import Controller from '@/services/controller'
import CheckGuide from '@/components/game/CheckGuide'
import CheckAdventure from '@/components/game/CheckAdventure'
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { GameAdventure, GameAdventureImg, GameGuide } from '@/services/model'

interface Props {
  id_game: string
}

const Guide = async (props: Props) => {
  if (isNaN(Number(props.id_game))) return <></>
  const id = Number(props.id_game)

  const session = await getServerSession(authOptions)
  const email = session?.user?.email ? session.user.email : ""
  const token = session?.accessToken ? session.accessToken : ""

  const dt = new Controller()
  const data = await dt.data_get_all(id, email)

  return (
    <>
      { 
        data[0].length > 0 && data[0].map((guide: GameGuide, index: number) => (
          <div key={guide.id} className="collapse collapse-arrow bg-base-200 mb-2 shadow-md">
            <input type="checkbox" />
            <div id={`G-${guide.id}`} className={`collapse-title text-lg font-medium`}>
              {`${index + 1}.- ${guide.nombre}`}
            </div>

            <div key={guide.id} className="collapse-content">
              <CheckGuide
                status={guide.estado}
                id_guide={guide.id}
                email={email}
                token={token}
              ></CheckGuide>
              {
                data[1].filter((filter: GameAdventure) => filter.id_guia === guide.id).map((adventure: GameAdventure) => (
                  <span key={adventure.id}>
                    {adventure.importante ?
                      <div className='bg-accent-content p-2'>
                        ✓ {adventure.descripcion}
                        <CheckAdventure
                          status={adventure.estado}
                          id_adventure={adventure.id}
                          email={email}
                          token={token}
                        ></CheckAdventure>
                      </div>
                      :
                      <p>✓ {adventure.descripcion}</p>
                    }
                    {data[2].filter((filter: GameAdventureImg) => filter.id_aventura === adventure.id).length > 0 &&
                      <div className='my-4 flex flex-wrap gap-4 justify-center'>
                        {
                          data[2].filter((filter: GameAdventureImg) => filter.id_aventura === adventure.id).map((img: GameAdventureImg) => (
                            <Image
                              key={img.id}
                              className='shadow-md'
                              src={img.img_url}
                              alt="Imagen de Guia"
                              height={100}
                              width={500}
                              blurDataURL={img.img_url}
                              placeholder="blur"
                            ></Image>
                          ))
                        }
                      </div>
                    }
                  </span>
                ))
              }
            </div>

          </div>
        ))
      }
    </>
  )
}

export default Guide