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
exports.updateUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const User_1 = require("../models/User");
const getUsers = (_, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundedUsers = yield User_1.User.find({});
        response.json(foundedUsers);
    }
    catch (error) {
        return response.status(400).json('Find users error');
    }
});
exports.getUsers = getUsers;
const getUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params.id;
        const foundedUser = yield User_1.User.findById(id);
        response.json(foundedUser);
    }
    catch (error) {
        return response.status(400).json('Find user by id error');
    }
});
exports.getUser = getUser;
const deleteUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params.id;
        const deletedUser = yield User_1.User.findByIdAndDelete(id);
        response.json(deletedUser);
    }
    catch (error) {
        return response.status(400).json('Delete user error');
    }
});
exports.deleteUser = deleteUser;
const updateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body, params: { id }, } = request;
        const updatedUser = yield User_1.User.findByIdAndUpdate(id, body);
        response.json(updatedUser);
    }
    catch (error) {
        return response.status(400).json('Update user error');
    }
});
exports.updateUser = updateUser;
//# sourceMappingURL=user-controller.js.map