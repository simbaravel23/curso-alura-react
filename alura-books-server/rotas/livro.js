const { Router} = require ("express")
const {getLivros, getLivro, postLivro, patchLivro} = require ("../controllers/livros")
const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch ('/:id', patchLivro)


router.delete ('/', (req,res)=>{
    res.send('teste delete')
})
module.exports = router