"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initProductModel = void 0;
const sequelize_1 = require("sequelize");
class Product extends sequelize_1.Model {
}
function initProductModel(sequelize) {
    Product.init({
        category: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false
        },
        rating: {
            type: sequelize_1.DataTypes.JSONB,
            allowNull: true
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Products'
    });
}
exports.initProductModel = initProductModel;
exports.default = Product;
