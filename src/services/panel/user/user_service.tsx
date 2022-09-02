import axios from "axios";
import User from "../../../data/models/User";
import { injectable } from "inversify";



@injectable()
export class UserService {



    base_url = "http://localhost:8080/api/site/panel/users/2222";
    // base_url = process.env.REACT_APP_API_URL + "site/panel/users/";

    private token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoLHNvdG9wYXRlQGRpZ2l0YWx1cy5jb20iLCJpc3MiOiJtb2hhbW1hZCIsImlhdCI6MTY1NzIwNzEwNiwiZXhwIjoxNjU3Mzc5OTA2fQ.u-OgBu281y02HXeePt-qV4Zk7rLDKu1SacLM6yjjmO7Nle-oV5551GGIBHG79s0HvN80e8azv3gl8jg9odzwmw";

    private myHeaders={

        'Authorization':`bearer ${this.token}`,
        'Access-Control-Allow-Origin':'*'
    }

    public testUser(){
        console.log("testUser")
        axios.get(this.base_url,{headers:{"Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyYWIzYzdkMS1hM2ZmLTQ2ZGYtYjA0NS01NGM1NzM1YTFjMDAsc290b3BhdGVAZGlnaXRhbHVzLmNvbSIsImlzcyI6Im1vaGFtbWFkIiwiaWF0IjoxNjU3MjgxMzcyLCJleHAiOjE2NTc0NTQxNzJ9.d48LoE-aANnut1HowLjWz9DoTDUNwRDOZsLfOyzzRHcwiHBU7aZ_N9yCBsTGE9huXW3XzaZsJf2bAtcDmD8L3A",
    
                                            "Access-Control-Allow-Origin":"*"
    }})
        .then(r=>console.log(r)).catch(e=>console.log(e)).finally();
    }



    public getUsers(): Promise<User[]> {

        return axios
            .get(this.base_url, { headers: { 'Authorization':"Bearer  "+ localStorage.getItem('token') || "" } })

    }

    public getUser(id: string): Promise<User> {


        return axios
            .get(this.base_url + id,{ headers:this.myHeaders});

    }

    public insertUser(user: User): Promise<User> {

        console.log(user.name)
        // const myHeaders={
        //     'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoLHNvdG9wYXRlQGRpZ2l0YWx1cy5jb20iLCJpc3MiOiJtb2hhbW1hZCIsImlhdCI6MTY1NzE5NjQ1NSwiZXhwIjoxNjU3MzY5MjU1fQ.WYTG8jZr9yAZUSG2SXVXHfO_pGQIt12RBVprqE8cndeoiOKzJBCZC62O93Dv1DYprFksAa9PZzdOF_9HosYg6g'
        // }
        const myHeaders={
            'Authorization':'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoLHNvdG9wYXRlQGRpZ2l0YWx1cy5jb20iLCJpc3MiOiJtb2hhbW1hZCIsImlhdCI6MTY1NzIwNzEwNiwiZXhwIjoxNjU3Mzc5OTA2fQ.u-OgBu281y02HXeePt-qV4Zk7rLDKu1SacLM6yjjmO7Nle-oV5551GGIBHG79s0HvN80e8azv3gl8jg9odzwmw'
        }
        return axios.post(this.base_url + 'insertUser', user
        ,{headers: myHeaders});
    }

    public updateUser(id:string,user:User):Promise<User>{
        return axios.put(this.base_url+"updateuser/"+id,user,{headers:this.myHeaders})
    }

    public resetPassword(id:string | null,passModel:any):Promise<User>{
        return axios.put(this.base_url+"resetPassword/"+id,passModel,{headers:this.myHeaders})
    }

}
