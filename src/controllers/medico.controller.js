//controlador de medico

module.exports = {
    listar : async (req,resp) =>{

        resp.json({
            message:"listado de medicos"
        })
    },

    crear: async (req, resp) =>{

    },

    listado: async (req,resp) => {

    },

    prueba: async (req,resp) => {
        try{
            console.log ('ejecutando prueba')
            resp.json({
                message: "hola mundo"
        })
        }catch (err){
            console.log(err)
        }
    }
}