import express, { Application } from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";

import indexRoutes from "./routes/indexRoutes"

class Server {
    public app: Application;

    constructor() {
        this.app = express()
        this.config()
        this.routes();
    }

    config() {
        this.app.set('port', process.env.PORT || 3000)
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(helmet())
        this.app.use(compression())
        this.app.use(cors())
    }

    routes() {
        this.app.use(indexRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => console.log('Start Server'))
    }
}

const server = new Server()
server.start();