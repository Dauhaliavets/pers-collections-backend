"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reshapingOptions = exports.SECRET_KEY = void 0;
exports.SECRET_KEY = 'verySecretKey-01.02.2023';
exports.reshapingOptions = {
    virtuals: true,
    transform: function (_doc, ret) {
        delete ret.password;
        delete ret._id;
        return ret;
    },
};
//# sourceMappingURL=constants.js.map