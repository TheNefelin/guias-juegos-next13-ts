import React from 'react'
import Link from 'next/link'

const Links = () => {
  return (
    <div className='flex flex-col gap-1 pl-16 py-4 bg-base-200'>
      <Link className='link' target="_blank" href={"https://guiamania.com/41154/"}>Guia</Link>
      <Link className='link ' target="_blank" href={"https://www.thegamer.com/chrono-cross-custom-frame-locations-how-to-get/"}>Window Frame</Link>
      <Link className='link' target="_blank" href={"https://guiltybit.com/como-conseguir-las-tecnicas-definitivas-de-todos-los-personajes-en-chrono-cross/"}>Tecnicas</Link>
      <Link className='link' target="_blank" href={"https://game8.co/games/Chrono-Cross-Radical-Dreamers-Edition/archives/375630"}>Finales</Link>
    </div>
  )
}

export default Links