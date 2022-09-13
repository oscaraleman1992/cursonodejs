const router = require("express") . Router()

const medicoController = require('../controllers/medico.controller')// importar el archivo de control de medico

router.get ('/listar', medicoController.listar)
router.post ('/',medicoController.crear)
router.get ('/:idusuario' , medicoController.listado)

module.exports = router