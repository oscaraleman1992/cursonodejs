// rutas de los usuarios

const router = require("express") . Router()

const usuarioController = require('../controllers/usuario.controller')// importar el archivo de control de usuarios

router.get ('/prueba', usuarioController.prueba)
router.post ('/',usuarioController.crear)
router.get ('/:idusuario' , usuarioController.listado)

module.exports = router