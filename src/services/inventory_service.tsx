
import axios from "axios";
import { injectable } from "inversify";
import BankCard from "../models/bankCards";
import { inventory } from "../models/inventory";
import wallet from "../models/wallet";



@injectable()
export class InventoryService {



    base_url = "http://localhost:8080/api/site/panel/users/2222";
    // base_url = process.env.REACT_APP_API_URL + "site/panel/users/";

    private token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoLHNvdG9wYXRlQGRpZ2l0YWx1cy5jb20iLCJpc3MiOiJtb2hhbW1hZCIsImlhdCI6MTY1NzIwNzEwNiwiZXhwIjoxNjU3Mzc5OTA2fQ.u-OgBu281y02HXeePt-qV4Zk7rLDKu1SacLM6yjjmO7Nle-oV5551GGIBHG79s0HvN80e8azv3gl8jg9odzwmw";

    private myHeaders={

        'Authorization':`bearer ${this.token}`,
        'Access-Control-Allow-Origin':'*'
    }


    public getInventories(): Promise<inventory[]> {

        return axios
            .get(this.base_url, )

    }

    public getInventoryWallets(userId: string): Promise<wallet> {


        return axios
            .get(this.base_url + "/wallets/" + userId );

    }

    public getInventoryBankCards(userId: string): Promise<BankCard> {


        return axios
            .get(this.base_url + "/bankCards/" + userId);

    }

    public blockInventoryWallet(walletId:string,flag: boolean) {

        return axios
            .patch(this.base_url + "/blockWallet/" + walletId,{flag});
    }

    public approvInventoryBankCard(bankCardId: string, approve: boolean) {

        return axios
            .patch(this.base_url + "/approvBankCard/" + bankCardId, { approve });
    }

    public getWallets(): Promise<wallet[]> {//apply pagination


        return axios
            .get(this.base_url + "/allWallets/");
    }


    public getBankCards(): Promise<BankCard[]>  {//apply pagination

        return axios
            .get(this.base_url + "/allBankCards/");
    }


//     onWallet(inventory:inventory){
// //dispatch current title
//     }
}
