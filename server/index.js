const express = require('express');
const path = require('path');
const routes = require('./routes')

const config = require('./config');


 // npm i -S sequelize mysql2 instala sequelize cli
 /* db.authenticate()
 .then(() => {
   console.log('Conexión a la Database');
 })
 .catch(err => {
   console.error('Hubo un error al conectar la Database', err);
 });
 */

// validar si estamos
/* const config = configs[app.get('env')];
 */
/* app.locals.titulo = config.nombredesitio; */


//Instanciar express
const app = express();

//habilitar express
app.set('view engine', 'pug');

//añadir vistas
app.set('views', path.join(__dirname, './views'));

//Leer recursos estaticos
app.use(express.static('public'));

//muestra el año actual
app.use((req, res, next)=>{
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.pepe = '------------->'
    console.log(res.locals)
    return next();
})

app.use('/', routes() )

app.listen(5000);