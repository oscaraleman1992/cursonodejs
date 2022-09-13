const router = require("express") . Router()

const tratamientoController = require('../controllers/tratamiento.controller')// importar el archivo de control de tratamiento

router.get ('/prueba', tratamientoController.prueba)
router.post ('/',tratamientoController.crear)
router.get ('/:idusuario' , tratamientoController.listado)

module.exports = router