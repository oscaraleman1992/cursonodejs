const express = require('express');
const globalconst = require('./const/globalconsts')//importamos el archivo de constantes
const routerconfig = require ('./routes/index.routes')

const configuracionApi = (app) =>{
    app.use(express.json()) //para que la api pueda recibir json
    app.use(express.urlencoded({extended: true})) //para que la api pueda recibir formularios
    return
}

const configuracionRouter = (app) => {
    app.use ('/api/' , routerconfig.rutas_init())
}

const init = () =>{
    const app = express() // crear instancia de express
    configuracionApi(app)//configurar la api
    configuracionRouter(app)//configurar las rutas
    

    app.listen(globalconst.PORT);
    console.log('servidor corriendo en el puerto' + globalconst.PORT);
}

init()
/*
app.get('/' , (req , resp) =>{
    resp.send('hola mundo');
});

//-----rutas-----

// cuando es get recibo el dato por la url 
app.get('/:nombre', (req,resp) =>{
    resp.send('hola' + req.params.nombre);//envia una respuesta y extrae el nombre del params
});

//cuando es post recibo el dato por el body
app.post('/', (req, resp) => {
    res.send('hola' + req.body.nombre); //envia una respuesta y extraigo el nombre del body
})

*/