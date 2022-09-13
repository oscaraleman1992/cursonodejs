//se encarga de conectar todas las rutas

const { Router } = require("express")
const usuarioRoutes = require('./usuario.routes')//importamos el archivo de las rutas de usuario 
const medicoRoutes = require ('./medico.routes')//importamos el archivo de las rutas de medico
const tratamientoRoutes = require('./tratamiento.routes')//importamos el archivo de las rutas de tratammiento

const rutas_init = () =>{// aca se ponen todas las rutas que existen
const router = Router()// crear una instancia de express.Router()
router.use ("/usuario",usuarioRoutes) //para acceder a las rutas de los usuarios
router.use ("/medico",medicoRoutes)
router.use ("/tratamiento",tratamientoRoutes)
return router // retornar el router
}

module.exports = {rutas_init}