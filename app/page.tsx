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
      </div>
    </main>
  )
}
