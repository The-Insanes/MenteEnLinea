"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const psychologistRouter = (0, express_1.Router)();
psychologistRouter.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        ok: true,
        mensaje: 'GET request handled',
        id: id
    });
});
psychologistRouter.post('/user', (req, res) => {
    const { name, email } = req.body;
    res.json({
        ok: true,
        mensaje: 'POST request handled',
        data: { name, email }
    });
});
psychologistRouter.put('/user/:id', (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    res.json({
        ok: true,
        mensaje: 'PUT request handled',
        id: id,
        data: { name, email }
    });
});
psychologistRouter.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        ok: true,
        mensaje: 'DELETE request handled',
        id: id
    });
});
exports.default = psychologistRouter;
