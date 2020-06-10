const express = require('express');
const router = express.Router();


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
        res.render('catalogo')
    });

    return router;
}