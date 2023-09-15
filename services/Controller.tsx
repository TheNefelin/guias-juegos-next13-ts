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
        cantCharacters: e.characters.length,
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

  async get_game_characters_byid(id: Number) {
    const obj = data.find(e => e.id === id);

    if (obj) {
      return obj.characters.map(e => ({
        name: e.name,
        img: e.img
      }));
    }

    return [];
  }

  async get_game_guides_byid(id: Number) {
    const obj = data.find(e => e.id === id);

    if (obj) {
      return obj.guides.map(e => ({
        id: e.id,
        name: e.name,
        status: e.status,
        adventure: e.adventure
      }));
    }

    return [];
  }

  async test(id: number) {

  }
}