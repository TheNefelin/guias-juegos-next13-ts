
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
  id: number,
  name: string,
  text: string,
  img: string
}

export interface GameGuidesType {
  id: number;
  name: string;
  status: boolean;
  adventure: [{
      id: number;
      text: string;
      important: boolean;
      status: boolean;
      img: string[];
  }];
}

export interface LSType {
  id_game: number,
  id_guide: number,
  id_adventure: number,
  status: boolean
}

export interface ParamsPage {
  params: { id: string }
}

export interface ParamsLayout {
  children: React.ReactNode
  params: { id: String }
}

export interface PropsCheck {
  text: string,
  status: boolean
  id_game: number,
  id_guide: number,
  id_adventure: number
}
