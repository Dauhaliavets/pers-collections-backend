"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extraFieldSchema = void 0;
const mongoose_1 = require("mongoose");
const extraFieldSchema = new mongoose_1.Schema({
    id: String,
    type: String,
    label: String,
    value: mongoose_1.Schema.Types.Mixed,
    visible: Boolean,
});
exports.extraFieldSchema = extraFieldSchema;
//# sourceMappingURL=ExtraField.js.map