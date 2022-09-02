
import { injectable } from "inversify";
import { isExpired, useJwt } from "react-jwt";
import { ticket } from "../../../data/models/ticket";
import axios from "../../http_service";


@injectable()
export class TicketService {


    base_url = process.env.REACT_APP_API_URL + "site/panel/";


    getTickets = (id: string,page:number=0): Promise<ticket[]> => {

        return axios.get(this.base_url + "users/" + id + "/tickets?page="+page);

    }


    addTicket = (ticket: ticket, userId: string): Promise<ticket> => {

        return axios.put(this.base_url + "users/" + userId + "/ticket/" + ticket)
    }

   

}



