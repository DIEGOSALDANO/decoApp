const express = require('express');
const path = require('path');
const routes = require('./routes')

//Instanciar express
const app = express();

//habilitar express
app.set('view engine', 'pug');

//añadir vistas
app.set('views', path.join(__dirname, './views'));

//Leer recursos estaticos
app.use(express.static('public'));

app.use('/', routes() )

app.listen(5000);