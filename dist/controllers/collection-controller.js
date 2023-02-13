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
exports.updateCollection = exports.deleteCollection = exports.createCollection = exports.getCollection = exports.getCollectionsByUser = exports.getCollections = void 0;
const Collection_1 = require("../models/schemas/Collection");
const getCollections = (_, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundedCollections = yield Collection_1.Collection.find({});
        response.json(foundedCollections);
    }
    catch (error) {
        return response.status(400).json('Find Collections error');
    }
});
exports.getCollections = getCollections;
const getCollectionsByUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ownerId = request.params.id;
        const foundedCollection = yield Collection_1.Collection.find({ ownerId });
        response.json(foundedCollection);
    }
    catch (error) {
        return response.status(400).json('Find Collection by OWNER error');
    }
});
exports.getCollectionsByUser = getCollectionsByUser;
const getCollection = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params.id;
        const foundedCollection = yield Collection_1.Collection.findById(id);
        response.json(foundedCollection);
    }
    catch (error) {
        return response.status(400).json('Find Collection by id error');
    }
});
exports.getCollection = getCollection;
const createCollection = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCollection = new Collection_1.Collection(request.body);
        yield newCollection.save();
        response.json(newCollection);
    }
    catch (error) {
        return response.status(400).json('Create Collection error');
    }
});
exports.createCollection = createCollection;
const deleteCollection = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params.id;
        const deletedCollection = yield Collection_1.Collection.findByIdAndDelete(id);
        response.json(deletedCollection);
    }
    catch (error) {
        return response.status(400).json('Delete Collection error');
    }
});
exports.deleteCollection = deleteCollection;
const updateCollection = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body, params: { id }, } = request;
        const updatedCollection = yield Collection_1.Collection.findByIdAndUpdate(id, body, { new: true });
        response.json(updatedCollection);
    }
    catch (error) {
        return response.status(400).json('Update Collection error');
    }
});
exports.updateCollection = updateCollection;
//# sourceMappingURL=collection-controller.js.map