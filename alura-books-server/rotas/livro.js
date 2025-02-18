const { Router} = require ("express")
const {getLivros, getLivro} = require ("../controllers/livros")
const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', (req,res)=>{
    res.send('teste req post')
})

router.patch ('/', (req,res)=>{
    res.send('teste req patch')
})

router.delete ('/', (req,res)=>{
    res.send('teste delete')
})
module.exports = router