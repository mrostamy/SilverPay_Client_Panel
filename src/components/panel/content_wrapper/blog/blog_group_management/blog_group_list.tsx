import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"
import { useInjection } from "../../../../../ioc.react"
import { BlogGroupService } from "../../../../../services/blog/blog_group_service"

export default function BlogGroupList() {

    const blog_group_service = useInjection(BlogGroupService)

    const navigate = useNavigate();


    const onCreate = (values: any) => {


        navigate("/panel/blog/add", { replace: true })
        blog_group_service.addBlogGroup("3", values)
            .then(response => {

            }).then(error => {

            })

    }

    const onUpdate = (values: any) => {


        navigate("/panel/blog/add", { replace: true })
        blog_group_service.addBlogGroup("3", values)
            .then(response => {

            }).then(error => {

            })

    }

    const onDelete = (values: any) => {


        navigate("/panel/blog/delete", { replace: true })
        blog_group_service.deleteBlogGroup("3", values)
            .then(response => {

            }).then(error => {

            })

    }


    return (
        <>
            <Button onClick={() => { onCreate("") }}>add</Button>
            <Button onClick={() => { onUpdate("") }}>edit</Button>
            <Button onClick={() => { onDelete("") }}>delete</Button>
        </>
    )

}