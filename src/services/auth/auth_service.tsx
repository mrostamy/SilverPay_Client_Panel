import { injectable } from "inversify";
import { isExpired, useJwt } from "react-jwt";
import axios from "../http_service";


@injectable()
export class AuthService {


    base_url = process.env.REACT_APP_API_URL + "site/panel/auth/";

    decodedToken: any = useJwt(localStorage.getItem("token") || "").decodedToken;

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

    isLogin = (): boolean => {

        const token: string = localStorage.getItem("token") || ""
        console.log("token: " + !isExpired(token))
        return !isExpired(token)

    }

    roleMatch = (allowRoles: Array<any>): Boolean => {

        let isMatch = false;

        const userRoles = this.decodedToken.roles as Array<string>;

        allowRoles.forEach(element => {
            if (userRoles.includes(element)) {
                isMatch = true;
                return;
            }
        });

        return isMatch;
    }

    userRole = (roles: Array<any>): string => {

        const userRoles = this.decodedToken.roles as Array<string>;

        userRoles.forEach(element => {
            switch (element) {
                case "Admin": { return "admin"; break; }
                case "َAccountant": { return "accountant"; break; }
                case "Blogger": { return "blogger"; break; }
                case "User": { return "user"; break; }
            }
        })

        return "invalid";

    }

    getDashboard = (): string => {

        let url = '';
        
        const userRoles = this.decodedToken.roles as Array<string>;

        userRoles.forEach(element => {
            switch (element) {
                case "Admin": { url = "admin url"; break; }
                case "َAccountant": { url = "accountant url"; break; }
                case "Blogger": { url = "blogger url"; break; }
                case "User": { url = "user url"; break; }
            }
        })

        return url;

    }


}
