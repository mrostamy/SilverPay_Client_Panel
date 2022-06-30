import { isExpired, useJwt } from "react-jwt";
import axios from "./http_service";

const base_url = "http://localhost:8080/api/site/panel/auth/";



export const login = (model: any): Promise<any> => {


    return axios.post(base_url + 'login', model)

}

export const logout = (): Boolean => {

    localStorage.removeItem("token")
    return true

}

export const register = (values: any): Promise<any> => {

    return axios.post(base_url + "register", values);

}

export const IsLogin = (): boolean => {

    const token: string = localStorage.getItem("token") || ""
    console.log("token: " + !isExpired(token))
    return !isExpired(token)

}
