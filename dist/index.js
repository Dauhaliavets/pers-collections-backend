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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const auth_routes_1 = require("./routes/auth-routes");
const user_routes_1 = require("./routes/user-routes");
const collection_routes_1 = require("./routes/collection-routes");
const collectionItem_routes_1 = require("./routes/collectionItem-routes");
const PORT = process.env.PORT || 4000;
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*',
    },
});
app.set('socket', io);
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/auth', auth_routes_1.authRouter);
app.use('/users', user_routes_1.usersRouter);
app.use('/collections', collection_routes_1.collectionRouter);
app.use('/items', collectionItem_routes_1.collectionItemsRouter);
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            mongoose_1.default.set('strictQuery', false);
            yield mongoose_1.default.connect(process.env.DB_URL);
            httpServer.listen(PORT, () => {
                console.log(`App listening on port ${PORT}`);
            });
        }
        catch (e) {
            console.log(e);
        }
    });
})();
//# sourceMappingURL=index.js.map