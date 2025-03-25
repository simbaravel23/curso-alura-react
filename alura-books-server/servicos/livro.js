const fs = require("fs")

function getTodosLivros(){
    return JSON.parse (fs.readFileSync("livros.json"))
}

function getLivrosPorId(id){
    const livros= JSON.parse (fs.readFileSync("livros.json"))

   const livroFiltrado = livros.filter ( livro => livro.id === id) [0]
   return livroFiltrado

}

function insereLivro(livroNovo){
    const livros= JSON.parse (fs.readFileSync("livros.json"))
    const novaListaDeLivros = [... livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id){
    let livrosAtuais= JSON.parse (fs.readFileSync("livros.json"))
    const indiceModiicado = livrosAtuais.findIndex( livro=> livro.id===id)
    const conteudoMudado = { ... livrosAtuais[indiceModiicado], ...modificacoes}
    livrosAtuais[indiceModiicado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}
module.exports =  {
    getTodosLivros,
    getLivrosPorId,
    insereLivro,
    modificaLivro
}