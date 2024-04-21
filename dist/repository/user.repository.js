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
exports.UserRepository = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
class UserRepository {
    create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ username, password, email, rol }) {
            try {
                return yield user_model_1.default.create({ username, password, email, rol });
            }
            catch (error) {
                console.log(error);
                throw new Error('Unable to create user');
            }
        });
    }
    findUserByUsername(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield user_model_1.default.findOne({ where: { email, password } });
            }
            catch (error) {
                throw new Error('Unable to find user');
            }
        });
    }
    findUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield user_model_1.default.findByPk(id);
            }
            catch (error) {
                throw new Error('Unable to find user');
            }
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map