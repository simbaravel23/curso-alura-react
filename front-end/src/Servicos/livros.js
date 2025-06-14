import axios from "axios"

const livrosAPI = axios.create({baseURL: "http://localhost:8000/livro" })

async function getLivros (){
    const response = await livrosAPI.get('/')

    return response.data
}

 export{
        getLivros
    }