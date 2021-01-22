import httpRepository from "./http"

class AuthRepository {
    async register(payload) {
        return await httpRepository.execute({
            path: '/auth/register',
            method: 'post',
            payload,
            config: { isPrivate: false }
        })
    }

    async login(payload) {
        return await httpRepository.execute({
            path: '/auth/login',
            method: 'post',
            payload,
            config: { isPrivate: false }
        })
    }
}

export default AuthRepository