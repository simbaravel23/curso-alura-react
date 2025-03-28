
const { getTodosLivros, getLivrosPorId, insereLivro, modificaLivro, deletaLivroPorId} = require("../servicos/livro")

function getLivros(req, res) {
     try {
            const livros = getTodosLivros()
            res.send(livros)
        } catch(error){
            res.status(500)
            res.send(error.message)
        }
}

function getLivro(req, res) {
    try {
        const id = req.params.id  
        const livro = getLivrosPorId(id)
        res.send(livros)
       } catch(error){
        res.status(500)
        res.send(error.message)
       }
}

function postLivro(req, res){
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send('livro inserido com sucesso')
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req,res){
    try{
        const id = req.params.id
        const body = req.body
        modificaLivro(body,id)
        req.send("livro modiicado")
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id
        deletaLivroPorId(id)
        res.send("livro deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
    

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    modificaLivro,
    patchLivro,
    deleteLivro
}