
import axios from 'axios';
import { injectable } from 'inversify'
import { factor } from '../../data/models/accountant/factor';
import { factorSearch } from '../../data/models/accountant/factor_search';
import wallet from '../../data/models/wallet';

@injectable()
export class FactorService {

    base_url = "http://localhost:8080/api/site/panel/inevntory/foctors";


    public getFactors(userId: string, search: factorSearch): Promise<factor[]> {


        return axios
            .get(this.base_url);

    }

    public getFactor(entryId: string): Promise<factor> {


        return axios
            .get(this.base_url + "/factors/" + entryId);

    }

    public changeFactorStatus(factorId: string, status: boolean):Promise<wallet> {

        // make paginate
        return axios
            .patch(this.base_url, { status })

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

    public getGatesFactor(gateId: string, status: boolean): Promise<wallet> {

        // make paginate
        return axios
            .patch(this.base_url+"/gates/"+gateId+"/factors", { status })

    }

}