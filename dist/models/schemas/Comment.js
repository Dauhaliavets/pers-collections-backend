"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentSchema = void 0;
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    itemId: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
}, { versionKey: false, strict: false, timestamps: { createdAt: true, updatedAt: false } });
exports.commentSchema = commentSchema;
//# sourceMappingURL=Comment.js.map