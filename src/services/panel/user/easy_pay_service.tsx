
import { injectable } from "inversify";
import { isExpired, useJwt } from "react-jwt";
import easyPay from "../../../models/easyPay";
import { easyPayGatesWallets } from "../../../models/easyPayGatesWallets";
import axios from "../../http_service";

@injectable()
export class EasyPayService {

private base_url = process.env.REACT_APP_API_URL + "site/panel/";


geteasyPays = (id: string): Promise<easyPay[]> => {

    return axios.get(this.base_url + "users/" + id + "/easyPays");

}

geteasyPay = (id: string): Promise<easyPay> => {

    return axios.get(this.base_url + "users/" + id + "/easyPays");

}

updateeasyPay = (userId: string, easyPay: any): Promise<easyPay> => {

    return axios.put(this.base_url + "users/" + userId + "/easyPay/" + easyPay)
}

addeasyPay = (userId: string,easyPay: any): Promise<easyPay> => {

    return axios.put(this.base_url + "users/" + userId + "/easyPay/" + easyPay)
}

deleteEasyPay = (user_id: string, easyPayId: string): Promise<any> => {

    return axios.delete(this.base_url + "users/" + user_id + "/easyPays/" + easyPayId);

}

}



