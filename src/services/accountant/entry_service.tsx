
import axios from 'axios';
import { injectable } from 'inversify'
import { entry } from '../../data/models/accountant/entry';
import { entryUpdate } from '../../data/models/accountant/entryUpdate';

@injectable()
export class EntrySerivce {

    base_url = "http://localhost:8080/api/site/panel/inevntory/entries";
    
    public getEntriesApprove(): Promise<entry[]> {
        
        // make paginate
        return axios
            .get(this.base_url,)

    }

    public getEntriesPay(userId: string): Promise<entry> {


        return axios
            .get(this.base_url + "/wallets/" + userId);

    }

    public getEntriesArchive(userId: string): Promise<entry> {


        return axios
            .get(this.base_url + "/bankCards/" + userId);

    }

    public getEntry(entryId:string): Promise<entry> {

        // make paginate
        return axios
            .get(this.base_url,)

    }

    public changeApproveEntry(entryId: string, isApprove:boolean){

        // make paginate
        return axios
            .patch(this.base_url,{isApprove})

    }

    public changePayEntry(entryId: string, isPay: boolean) {

        // make paginate
        return axios
            .patch(this.base_url, { isPay })

    }

    public changeRejectEntry(entryId: string, isReject: boolean) {

        // make paginate
        return axios
            .patch(this.base_url, { isReject })

    }

    public updateEntry(entryId: string, entryUpdate: any) {

        // make paginate
        return axios
            .patch(this.base_url, entryUpdate)

    }

    public getBankCardEntries(bankcardId:string,entryId: string, entryUpdate: any) {

        

        // make paginate
        return axios
            .patch(this.base_url, entryUpdate)

    }
    public getWalletEntries(wallet: string, entryId: string, entryUpdate: any) {



        // make paginate
        return axios
            .patch(this.base_url, entryUpdate)

    }

}
}