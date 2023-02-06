"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const RoleModel_1 = require("../types/RoleModel");
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
        default: RoleModel_1.Roles.User,
    },
}, { versionKey: false });
const User = (0, mongoose_1.model)('user', userSchema);
exports.User = User;
//# sourceMappingURL=User.js.map