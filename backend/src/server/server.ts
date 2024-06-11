import express, { Request, Response } from 'express';
import userRouter from '../router/userRouter';
import psychologistRouter from '../router/psychologistRouter';

export default class Server {
    public app: express.Application;
    public port: number;
    
    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.routes();
    }

    static init(port: number) {
        return new Server(port);
    }

    private routes(): void{
        this.app.use('/api', userRouter)
        this.app.use('/api', psychologistRouter)
        
    }
    
    start(callback: () => void): void {
        this.app.listen(this.port, callback);
    }
}

