const { Router} = require ("express")

const router = Router()

router.get('/', (req, res)=>{
    try {
        throw new Error("teste");
        res.send("ola, mundo alura")
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
})

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