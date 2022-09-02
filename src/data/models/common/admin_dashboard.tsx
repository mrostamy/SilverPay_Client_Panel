import { blog } from "../blog"
import { ticket } from "../ticket"
import { days } from "./days"

export interface adminDashboard {


    ClosedTicketCount: number
    unClosedTicketCount: number

    astFiveTickets: ticket[]

    totalInventory: number

    inventory5Days: days

    enterMoney5Days: days

    totalEnterMoney: number

    totalExitMoney: number

    exitMoney5Days: days


    totalBlogCount: number
    approvedBlogCount: number
    unApprovedBlogCount: number

    totalBlog5Days: days
    unApprovedBlog5Days: days
    approvedBlog5Days: days

    last7Blogs: blog[]

    List<UserBlogInfoDto> last10UsersBlogInfo:
    
}