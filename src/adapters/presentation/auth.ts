import store from "@stores/index";
import profileStore from "@stores/user";
import AuthInteractor from "@useCases/auth";

export interface IRegisterPort {
    fullName: string,
    userName: string,
    phone: string,
    email: string,
    password: string,
    avatar: string,
}

export interface ILoginPort {
    userName: string
    password: string
}

class AuthPresenter {
    async register(data: IRegisterPort) {
        return await new AuthInteractor().register(data)
    }

    async login(data: ILoginPort) {
        const { login } = new AuthInteractor()
        return await login(data).then(res => {
            store.dispatch(profileStore.actions.fetch(res.user))
            return res
        })
    }
}

export default AuthPresenter