
import { injectable } from "inversify";
import { isExpired, useJwt } from "react-jwt";
import Document from "../../../models/document";
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

    addDocument = (document: Document, userId: string): Promise<Document> => {

        return axios.put(this.base_url + "users/" + userId + "/document/" + document)
    }

}



