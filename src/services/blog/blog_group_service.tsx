import axios from "axios";
import { injectable } from "inversify";
import { blogGroup } from "../../data/models/blog_group";

@injectable()
export class BlogGroupService {


    private base_url = process.env.REACT_APP_API_URL + "site/panel/";


    getblogGroups = (): Promise<blogGroup[]> => {

        return axios.get(this.base_url  + "/blogGroups");

    }

    getblogGroup = (id: string): Promise<blogGroup> => {

        return axios.get(this.base_url + "users/" + id + "/blogGroups");

    }

    updateBlogGroup = (userId: string, blogGroup: any): Promise<blogGroup> => {

        return axios.put(this.base_url + "users/" + userId + "/blogGroup/" + blogGroup)
    }

    addBlogGroup = (userId: string,blogGroup: any): Promise<blogGroup> => {

        return axios.put(this.base_url + "users/" + userId + "/blogGroup/" + blogGroup)
    }

    deleteBlogGroup = (user_id: string, blogGroupId: string): Promise<any> => {

        return axios.delete(this.base_url + "users/" + user_id + "/blogGroups/" + blogGroupId);

    }


}