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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeProductRepository = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
class SequelizeProductRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return product_model_1.default.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return product_model_1.default.findByPk(id);
        });
    }
    create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return product_model_1.default.create(product);
        });
    }
    update(id, product) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingProduct = yield this.findById(id);
            if (existingProduct) {
                return existingProduct.update(product);
            }
            return null;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingProduct = yield this.findById(id);
            if (existingProduct) {
                yield existingProduct.destroy();
                return true;
            }
            return false;
        });
    }
}
exports.SequelizeProductRepository = SequelizeProductRepository;
//# sourceMappingURL=product.repository.js.map