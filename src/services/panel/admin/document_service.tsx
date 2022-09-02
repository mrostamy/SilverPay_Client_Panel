
import { injectable } from "inversify";
import { isExpired, useJwt } from "react-jwt";
import Document from "../../../data/models/document";
import axios from "../../http_service";


@injectable()
export class DocumentService {


    base_url = process.env.REACT_APP_API_URL + "site/panel/";


    getDocuments = (id: string): Promise<Document[]> => {

        return axios.get(this.base_url + "users/" + id + "/documents");

    }

    updateDocument = (userId: string, document: Document): Promise<Document> => {

        return axios.put(this.base_url + "users/" + userId + "/document/" + document)
    }

    updateDocuments = (document_id:string,user_id:string,status:number): Promise<Document> => {

        return axios.put(this.base_url + "/documents/" + document_id + "/statusChange/" + status)
    }

}



