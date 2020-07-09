const Sequelize = require('sequelize');
const db = require('../config/database');


const Producto = db.define('productos', { 
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    },
    disponible: {
        type: Sequelize.BOOLEAN, defaultValue: true
    },
    color: {
        type: Sequelize.STRING
    },
    diseno: {
        type: Sequelize.STRING
    },
    medidas: {
        type: Sequelize.STRING
    },

});

module.exports = Producto;

