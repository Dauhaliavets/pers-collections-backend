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
exports.roleMiddleware = void 0;
const token_service_1 = require("../services/token-service");
const roleMiddleware = (roles) => {
    return (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (request.method === 'OPTIONS') {
                return next();
            }
            const authHeader = request.header('Authorization');
            if (authHeader) {
                const [type, token] = authHeader.split(' ');
                if (type !== 'Bearer') {
                    return response.status(400).json({ message: "Header don't have type = Bearer" });
                }
                const { role } = yield (0, token_service_1.validateAccessToken)(token);
                if (!roles.includes(role)) {
                    return response.status(401).json({ message: 'No enough privileges to access' });
                }
                return next();
            }
            return response.status(403).json({ message: 'Missed header "Authorization"' });
        }
        catch (error) {
            error.name;
        }
    });
};
exports.roleMiddleware = roleMiddleware;
//# sourceMappingURL=roleMiddleware.js.map