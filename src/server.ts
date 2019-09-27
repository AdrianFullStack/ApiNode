import express, { Application } from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import { MongoClient } from "mongodb";

import IndexRoutes from "./routes/IndexRoutes"

class Server {
    public app: Application
    private indexRoutes: IndexRoutes

    constructor() {
        this.app = express()
        this.indexRoutes = new IndexRoutes()
        this.config()
        this.routes()
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
        this.app.use(this.indexRoutes.router)
    }

    start() {
        MongoClient.connect('mongodb://localhost:27017', (err, client) => {
            if (err) throw err;
            console.log('Conexion establecida')

            const db = client.db('demo')

            this.app.listen(this.app.get('port'), () => console.log('Start Server'))
        })
    }
}

const server = new Server()
server.start();