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
exports.check = exports.registration = exports.login = void 0;
const User_1 = require("../models/User");
const hash_service_1 = require("../services/hash-service");
const token_service_1 = require("../services/token-service");
const login = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = request.body;
        const foundedUser = yield User_1.User.findOne({ username });
        if (!foundedUser) {
            return response.status(400).json({ message: `Not found: User "${username}" is not found)` });
        }
        if (foundedUser.blockedStatus) {
            return response.status(400).json({ message: 'Forbidden: Access is Forbidden' });
        }
        const isValidPassword = yield (0, hash_service_1.checkPassword)(password, foundedUser.password);
        if (!isValidPassword) {
            return response.status(400).json({ message: 'Unauthorized: Incorrect password' });
        }
        const token = (0, token_service_1.generateAccessToken)(String(foundedUser._id), foundedUser.username, foundedUser.role);
        return response.status(200).json({ token });
    }
    catch (error) {
        return response.status(400).json('Login error');
    }
});
exports.login = login;
const registration = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = request.body;
        const foundedUser = yield User_1.User.findOne({ username });
        if (foundedUser) {
            return response.status(409).json({ message: `User ${username} already exists` });
        }
        const hash = yield (0, hash_service_1.hashPassword)(password);
        const user = new User_1.User({ username, email, password: hash });
        yield user.save();
        return response.json({ message: 'User created' });
    }
    catch (error) {
        return response.status(400).json('Registration error');
    }
});
exports.registration = registration;
const check = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        response.json('SERVER WORK');
    }
    catch (error) { }
});
exports.check = check;
