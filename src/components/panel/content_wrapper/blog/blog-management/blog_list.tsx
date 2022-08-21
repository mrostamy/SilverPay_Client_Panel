import { Checkbox, FormControlLabel } from "@mui/material"
import { useInjection } from "../../../../../ioc.react"
import { blog } from "../../../../../models/blog"
import { pagination } from "../../../../../models/pagination"
import { BlogService } from "../../../../../services/blog/blog_service "

export default function BlogList() {

    const blog_service = useInjection(BlogService)

    let blogs: blog[]

    let pagination: pagination;

    const loadblogs = () => {

    }

    function onSelectChange() {



    }

    function onApprovChange() {



    }



    return (
        <>
            <div className="container">
                <div className="row">
                    <table>
                        <thead>
                            <th>blogs</th>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>action</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button onClick={() => { }}>add</button>
                                    <button>edit</button>

                                    <button>delete</button>

                                    <FormControlLabel label="selected"
                                        control={<Checkbox checked onChange={onSelectChange} />} />

                                    <FormControlLabel label="approved"
                                        control={<Checkbox checked onChange={onApprovChange} />} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )

}