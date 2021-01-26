import NotificationEntity from "@entities/notification";
import NoTificationRepository from "@repository/notification";

class NotificationInteractor extends NoTificationRepository {
    async getListNotification(userId) {
        return await super.getListNotification(userId).then(res => {
            if (!Array.isArray(res)) return []
            return res.map(item => new NotificationEntity(item))
        })
    }
}

export default NotificationInteractor