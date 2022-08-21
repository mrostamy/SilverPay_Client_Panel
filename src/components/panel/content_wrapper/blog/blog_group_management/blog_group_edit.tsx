import { FormControl, Input, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInjection } from "../../../../../ioc.react";
import { blogGroup } from "../../../../../models/blog_group";
import { BlogGroupService } from "../../../../../services/blog/blog_group_service";

export default function BlogGroupEdit() {

    const blog_group_service = useInjection(BlogGroupService)

    const { blogGroupId } = useParams<{ blogGroupId: string }>();

    let groups: blogGroup[];
    let group: blogGroup;


    const loadGroups = () => {
        blog_group_service.getblogGroups()
            .then(response => {


                // group!!= response.find(g => g.id === blogGroupId);

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
                    {groups!!.map(el => {
                        return (
                            <>
                                <MenuItem>{el.name}</MenuItem>
                            </>
                        )
                    })}
                </Select>
            </FormControl>
        </>
    )
}