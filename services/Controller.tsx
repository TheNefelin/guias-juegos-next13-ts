import data from '@/data/data.json'
import { GameMenuType, GameSourceType, GameType } from '@/services/model'

export default class Controller {
  constructor() { }

  async get_game_all() {
    return data.map(e => (
      {
        id: e.id,
        name: e.name,
        imgCover: e.imgCover,
        imgBackground: e.imgBackground,
        text: e.text
      }
    ))
  }

  async get_game_byid(id: Number) {
    return data.filter(e => e.id === id).map(e => (
      {
        id: e.id,
        name: e.name,
        imgCover: e.imgCover,
        imgBackground: e.imgBackground,
        text: e.text
      }
    ))
  }

  async get_game_menu_byid(id: Number) {
    return data.filter(e => e.id === id).map(e => (
      {
        name: e.name,
        cantSource: e.source.length,
        cantGuides: e.guides.length
      }
    ))
  }

  async get_game_source_byid(id: Number) {
    const obj = data.find(e => e.id === id);

    if (obj) {
      return obj.source.map(e => ({
        name: e.name,
        url: e.url
      }));
    }
  
    return [];
  }

  async test(id: number) {
    data.filter(e => e.id === id).forEach(e => {
      const res: GameSourceType[] = e.source.map(e => (
        {
          name: e.name,
          url: e.url
        }
      ))

      console.log(res)
    })
  }
}
