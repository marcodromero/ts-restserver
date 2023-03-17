import {Sequelize} from 'sequelize';

const db = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    //logging:false descomentar para no ver la informacion de las consultas en la consola
});

export default db;