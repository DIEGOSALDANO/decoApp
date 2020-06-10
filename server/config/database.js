const Sequelize = require('sequelize');

//Option1 parametros separately
module.exports = new Sequelize('palailadb', 'root', 'root', {
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

//Option2 Pasar la conección por una URI
//const sequelize = new Sequelize('URLPOSTGRES')

/**SI uso sqlite3 paso de este modo la db */
/* const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
  });
 */
