import Link from "next/link"
import Image from "next/image"
import img from "@/img/hizoka.png"

interface Props {
  id_guia_acordion: string
}

const BtnUpGuia = (props: Props) => {
  return (
    <Link
      href={`#${props.id_guia_acordion}`}
      className="grid justify-end"
    >
      <Image
        src={img}
        alt='Subir'
        height={40}
        width={40}
      ></Image>
    </Link>
  )
}

export default BtnUpGuia