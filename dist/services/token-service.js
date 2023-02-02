"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAccessToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("../constants");
const generateAccessToken = (id, username, role) => {
    const payload = { id, username, role };
    return jsonwebtoken_1.default.sign(payload, constants_1.SECRET_KEY, { expiresIn: '60m' });
};
exports.generateAccessToken = generateAccessToken;
const checkAccessToken = (token) => {
    try {
        jsonwebtoken_1.default.verify(token, constants_1.SECRET_KEY);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.checkAccessToken = checkAccessToken;
