

import axios from "axios";
import { injectable } from "inversify";
import { accountantDashboard } from "../../data/models/common/accountant_dashboard";
import { adminDashboard, admindashboard } from "../../data/models/common/admin_dashboard";
import { blogDashboard } from "../../data/models/common/blog_dashboard";
import { userDashboard } from "../../data/models/common/user_dashboard";



@injectable()
export class InventoryService {



    base_url = "http://localhost:8080/api/site/panel/users/2222";
    // base_url = process.env.REACT_APP_API_URL + "site/panel/users/";

    private token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoLHNvdG9wYXRlQGRpZ2l0YWx1cy5jb20iLCJpc3MiOiJtb2hhbW1hZCIsImlhdCI6MTY1NzIwNzEwNiwiZXhwIjoxNjU3Mzc5OTA2fQ.u-OgBu281y02HXeePt-qV4Zk7rLDKu1SacLM6yjjmO7Nle-oV5551GGIBHG79s0HvN80e8azv3gl8jg9odzwmw";

    private myHeaders = {

        'Authorization': `bearer ${this.token}`,
        'Access-Control-Allow-Origin': '*'
    }



    public getAdminrDashboard(): Promise<adminDashboard> {

        return axios
            .get(this.base_url + "/admin/" + "",)

    }



    public getUserDashboard(): Promise<userDashboard> {

        return axios
            .get(this.base_url,)

    }



    public getAccountantDashboard(): Promise<accountantDashboard> {

        return axios
            .get(this.base_url,)

    }

    public getBlogDashboard(): Promise<blogDashboard> {

        return axios
            .get(this.base_url,)

    }


}
