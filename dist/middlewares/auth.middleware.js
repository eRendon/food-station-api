"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey_1 = __importDefault(require("../const/secretKey"));
const authenticateToken = (req, res, Next) => {
    console.log('el req en mdle', req);
    const authHeader = req.headers['authorization'];
    console.log('authsssss', authHeader);
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token de autenticación no proporcionado o en formato incorrecto' });
    }
    const token = authHeader.split(' ')[1];
    jsonwebtoken_1.default.verify(token, secretKey_1.default, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token de autenticación inválido' });
        }
        req.user = user;
        Next();
    });
};
exports.default = authenticateToken;
//# sourceMappingURL=auth.middleware.js.map