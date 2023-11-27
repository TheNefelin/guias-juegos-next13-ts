import React from 'react'
import Guide from '@/components/game/Guide'

interface PageParams {
  params : { id: string }
}

const TimeLine = async ({ params }: PageParams) => {
  if (isNaN(Number(params.id))) return <></>

  return (
    <>
      <Guide id_game={params.id}></Guide> 
    </>
  )
}

export default TimeLine