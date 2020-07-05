const express = require('express');
const router = express.Router();

const Producto = require('../models/Productos')

module.exports = function() {
    router.get('/', (req, res) => {
        res.render('index')
    });
    
    router.get('/nosotras', (req, res) => {
        res.render('nosotras', {
            pagina: 'Sobre nosotras'
        });
    });
    
    router.get('/comprar', (req, res) => {
        res.render('comprar')
    });

    router.get('/catalogo', (req, res) => {
        Producto.findAll()
            .then(productos => res.render('catalogo', {
                pagina: 'Catalogo de productos',
                productos
            }))
            .catch(error => console.log(error))
    });

    /* router.get('/catalogo/:id', (req, res) => {
        producto.findAll((req.params.id)
           // res.send(req.params.id)

            .then( producto => res.render('producto', {
                producto
            }))
            .catch(error => console.log(error))
    });
 */
    return router;
}