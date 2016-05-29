var express = require('express') //llamamos a Express
var bodyParser = require('body-parser')
/*toda la configuración de bbdd la hacemos en un fichero a parte*/
require('./db')

var app = express()                
var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())            

// ahora en vez de llamar a las rutas desde aquí, lo haremos en un fichero separado
// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
const router = require('./routes');
app.use('/api', router)

app.listen(port)
console.log('API escuchando en el puerto ' + port)

module.exports = app