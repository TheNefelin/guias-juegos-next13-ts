import data from '@/data/data.json'
import { GameType } from '@/services/model'

export default class Controller {
  constructor() {}

  async get_game_all() {
    const res: GameType[] = data.map(e => (
      {
        id: e.id,
        name: e.name,
        imgCover: e.imgCover,
        imgBackground: e.imgBackground,
        text: e.text
      }
    ))

    return res
  }

  async get_game_byid(id: Number) {
    const res: GameType[] = data.filter(e => e.id === id).map(e => (
      {
        id: e.id,
        name: e.name,
        imgCover: e.imgCover,
        imgBackground: e.imgBackground,
        text: e.text
      }
    ))

    return res
  }

  async test() {
    const res: GameType[] = data.filter(e => e.id === 1)
    return res
  }
}
