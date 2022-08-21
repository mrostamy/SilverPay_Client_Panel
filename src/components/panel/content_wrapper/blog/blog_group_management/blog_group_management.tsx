import BlogGroupList from "./blog_group_list";


export default function BlogGroupManageMent() {


    return (
        <>
        <div className="container">
            <div className="row">
                <p>مشاهده و ویرایش دسته بندی بلاگ ها</p>
            </div>
            <div className="row">
                <BlogGroupList/>
            </div>
        </div>
        </>
    )

}