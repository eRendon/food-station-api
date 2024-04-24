"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
function ProductRoutes(productController) {
    const router = (0, express_1.Router)();
    router.get('/', auth_middleware_1.default, productController.getAll.bind(productController));
    router.get('/:id', auth_middleware_1.default, productController.getById.bind(productController));
    router.post('/', auth_middleware_1.default, productController.create.bind(productController));
    router.put('/:id', auth_middleware_1.default, productController.update.bind(productController));
    router.delete('/:id', auth_middleware_1.default, productController.delete.bind(productController));
    return router;
}
exports.ProductRoutes = ProductRoutes;
//# sourceMappingURL=product.route.js.map