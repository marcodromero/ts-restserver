"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    //logging:false descomentar para no ver la informacion de las consultas en la consola
});
exports.default = db;
//# sourceMappingURL=connection.js.map