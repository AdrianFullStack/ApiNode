import { Router } from 'express'
import { UserController } from '../controllers/UserController';


export class UserRoutes {
    public router: Router
    userController: UserController

    constructor() {
        this.userController = new UserController()
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/users', this.userController.index);
    }   
}