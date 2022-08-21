import { useInjection } from "../../../../../ioc.react"
import { BlogGroupService } from "../../../../../services/blog/blog_group_service"
import BlogList from "./blog_list"

export default function BlogManageMent() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <p>مشاهده و ویرایش  بلاگ ها</p>
                </div>
                <div className="row">
                    <BlogList />
                </div>
            </div>
        </>
    )

}