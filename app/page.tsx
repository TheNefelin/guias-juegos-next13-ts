import Link from "next/link"
import Image from "next/image"
import img from '@/img/StarWars.gif'

export default function Home() {
  return (
    <main>
      <div className='card-body bg-base-200'>
        <p>Esta página nació porque cada vez que juego Chrono Cross y dejo el juego pendiente por mucho tiempo, ya no recuerdo en qué misión estoy.</p>
        <Image
          src={img}
          alt="Star Wars"
          height={100}
        >
        </Image>
        <div>
          <Link target="_blank" href={"https://www.thegamer.com/chrono-cross-custom-frame-locations-how-to-get/"}>Window Frame</Link>
        </div>
        <div>
          <Link target="_blank" href={"https://guiamania.com/41154/"}>Guia A</Link>
        </div>
        <div>
          <Link target="_blank" href={"https://guiltybit.com/como-conseguir-las-tecnicas-definitivas-de-todos-los-personajes-en-chrono-cross/"}>Tecnicas A</Link>
        </div>
        <div>
          <Link target="_blank" href={"https://game8.co/games/Chrono-Cross-Radical-Dreamers-Edition/archives/375630"}>Finales</Link>
        </div>
      </div>
    </main>
  )
}
