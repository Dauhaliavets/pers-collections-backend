"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAccessToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("../constants");
const generateAccessToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, constants_1.SECRET_KEY, { expiresIn: '60m' });
};
exports.generateAccessToken = generateAccessToken;
const validateAccessToken = (token) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, constants_1.SECRET_KEY, (error, decoded) => {
            if (error)
                return reject(error);
            resolve(decoded);
        });
    });
};
exports.validateAccessToken = validateAccessToken;
//# sourceMappingURL=token-service.js.map