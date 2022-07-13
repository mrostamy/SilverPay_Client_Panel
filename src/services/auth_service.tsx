import { injectable } from "inversify";
import { isExpired, useJwt } from "react-jwt";
import axios from "./http_service";


@injectable()
export class AuthService {


    base_url = process.env.REACT_APP_API_URL + "site/panel/auth/";



    login = (model: any): Promise<any> => {


        return axios.post(this.base_url + 'login', model)

    }

    logout = (): Boolean => {

        localStorage.removeItem("token")
        return true

    }

    register = (values: any): Promise<any> => {

        return axios.post(this.base_url + "register", values);

    }

    IsLogin = (): boolean => {

        const token: string = localStorage.getItem("token") || ""
        console.log("token: " + !isExpired(token))
        return !isExpired(token)

    }



}
