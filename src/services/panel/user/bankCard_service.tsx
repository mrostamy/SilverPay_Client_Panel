
import { injectable } from "inversify";
import { isExpired, useJwt } from "react-jwt";
import BankCard from "../../../models/bankCards";
import axios from "../../http_service";


@injectable()
export class BankCardService {


    base_url = process.env.REACT_APP_API_URL + "site/panel/";


    getBankCards = (id: string): Promise<BankCard[]> => {

        return axios.get(this.base_url + "users/" + id + "/bankCards");

    }

    updateBankCard = (userId: string, bankCard: BankCard): Promise<BankCard> => {

        return axios.put(this.base_url + "users/" + userId + "/bankCard/" + bankCard)
    }

    addBankCard = (bankCard: BankCard, userId: string): Promise<BankCard> => {

        return axios.put(this.base_url + "users/" + userId + "/bankCard/" + bankCard)
    }

    deleteBankCard = (id: string): Promise<any> => {

        return axios.delete(this.base_url + "/bankCards/" + id);

    }


}



