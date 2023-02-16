"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = exports.commentSchema = void 0;
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    sender: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
}, { versionKey: false, timestamps: { createdAt: true, updatedAt: false } });
exports.commentSchema = commentSchema;
const Comment = (0, mongoose_1.model)('comment', commentSchema);
exports.Comment = Comment;
//# sourceMappingURL=Comment.js.map