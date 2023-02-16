"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCommentToItem = exports.updateItem = exports.deleteItem = exports.createItem = exports.getItem = exports.getItemsByCollectionId = exports.getItems = void 0;
const CollectionItem_1 = require("../models/schemas/CollectionItem");
const getItems = (_, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundedItems = yield CollectionItem_1.CollectionItem.find({});
        response.json(foundedItems);
    }
    catch (error) {
        return response.status(400).json('Find Items error');
    }
});
exports.getItems = getItems;
const getItemsByCollectionId = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collectionId = request.params.id;
        const foundedItem = yield CollectionItem_1.CollectionItem.find({ collectionId });
        response.json(foundedItem);
    }
    catch (error) {
        return response.status(400).json('Find Items by collectionId error');
    }
});
exports.getItemsByCollectionId = getItemsByCollectionId;
const getItem = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params.id;
        const foundedItem = yield CollectionItem_1.CollectionItem.findById({ _id: id });
        response.json(foundedItem);
    }
    catch (error) {
        return response.status(400).json('Find Item by id error');
    }
});
exports.getItem = getItem;
const createItem = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newItem = new CollectionItem_1.CollectionItem(request.body);
        yield newItem.save();
        response.json(newItem);
    }
    catch (error) {
        return response.status(400).json('Create Item error');
    }
});
exports.createItem = createItem;
const deleteItem = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params.id;
        const deletedItem = yield CollectionItem_1.CollectionItem.findByIdAndDelete({ _id: id });
        response.json(deletedItem);
    }
    catch (error) {
        return response.status(400).json('Delete Item error');
    }
});
exports.deleteItem = deleteItem;
const updateItem = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body, params: { id }, } = request;
        const updatedItem = yield CollectionItem_1.CollectionItem.findByIdAndUpdate(id, body, { new: true });
        response.json(updatedItem);
    }
    catch (error) {
        return response.status(400).json('Update Item error');
    }
});
exports.updateItem = updateItem;
const addCommentToItem = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body, params: { id }, } = request;
        const io = request.app.get('socket');
        const updatedItem = yield CollectionItem_1.CollectionItem.findByIdAndUpdate(id, { $push: { comments: body } }, {
            new: true,
        });
        io.emit('new-comment', updatedItem);
        response.json(updatedItem);
    }
    catch (error) {
        return response.status(400).json('Create Item Comment error');
    }
});
exports.addCommentToItem = addCommentToItem;
//# sourceMappingURL=item-controller.js.map