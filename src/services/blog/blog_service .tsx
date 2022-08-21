import axios from "axios";
import { injectable } from "inversify";
import { blog } from "../../models/blog";
import { PaginationResult } from "../../models/pagination";

@injectable()
export class BlogService {


    private base_url = process.env.REACT_APP_API_URL + "site/panel/";


    getblogs2 = (id: string, page?: any, itemPerPage?: any, filter?: any, sortHead?: any, sortDir?: any)
        : PaginationResult<blog[]> => {

        let paginationResult = new PaginationResult<blog[]>();

        axios.get<PaginationResult<blog[]>>(this.base_url + "/blogs")
            .then(response => {
                paginationResult = response.data;
            }).catch(error => {
                console.log(error)
            });

        return paginationResult

    }


    getblogs = (): PaginationResult<blog[]> => {

        let paginationResult = new PaginationResult<blog[]>();

        axios.get<PaginationResult<blog[]>>(this.base_url + "/blogs")
            .then(response => {
                paginationResult = response.data;
            }).catch(error => {
                console.log(error)
            });

        return paginationResult

    }

    getblog = (id: string): Promise<blog> => {

        return axios.get(this.base_url + "users/" + id + "/blogs");

    }

    addBlog = (userId: string, blog: any): Promise<blog> => {

        return axios.put(this.base_url + "users/" + userId + "/blogs/" + blog)
    }

    updateBlog = (userId: string, blog: any): Promise<blog> => {

        return axios.put(this.base_url + "users/" + userId + "/blogs/" + blog)
    }

    approveBlog = (userId: string, flag: boolean, id: any): Promise<blog> => {

        return axios.put(this.base_url + "users/" + userId + "/blogs/" + id + "/approveBlog/", { flag })
    }

    selectBlog = (userId: string, flag: boolean, id: any): Promise<blog> => {

        return axios.put(this.base_url + "users/" + userId + "/blogs/" + id + "/selectBlog/", { flag })
    }



    deleteBlog = (user_id: string, blogGroupId: string): Promise<any> => {

        return axios.delete(this.base_url + "users/" + user_id + "/blogs/" + blogGroupId);

    }

    deleteImageBlog = (user_id: string, blogImageUrl: string): Promise<any> => {

        return axios.post(this.base_url + "users/" + user_id + "/blogs", blogImageUrl);

    }


}