import httpRepository from "./http";
import socketRepository from "./socket";

class NoTificationRepository {
    async getListNotification(userId) {
        return await httpRepository.execute({
            path: 'notification',
            method: "post",
        })
    }
}

export default NoTificationRepository