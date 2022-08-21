import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInjection } from "../../../../../ioc.react";
import { blog } from "../../../../../models/blog";
import { blogGroup } from "../../../../../models/blog_group";
import { BlogGroupService } from "../../../../../services/blog/blog_group_service";
import { BlogService } from "../../../../../services/blog/blog_service ";

export default function BlogEdit() {

    const blog_service = useInjection(BlogService)

    let blog: blog;

    let blogId = useParams();



    const loadBlog = () => {

        blog_service.getblog("3")
        .then(response=>{
            blog=response;
        })

    }

    const clear = () => {



    }

    useEffect(() => {

        loadBlog();

    }, [])


    return (
        <>
        {/* edit from here */}
        </>
    )

}