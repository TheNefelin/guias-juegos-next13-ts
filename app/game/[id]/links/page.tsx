import React from 'react'
import Link from 'next/link'
import Controller_Ant from '@/services/controller_ant'
import Controller from '@/services/controller'
import { GameLink } from '@/services/model'

interface PageParams {
  params : { id: string }
}

const Links = async ({ params }: PageParams) => {
  if (isNaN(Number(params.id))) return <></>
  const id = Number(params.id)

  // const dt_ant = new Controller_Ant()
  // const data_ant = await dt_ant.get_source_byidgame(id)

  const dt = new Controller()
  const data = await dt.get_source_byidgame(id)

  if (data.length === 0) return <></>

  return (
    <div className='flex flex-col gap-1 pl-16 py-4 bg-base-200 shadow-md mb-4'>
      {
        data.map((e:GameLink) => (
          <Link key={e.id} className='link' target="_blank" href={e.img_url}>{e.nombre}</Link>
        ))
      }
    </div>
  )
}

export default Links