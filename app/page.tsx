import Image from "next/image"
import Link from "next/link"

import img from '@/img/StarWars.gif'
import imgTwitch from '@/img/twitch.png'
import imgYoutube from '@/img/youtube.png'
import imgWeb from '@/img/web.png'

export default function Home() {
  return (
    <main className='card-body bg-base-200'>
      <h1 className="card-title uppercase">Bienbenidos !!! &#129409;</h1>
      <p className="indent-4">Esta página nació porque cada vez que juego Chrono Cross y dejo el juego pendiente por mucho tiempo, ya no recuerdo en qué misión voy.</p>
      <Image
        className="m-auto"
        src={img}
        alt="Star Wars"
        height={700}
        width={700}
      >
      </Image>
      <div className="pt-5 flex gap-4 m-auto">
        <Link
          target="_blacnk" 
          href={"https://www.twitch.tv/TheNefelin"}>
          <Image
            src={imgTwitch}
            alt="Twitch"
            height={40}
            width={40}
          ></Image>
        </Link>
        <Link
          target="_blacnk" 
          href={"https://www.youtube.com/@TheNefelin"}>
          <Image
            src={imgYoutube}
            alt="Youtube"
            height={40}
            width={40}
          ></Image>
        </Link>
        <Link
          target="_blacnk" 
          href={"https://www.francisco-dev.cl/"}>
          <Image
            src={imgWeb}
            alt="Portafolio"
            height={40}
            width={40}
          ></Image>
        </Link>
      </div>
    </main>
  )
}
