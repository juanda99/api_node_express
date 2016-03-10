var express = require('express') //llamamos a Express
var app = express()                

var port = process.env.PORT || 8080  // establecemos nuestro puerto

// para establecer las distinaas rutas, necesitamos instanciar el express router
var router = express.Router()             

//establecemos nuestra primera ruta, mediante get.
router.get('/', function(req, res) {
    res.json({ mensaje: '¡Hola Mundo!' })  
})

router.get('/:nombre', function(req, res) {
    res.json({ mensaje: '¡Hola ' + req.params.nombre })  
})


// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
app.use('/api', router)

// START THE SERVER
// =============================================================================
app.listen(port)
console.log('API escuchando en el puerto ' + port)