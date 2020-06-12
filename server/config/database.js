    const Sequelize = require('sequelize');

//Option1 parametros separaso
module.exports = new Sequelize('muebleapp', 'root', 'root', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
   operatorsAliases: false
});
