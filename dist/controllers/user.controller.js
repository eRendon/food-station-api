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
exports.UserController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password, email, rol } = req.body;
                yield this.userRepository.create({ username, password, email, rol });
                res.status(201).json({ message: 'User created successfully' });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield this.userRepository.findUserByUsername(email, password);
                console.log('el usuario ssss');
                if (!user) {
                    return res.status(401).json({ error: 'Invalid credentials' });
                }
                const token = jsonwebtoken_1.default.sign({ userId: user.id }, 'secret_key', { expiresIn: '24h' });
                const responseData = {
                    username: user === null || user === void 0 ? void 0 : user.username,
                    email: user === null || user === void 0 ? void 0 : user.email,
                    id: user === null || user === void 0 ? void 0 : user.id,
                    rol: user === null || user === void 0 ? void 0 : user.rol,
                    token
                };
                res.status(200).json(responseData);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map