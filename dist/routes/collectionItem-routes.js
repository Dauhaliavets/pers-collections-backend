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
exports.collectionItemsRouter = void 0;
const express_1 = require("express");
const itemController = __importStar(require("../controllers/item-controller"));
const roleMiddleware_1 = require("../middlewares/roleMiddleware");
const collectionItemsRouter = (0, express_1.Router)();
exports.collectionItemsRouter = collectionItemsRouter;
collectionItemsRouter.get('/', itemController.getItems);
collectionItemsRouter.get('/:id', itemController.getItem);
collectionItemsRouter.get('/collectionId/:id', itemController.getItemsByCollectionId);
collectionItemsRouter.post('/', (0, roleMiddleware_1.roleMiddleware)(['ADMIN', 'USER']), itemController.createItem);
collectionItemsRouter.delete('/:id', (0, roleMiddleware_1.roleMiddleware)(['ADMIN', 'USER']), itemController.deleteItem);
collectionItemsRouter.patch('/:id', (0, roleMiddleware_1.roleMiddleware)(['ADMIN', 'USER']), itemController.updateItem);
//# sourceMappingURL=collectionItem-routes.js.map