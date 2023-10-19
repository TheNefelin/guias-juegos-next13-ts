import data from '@/data/data.json'

export default class Controller_Ant {
  constructor() {}

  async get_characters_byidgame(id: Number) {
    const obj = data.find(e => e.id === id);

    if (obj) {
      return obj.characters.map(e => ({
        id: e.id,
        nombre: e.name,
        descripcion: e.text,
        img_url: e.img,
        id_juego: id,
      }));
    }

    return [];
  }

  async get_source_byidgame(id: Number) {
    const obj = data.find(e => e.id === id);

    if (obj) {
      return obj.source.map(e => ({
        id: 0,
        nombre: e.name,
        img_url: e.url,
        id_juego: id,
      }));
    }

    return [];
  }

  // -------------------------------------------------------------------
  // -------------------------------------------------------------------

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

}


