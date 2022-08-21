
import axios from 'axios';
import { injectable } from 'inversify'
import { factor } from '../../models/accountant/factor';

@injectable()
export class FactorService {

    base_url = "http://localhost:8080/api/site/panel/inevntory/foctors";


    public getFactors(userId: string): Promise<factor[]> {


        return axios
            .get(this.base_url);

    }

    public getFactor(entryId: string): Promise<factor> {


        return axios
            .get(this.base_url + "/factors/" + entryId);

    }

    public changeFactorStatus(factorId: string,status:boolean) {

        // make paginate
        return axios
            .put(this.base_url,{status})

    }

}