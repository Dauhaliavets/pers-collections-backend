"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const mongoose_1 = require("mongoose");
const collectionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    ownerId: {
        type: String,
        required: true,
    },
});
const Collection = (0, mongoose_1.model)('collection', collectionSchema);
exports.Collection = Collection;
//# sourceMappingURL=Collection.js.map