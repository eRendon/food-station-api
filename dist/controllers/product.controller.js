"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
class ProductController {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.productRepository.findAll();
                yield res.status(200).json(products);
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const product = yield this.productRepository.findById(id);
                if (product) {
                    res.status(200).json(product);
                }
                else {
                    res.status(404).json({ error: 'Product not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productData = req.body;
                const product = yield this.productRepository.create(productData);
                res.status(201).json(product);
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const productData = req.body;
                const product = yield this.productRepository.update(id, productData);
                if (product) {
                    res.json(product);
                }
                else {
                    res.status(404).json({ error: 'Product not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const success = yield this.productRepository.delete(id);
                if (success) {
                    const products = yield this.productRepository.findAll();
                    res.status(200).json(products);
                }
                else {
                    res.status(404).json({ error: 'Product not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map