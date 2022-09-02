import axios from "axios";
import { injectable } from "inversify";
import { role } from "../../../data/models/admin/role";



@injectable()
export class UsersService {


    private base_url = process.env.REACT_APP_API_URL + "site/panel/";


    getUsers(userId: string){}

    // getUsersRoles(userId: string):Promise<role[]>{}

    editUserRoles(userId:string,checked:boolean,value:string){}

    




}