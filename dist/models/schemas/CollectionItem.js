"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionItem = void 0;
const mongoose_1 = require("mongoose");
const Comment_1 = require("./Comment");
const ExtraField_1 = require("./ExtraField");
const collectionItemSchema = new mongoose_1.Schema({
    collectionId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    comments: [Comment_1.commentSchema],
    likes: [String],
    extraFields: [ExtraField_1.extraFieldSchema],
}, { versionKey: false, strict: false, timestamps: { createdAt: true, updatedAt: false } });
const CollectionItem = (0, mongoose_1.model)('item', collectionItemSchema);
exports.CollectionItem = CollectionItem;
//# sourceMappingURL=CollectionItem.js.map