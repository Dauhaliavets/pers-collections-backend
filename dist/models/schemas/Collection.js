"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const mongoose_1 = require("mongoose");
const ExtraField_1 = require("./ExtraField");
const collectionSchema = new mongoose_1.Schema({
    ownerId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    extraFields: [ExtraField_1.extraFieldSchema],
}, { versionKey: false });
const Collection = (0, mongoose_1.model)('collection', collectionSchema);
exports.Collection = Collection;
//# sourceMappingURL=Collection.js.map