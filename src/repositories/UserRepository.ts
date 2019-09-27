import User from "../modules/User"

export default class UserRepository implements IUser {

    async find() {
        return await User.find()
    }


    async create(data: any) {
        return await User.create(data) 
    }    
}