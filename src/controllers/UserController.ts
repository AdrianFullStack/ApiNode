import { Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";
import IUser from "../contracts/IUser";

export class UserController {
    private iuser: IUser

    constructor(iuser: IUser) {
        this.iuser = iuser;
    }

    // Method GET
    public index(req: Request, res: Response) {
        const data = this.iuser.find()
        return res.json(data)
    }

    // Method POST
    public store(req: Request, res: Response) {
        return res.json('')
    }

    // Method GET
    public edit(req: Request, res: Response) {
        
    }

    // Method PUT / PHATCH
    public update(req: Request, res: Response) {
        
    }

    // Method DELETE
    public delete(req: Request, res: Response) {
        
    }
}