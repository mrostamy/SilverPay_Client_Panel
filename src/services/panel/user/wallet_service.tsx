import axios from "axios";
import User from "../../../data/models/User";
import { injectable } from "inversify";
import wallet from "../../../data/models/wallet";



@injectable()
export class WalletService {

    base_url = "http://localhost:8080/api/site/panel/users/";
    // base_url = process.env.REACT_APP_API_URL + "site/panel/users/";

    private token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoLHNvdG9wYXRlQGRpZ2l0YWx1cy5jb20iLCJpc3MiOiJtb2hhbW1hZCIsImlhdCI6MTY1NzIwNzEwNiwiZXhwIjoxNjU3Mzc5OTA2fQ.u-OgBu281y02HXeePt-qV4Zk7rLDKu1SacLM6yjjmO7Nle-oV5551GGIBHG79s0HvN80e8azv3gl8jg9odzwmw";

    private myHeaders = {

        'Authorization': `bearer ${this.token}`,
        'Access-Control-Allow-Origin': '*'
    }

    public getWallet(id: string): Promise<wallet> {


        return axios
            .get(this.base_url + id+"/wallets", { headers: this.myHeaders });

    }

    public getWallets(id: string): Promise<wallet[]> {


        return axios
            .get(this.base_url + id, { headers: this.myHeaders });
    }

    public addWallet(wallet:any,id: string): Promise<wallet> {


        return axios
            .post(this.base_url + id+"/wallets",wallet,{ headers:this.myHeaders});
    }



}
