
export interface Game {
  id: number,
  nombre: string,
  img_cover: string,
  descripcion: String,
}

export interface GameImgBackground {
  id: number,
  img_url: string,
  id_juego: number,
}

export interface GameLink {
  id: number,
  nombre: string,
  img_url: string,
  id_juego: number,
}

export interface GameCharacter {
  id: number,
  nombre: string,
  descripcion: string,
  img_url: string,
  id_juego: number,
}

export interface GameGuide {
  id: number,
  nombre: string,
  orden: number,
  estado: boolean,
  id_juego: number,
}

export interface GameAdventure {
  id: number,
  descripcion: string,
  importante: boolean,
  orden: number,
  estado: boolean,
  id_guia: number,
}

export interface GameAdventureImg {
  id: number,
  img_url: string,
  orden: number,
  id_aventura: number,
}

// export interface ParamsLayout {
//   children: React.ReactNode
//   params: { id: String }
// }
