import axios from "axios";
import { injectable } from "inversify";
import { gate } from "../../models/gate";
import { gates_wallets } from "../../models/gates_wallets";
import { gate_wallets } from "../../models/gateWallets";


@injectable()
export class GateService {


    private base_url = process.env.REACT_APP_API_URL + "site/panel/";


    getGates = (id: string): Promise<gates_wallets> => {

        return axios.get(this.base_url + "users/" + id + "/gates");

    }

    getGate = (user_id: string, gateId: any): Promise<gate_wallets> => {

        return axios.get(this.base_url + "users/" + user_id + "/gates/" + gateId);

    }

    updateGate = (userId: string, GateId: any): Promise<any>=> {

        return axios.put(this.base_url + "users/" + userId + "/gates/" + GateId)
    }

    addGate = (Gate: any, userId: string): Promise<gate> => {

        return axios.put(this.base_url + "users/" + userId + "/gates/" + Gate)
    }

    
    activeGate = (userId: string,gateId:string,active:any): Promise<gate> => {

        return axios.put(this.base_url + "users/" + userId + "/gates/" + gateId+"/active/",active)
    }

}