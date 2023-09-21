import data from '@/data/data.json'
import { LSType } from './model';
import { NumericLiteral } from 'typescript';

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
        id: e.id,
        name: e.name,
        text: e.text,
        img: e.img
      }));
    }

    return [];
  }

  async get_game_guides_byid(id: Number) {
    const obj = data.find(e => e.id === id)

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

  async set_game_guides_byid(obj: LSType) {
    const item = get_local_storage()

    const index = item.findIndex(el =>
      el.id_game === obj.id_game &&
      el.id_guide === obj.id_guide &&
      el.id_adventure === obj.id_adventure
    )

    if (index !== -1) {
      item[index].status = obj.status;
    } else {
      item.push(obj);
    }

    set_local_storage(item)
  }
}

export const get_local_storage = () => {
  const get_data: LSType[] = JSON.parse(localStorage.getItem("data") || "[]");
  return get_data
}

const set_local_storage = (set_data: LSType[]) => {
  localStorage.setItem("data", JSON.stringify(set_data));
}