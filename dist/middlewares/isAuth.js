"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const token_service_1 = require("../services/token-service");
const isAuth = (request, response, next) => {
    if (['/auth/signIn', '/auth/signUp'].includes(request.path)) {
        return next();
    }
    const authHeader = request.header('Authorization');
    if (authHeader) {
        const [type, token] = authHeader.split(' ');
        if (type === 'Bearer' && (0, token_service_1.checkAccessToken)(token)) {
            return next();
        }
    }
    return response.status(403).json({ message: 'Invalid token' });
};
exports.isAuth = isAuth;
