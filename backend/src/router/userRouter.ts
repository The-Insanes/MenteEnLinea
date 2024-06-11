import { Router, Request, Response } from "express";

const userRouter = Router()

userRouter.get('/user/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    res.json({
        ok: true,
        mensaje: 'GET request handled',
        id: id
    });
});

userRouter.post('/user', (req: Request, res: Response) => {
    const { name, email } = req.body;
    res.json({
        ok: true,
        mensaje: 'POST request handled',
        data: { name, email }
    });
});

userRouter.put('/user/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const { name, email } = req.body;
    res.json({
        ok: true,
        mensaje: 'PUT request handled',
        id: id,
        data: { name, email }
    });
});

userRouter.delete('/user/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    res.json({
        ok: true,
        mensaje: 'DELETE request handled',
        id: id
    });
});

export default userRouter;

