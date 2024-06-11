"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
userRouter.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        ok: true,
        mensaje: 'GET request handled',
        id: id
    });
});
userRouter.post('/user', (req, res) => {
    const { name, email } = req.body;
    res.json({
        ok: true,
        mensaje: 'POST request handled',
        data: { name, email }
    });
});
userRouter.put('/user/:id', (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    res.json({
        ok: true,
        mensaje: 'PUT request handled',
        id: id,
        data: { name, email }
    });
});
userRouter.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        ok: true,
        mensaje: 'DELETE request handled',
        id: id
    });
});
exports.default = userRouter;
