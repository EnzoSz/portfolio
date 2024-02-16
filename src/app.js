//requerimos el modulo express
const express = require('express');
//importamos el modulo path
const path = require('path');

//creamos una instancia de express
const app = express();
//obtenemos la ruta absoluta de la carpeta public
const publicPath = path.join(__dirname, '../public');
//le decimos a express que use el directorio public
app.use(express.static(publicPath));

//cargamos el motor de plantillas
app.set('view engine', 'ejs');
//configuramos la carpeta views
app.set('views', path.join(__dirname, './views'));
//importamos los archivos de rutas
const homeRoutes = require('./routes/homeRoutes');

//usamos las rutas
app.use('/', homeRoutes);

//levantamos el servidor en puerto 4030
app.listen(4030, () => {
    console.log('Servidor corriendo en http://localhost:4030');
});