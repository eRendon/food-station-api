"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const product_model_1 = require("../models/product.model");
const user_model_1 = require("../models/user.model");
const pg_1 = __importDefault(require("pg"));
const sequelizeApp = new sequelize_1.Sequelize('postgresql://eRendon:5Z6jlIQSRmdg@ep-crimson-truth-a5whwe7j.us-east-2.aws.neon.tech/food-station?sslmode=require', {
    dialectModule: pg_1.default
});
(0, product_model_1.initProductModel)(sequelizeApp);
(0, user_model_1.initUserModel)(sequelizeApp);
exports.default = sequelizeApp;
//# sourceMappingURL=db.js.map