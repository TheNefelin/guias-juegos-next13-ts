export default class Controller {
  url: string

  constructor() {
    this.url = "https://bsite.net/metalflap"
  }

  data_get_all = async (id_game: number, user: string) => {
      return await Promise.all([
        this.get_guides_byidgame(id_game, user),
        this.get_adventures_byidgame(id_game, user),
        this.get_adventures_img_byidgame(id_game),
    ])
    .then(data => {
      return data
    })
    .catch(err => {
      console.log("Promesa No Resuelta: controller2.tsx", err)
      return []
    })
  }

  post_user = async (body:any) => { return await fnFetching(`${this.url}/gj_usuarios/`, { ...option_post(body), cache: 'no-store' }) }
  put_state_guide = async (body:any) => { return await fnFetching(`${this.url}/gj_usuarios/estado_guia/`, { ...option_put(body), cache: 'no-store' }) }
  put_state_adventure = async (body:any) => { return await fnFetching(`${this.url}/gj_usuarios/estado_aventura/`, { ...option_put(body), cache: 'no-store' }) }

  get_game_all = async () => { return await fnFetching(`${this.url}/gj_juegos/`, { ...option_get, cache: 'no-store' }) }
  get_game_byid = async (id_game: number) => { return await fnFetching(`${this.url}/gj_juegos/${id_game}`, { ...option_get, cache: 'no-store' }) }

  get_background_all = async () => { return await fnFetching(`${this.url}/gj_background_img/`, { ...option_get, cache: 'no-store' }) }
  get_background_byidgame = async (id_game: Number) => { return await fnFetching(`${this.url}/gj_background_img/${id_game}`, { ...option_get, cache: 'no-store' }) }

  get_characters_all = async () => { return await fnFetching(`${this.url}/gj_personajes/`, { ...option_get, cache: 'no-store' }) }
  get_characters_byidgame = async (id_game: number) => { return await fnFetching(`${this.url}/gj_personajes/${id_game}`, { ...option_get, cache: 'no-store' }) }

  get_source_all = async () => { return await fnFetching(`${this.url}/gj_fuentes/`, { ...option_get, cache: 'no-store' }) }
  get_source_byidgame = async (id_game: number) => { return await fnFetching(`${this.url}/gj_fuentes/${id_game}`, { ...option_get, cache: 'no-store' }) }

  get_guides_all = async () => { return await fnFetching(`${this.url}/gj_guias/`, { ...option_get, cache: 'no-store' }) }
  get_guides_byidgame = async (id_game: number, user: string) => { return await fnFetching(`${this.url}/gj_guias/${id_game}?User=${user? user : "na"}`, { ...option_get, cache: 'no-store' }) }

  get_adventures_all = async () => { return await fnFetching(`${this.url}/gj_aventuras/`, { ...option_get, cache: 'no-store' }) }
  get_adventures_byidgame = async (id_game: number, user: string) => { return await fnFetching(`${this.url}/gj_aventuras/${id_game}?User=${user? user : "na"}`, { ...option_get, cache: 'no-store' }) }

  get_adventures_img_all = async () => { return await fnFetching(`${this.url}/gj_aventuras_img/`, { ...option_get, cache: 'no-store' }) }
  get_adventures_img_byidgame = async (id_game: number) => { return await fnFetching(`${this.url}/gj_aventuras_img/${id_game}`, { ...option_get, cache: 'no-store' }) }

 }

//execute all fetching
async function fnFetching(api: string, obj: any) {
  try {
    const res = await fetch(api, obj)

    if (!res.ok) {
      console.log("Error Fetch en el OK", res)
      return []
    }

    const data = await res.json()
    return data
  } catch (err: any) {
    console.log("Error Fetch en el Try", err)
    return []
  }
}

const option_get = {
  method: "GET",
  headers: {
    "Accept": "application/json"
  },
}

const option_post = (body:any) => {
  return {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "ApiKey": process.env.API_KEY
    },
    body: JSON.stringify(body)
  }
}

const option_put = (body:any) => {
  return {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "ApiKey": process.env.API_KEY
    },
    body: JSON.stringify(body)
  }
}