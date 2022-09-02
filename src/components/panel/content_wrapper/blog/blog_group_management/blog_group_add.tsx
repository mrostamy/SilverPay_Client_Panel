import { FormControl, Input, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import { useInjection } from "../../../../../ioc.react";
import { blogGroup } from "../../../../../data/models/blog_group";
import { BlogGroupService } from "../../../../../services/blog/blog_group_service";

export default function BlogGroupAdd() {

    const blog_group_service = useInjection(BlogGroupService)

    let group: blogGroup;

    const loadGroups = () => {
        blog_group_service.addBlogGroup("id", group)
            .then(response => {
                group = response;
            })
            .catch(error => { })
    }

    const clear = () => {



    }

    useEffect(() => {

        loadGroups();

    }, [])


    return (

        <>
            <FormControl>
                <Input type="text" name="" />
                <Select name="groupName">

                    <MenuItem></MenuItem>

                </Select>
            </FormControl>
        </>
    )
}