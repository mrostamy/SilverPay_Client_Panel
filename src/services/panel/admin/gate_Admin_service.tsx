
import axios from 'axios';
import { injectable } from 'inversify'


@injectable()
export class GateAdminService {

    base_url = "http://localhost:8080/api/site/panel/admin/";


    public getUserGates(userId: string){


        return axios
            .get(this.base_url);

    }

    public changeActiveGate(walletId: string) {


        return axios
            .get(this.base_url + "/admin/financial/wallets/" + walletId+"/gates");

    }



    public changeDirectGate(factorId: string, data: any) {

        // make paginate
        return axios
            .patch(this.base_url + factorId + "/edit/", { data })

    }

    public changeIpGate(userId: string) {


        return axios
            .get(this.base_url);

    }

}