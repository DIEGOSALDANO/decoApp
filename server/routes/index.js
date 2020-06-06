const express = require('express');
const router = express.Router();


module.exports = function() {
    router.get('/', (req, res) => {
        res.render('index')
    });
    
    router.get('/nosotros', (req, res) => {
        res.render('nosotros')
    });
    
  /*   router.get('/comprar', (req, res) => {
        res.render('compre aquí')
    }); */

    return router;
}