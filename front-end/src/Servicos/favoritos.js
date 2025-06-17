import axios from "axios"

const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos" })

async function getFavoritos (){
    const response = await favoritosAPI.get('/')

    return response.data
}

async function postFavorito(){
    await favoritosAPI.post( `/$(id)`)
}
async function deleteFavorito(){
    await favoritosAPI.delete( `/$(id)`)
}

 export{
        getFavoritos,
        postFavorito,
        deleteFavorito
    }