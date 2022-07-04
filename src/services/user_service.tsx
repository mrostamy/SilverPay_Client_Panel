import axios from "axios";
import User from "../models/User";



export class userService {

    base_url = process.env.REACT_APP_API_URL + "site/panel/users";

    headers = "Authorization";

    constructor() {

    }

    getUsers(): Promise<User[]> {

        return axios
            .get(this.base_url, { headers: { 'Authorization': localStorage.getItem('token') || "" } })

    }

    getUser(id: string): Promise<User> {

        return axios
            .get(this.base_url + id, { headers: { 'Authorization': localStorage.getItem('token') || "" } });

    }

}
