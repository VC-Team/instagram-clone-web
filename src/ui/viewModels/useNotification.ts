import NotificationEntity from "@entities/notification";
import { useAsync } from "@hook/useAsync";
import NotificationPresenter from "src/adapters/presentation/notification";

const { getListNotification, subcribeNotification } = new NotificationPresenter()

const useNotification = (listNotification: Array<NotificationEntity>) => {

    return {
        listNotification,
        getListNotification: useAsync(getListNotification)[0],
        subcribeNotification
    }
}

export default useNotification