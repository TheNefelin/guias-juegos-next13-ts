import React from 'react'
import Link from 'next/link'
import Controller from '@/services/Controller'

interface Params {
  params: { id: string }
}

const Links = async ({ params }: Params) => {
  if (isNaN(Number(params.id))) return <></>

  const id = Number(params.id)
  const dt = new Controller()
  const data = await dt.get_game_source_byid(id)

  if (data.length === 0) return <></>

  return (
    <div className='flex flex-col gap-1 pl-16 py-4 bg-base-200 shadow-md mb-4'>
      {
        data.map((e, index) => (
          <Link key={index} className='link' target="_blank" href={e.url}>{e.name}</Link>
        ))
      }
    </div>
  )
}

export default Links