"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("../router/userRouter"));
const psychologistRouter_1 = __importDefault(require("../router/psychologistRouter"));
class Server {
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.routes();
    }
    static init(port) {
        return new Server(port);
    }
    routes() {
        this.app.use('/api', userRouter_1.default);
        this.app.use('/api', psychologistRouter_1.default);
    }
    start(callback) {
        this.app.listen(this.port, callback);
    }
}
exports.default = Server;
