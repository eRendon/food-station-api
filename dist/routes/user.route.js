"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
function UserRoutes(userController) {
    const router = (0, express_1.Router)();
    router.post('/register', userController.register.bind(userController));
    router.post('/login', userController.login.bind(userController));
    return router;
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=user.route.js.map