"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reshapingOptions = void 0;
exports.reshapingOptions = {
    virtuals: true,
    transform: function (_doc, ret) {
        delete ret.password;
        delete ret._id;
        return ret;
    },
};
//# sourceMappingURL=constants.js.map