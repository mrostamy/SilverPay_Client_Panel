import { Outlet } from "react-router-dom"
import { ContentHeader } from "./content_header/content_header"
import { ContentMain } from "./content_main/content_main"

const Wrapper = () => {


    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <ContentHeader />
            {/* /.content-header */}
            {/* Main content */}
            <Outlet />
            {/* /.content */}
        </div>

    )


}

export default Wrapper;