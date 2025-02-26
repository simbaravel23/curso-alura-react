const { Router} = require ("express")
const {getLivros, getLivro, postLivro} = require ("../controllers/livros")
const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)


router.patch ('/', (req,res)=>{
    res.send('teste req patch')
})

router.delete ('/', (req,res)=>{
    res.send('teste delete')
})
module.exports = router