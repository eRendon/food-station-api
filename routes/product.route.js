"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
function ProductRoutes(productController) {
    const router = (0, express_1.Router)();
    router.get('/', productController.getAll.bind(productController));
    router.get('/:id', productController.getById.bind(productController));
    router.post('/', productController.create.bind(productController));
    router.put('/:id', productController.update.bind(productController));
    router.delete('/:id', productController.delete.bind(productController));
    return router;
}
exports.ProductRoutes = ProductRoutes;
