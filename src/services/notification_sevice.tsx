
import { injectable } from "inversify";
import { isExpired, useJwt } from "react-jwt";
import axios from "./http_service";


@injectable()
export class NotificationService {


    base_url = process.env.REACT_APP_API_URL + "site/panel/";

    decodedToken: any = useJwt(localStorage.getItem("token") || "").decodedToken;



    getNotification = (id: string): Promise<Notification> => {

        return axios.get(this.base_url + "notification/" + id);

    }

    updateNotifications = (userId: string,notify:Notification): Promise<Notification> => {


        return axios.put(this.base_url + "users/" + userId + "/notifications/" + notify)
    }


}



