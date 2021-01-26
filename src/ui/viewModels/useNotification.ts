import NotificationEntity from "@entities/notification";
import NotificationPresenter from "src/adapters/presentation/notification";

const { getListNotification, subcribeNotification } = new NotificationPresenter()

const useNotification = (listNotification: Array<NotificationEntity>) => {

    return {
        listNotification,
        getListNotification,
        subcribeNotification
    }
}

export default useNotification