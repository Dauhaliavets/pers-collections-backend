"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionItem = void 0;
const mongoose_1 = require("mongoose");
const collectionItemSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    collectionId: {
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageSrc: {
        type: String,
    },
    tags: {
        type: [String],
    },
}, { versionKey: false });
const CollectionItem = (0, mongoose_1.model)('items', collectionItemSchema);
exports.CollectionItem = CollectionItem;
//# sourceMappingURL=CollectionItem.js.map