const { Router} = require ("express")
const {getFavoritos,getFavoritos, postFavorito, deleteFavorito} = require ("../controllers/favorito")

const router = Router()

router.get('/', getFavoritos)

router.get('/:id', getFavoritos)

router.post('/', postFavorito)

router.delete ('/:id', deleteFavorito)
    

module.exports = router