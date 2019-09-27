import {Request, Response, Router} from 'express'
import {UserRoutes} from './UserRoutes';

export default class IndexRouter {
    router: Router;
    userRoutes: UserRoutes

    constructor() {
        this.router = Router();
        this.userRoutes = new UserRoutes()
        console.log(this.userRoutes)
        this.routes();
    }

    routes() {
        this.router.get('/', (req: Request, res: Response) => res.send('Hello'))
        this.router.use(this.userRoutes.router)
    }
}