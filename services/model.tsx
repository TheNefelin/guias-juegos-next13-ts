
export interface GameType {
  id: number,
  name: string,
  imgCover: string,
  imgBackground: String,
  text: String
}

export interface GameMenuType {
  name: string,
  cantSource: number,
  cantGuides: number
}

export interface GameSourceType {
  name: string,
  url: string
}

export interface GameGuidesType {
  id: number
  name: string,
  status: boolean,
  adventure: [
    {
      id: number,
      texto: string,
      img: string,
      importante: boolean
    }
  ]
}