
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

        if(id && Number (id)){
            const livro = getLivrosPorId(id)
            res.send(livros)
        } else {
            res.status(422)
            res.send('id invalido')
        }
       
       } catch(error){
        res.status(500)
        res.send(error.message)
       }
}

function postLivro(req, res){
    try {
        const livroNovo = req.body
        if(req.body.nome){
            insereLivro(livroNovo)
            res.status(201)
            res.send('livro inserido com sucesso')
        }else{
            res.status(422)
            res.send('O campo nome é obrigatório')
        }

       
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req,res){
    try{
        const id = req.params.id

        if(id && Number (id)){

        const body = req.body
        modificaLivro(body,id)
        req.send("livro modiicado")
    } else {
            res.status(422)
            res.send('id invalido')
        }

    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number (id)){
        deletaLivroPorId(id)
        res.send("livro deletado com sucesso") 
    } else {
            res.status(422)
            res.send('id invalido')
        }
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