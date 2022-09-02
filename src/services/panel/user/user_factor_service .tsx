
import axios from 'axios';
import { injectable } from 'inversify'
import { factor } from '../../data/models/accountant/factor';
import { factorSearch } from '../../data/models/accountant/factor_search';
import wallet from '../../data/models/wallet';

@injectable()
export class UserFactorService {

    base_url = "http://localhost:8080/api/site/panel/users/";


    //get user id from store

    public getFactor(,user_id:string,factor_id: string): Promise<factor> {


        return axios
            .get(this.base_url + user_id+"/factors/" + factor_id);

    }

}