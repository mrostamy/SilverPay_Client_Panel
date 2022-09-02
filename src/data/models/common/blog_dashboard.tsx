import { blog } from "../blog"
import { days } from "./days"
import { UserBlogInfoDto } from "./user_blog_info"

export interface blogDashboard {


    totalBlogCount: number
    approvedBlogCount: number
    unApprovedBlogCount: number

    totalBlog5Days: days,
    unApprovedBlog5Days: days,
    approvedBlog5Days: days,

    last7Blogs: blog[]

   last10UsersBlogInfo: UserBlogInfoDto[]

}