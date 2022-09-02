import { blogGroup } from "./blog_group"
import User from "./User"

export interface blog{

    id:string
    title:string
    tag:string
    picAddress:string
    text:string
    status:boolean
    summeryText:string
    isSelected:boolean
    viewCount:number


    userId:string
    userName:string
    name:string

    blogGroupId:string
    blogGroupName:string
}

