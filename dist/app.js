"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_repository_1 = require("./repository/product.repository");
const product_controller_1 = require("./controllers/product.controller");
const product_route_1 = require("./routes/product.route");
const db_1 = __importDefault(require("./sequelize/db"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_route_1 = require("./routes/user.route");
const user_controller_1 = require("./controllers/user.controller");
const user_repository_1 = require("./repository/user.repository");
const productRepository = new product_repository_1.SequelizeProductRepository();
const userRepository = new user_repository_1.UserRepository();
const productController = new product_controller_1.ProductController(productRepository);
const userController = new user_controller_1.UserController(userRepository);
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', 'http://localhost:49204', 'https://food-station.vercel.app']
}));
app.use('/api/products', (0, product_route_1.ProductRoutes)(productController));
app.use('/api/users', (0, user_route_1.UserRoutes)(userController));
console.log(app.routes);
app.listen(port, () => {
    db_1.default.sync({ force: false })
        .then(() => {
        console.log('base de datos sincronizada');
        // sequelizeApp.close()
    }).catch((e) => {
        console.log('base da datos no sincronizada', e);
        // sequelizeApp.close()
    });
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map