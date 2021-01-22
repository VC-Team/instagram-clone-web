import User from "@entities/user";
import UserRepository from "src/adapters/repository/user";

class UserInteractor extends UserRepository {
    constructor() {
        super()
    }

    async getProfile(userId: string) {
        return await super.getProfile(userId).then(res => {
            return new User(res)
        })
    }

    async getFollowing(userId: string) {
        return await super.getFollowing(userId).then(res => {
            return res.map(user => new User(user))
        })
    }

    async getFollowers(userId: string) {
        return await super.getFollowers(userId).then(res => {
            return res.map(user => new User(user))
        })
    }
}

new UserInteractor()