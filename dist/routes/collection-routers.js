"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionRouter = void 0;
const express_1 = require("express");
const collectionController = __importStar(require("../controllers/collection-controller"));
const roleMiddleware_1 = require("../middlewares/roleMiddleware");
const collectionRouter = (0, express_1.Router)();
exports.collectionRouter = collectionRouter;
collectionRouter.get('/', (0, roleMiddleware_1.roleMiddleware)(['ADMIN', 'USER']), collectionController.getCollections);
collectionRouter.get('/:id', (0, roleMiddleware_1.roleMiddleware)(['ADMIN', 'USER']), collectionController.getCollection);
collectionRouter.delete('/:id', (0, roleMiddleware_1.roleMiddleware)(['ADMIN', 'USER']), collectionController.deleteCollection);
collectionRouter.patch('/:id', (0, roleMiddleware_1.roleMiddleware)(['ADMIN', 'USER']), collectionController.updateCollection);
//# sourceMappingURL=collection-routers.js.map