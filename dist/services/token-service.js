"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAccessToken = exports.generateAccessToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateAccessToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY, { expiresIn: '60m' });
};
exports.generateAccessToken = generateAccessToken;
const validateAccessToken = (token) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decoded) => {
            if (error)
                return reject(error);
            resolve(decoded);
        });
    });
};
exports.validateAccessToken = validateAccessToken;
//# sourceMappingURL=token-service.js.map