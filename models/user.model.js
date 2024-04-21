"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUserModel = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
function initUserModel(sequelize) {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        password: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        email: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
            unique: true,
        },
        rol: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'users',
        sequelize, // Necesitas pasar la conexión sequelize como segundo argumento
    });
}
exports.initUserModel = initUserModel;
exports.default = User;
