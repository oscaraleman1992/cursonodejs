// controlador de usuario

module.exports = {
    listar : async (req,resp) =>{

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