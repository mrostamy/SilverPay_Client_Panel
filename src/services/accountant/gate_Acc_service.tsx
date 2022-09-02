
import axios from 'axios';
import { injectable } from 'inversify'
import { factor } from '../../data/models/accountant/factor';
import { factorSearch } from '../../data/models/accountant/factor_search';
import { gate } from '../../data/models/gate';
import wallet from '../../data/models/wallet';

@injectable()
export class FactorService {

    base_url = "http://localhost:8080/api/site/panel/inevntory/foctors";


    public getAccGates(userId: string, search: factorSearch): Promise<gate[]> {


        return axios
            .get(this.base_url);

    }

    public getWalletGates(walletId: string): Promise<factor> {


        return axios
            .get(this.base_url + "/financial/wallets/" + walletId+"/gates");

    }



    public updateFactor(factorId: string, data: any) {

        // make paginate
        return axios
            .patch(this.base_url + factorId + "/edit/", { data })

    }

    public getFactorsWallet(userId: string): Promise<factor[]> {


        return axios
            .get(this.base_url);

    }

    public getWalletFactors(walletId: string): Promise<factor[]> {


        return axios
            .get(this.base_url);

    }

}