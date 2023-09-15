
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

export interface GameCharactersType {
  name: string,
  text: string,
  img: string
}

export interface GameGuidesType {
  id: number
  name: string,
  status: boolean,
  adventure: [
    {
      id: number,
      text: string,
      important: boolean,
      status: boolean,
      img: []
    }
  ]
}
