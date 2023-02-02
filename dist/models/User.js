"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.User = void 0;
const mongoose_1 = require("mongoose");
var Roles;
(function (Roles) {
    Roles["USER"] = "USER";
    Roles["ADMIN"] = "ADMIN";
})(Roles || (Roles = {}));
exports.Roles = Roles;
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    blockedStatus: Boolean,
    role: {
        type: String,
        default: Roles.USER,
    },
});
const User = (0, mongoose_1.model)('user', userSchema);
exports.User = User;
