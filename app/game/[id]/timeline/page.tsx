import React from 'react'
import Guide_Ant from '@/components/game/Guide_Ant'
import Guide from '@/components/game/Guide'

interface PageParams {
  params : { id: string }
}

const TimeLine = async ({ params }: PageParams) => {
  if (isNaN(Number(params.id))) return <></>

  return (
    <>
      <Guide id_game={params.id}></Guide> 
            
      {/* <Guide_Ant id={params.id}></Guide_Ant> */}
    </>
  )
}

export default TimeLine