import { Navigate, Route, Routes } from "react-router-dom"
import ContentProfile from "./content_wrapper/admin/userinfo/content_profile/profile"
import Wrapper from "./content_wrapper/content_wrapper"
import Dashboard from "./content_wrapper/admin/dashboard/dashboard"
import { Control_aside } from "./control_aside/control_aside"
import { Footer } from "./footer/footer"
import { Navbar } from "./navbar/navbar"
import { MainSideBar } from "./sidebar/main_sidebar"
import { NotFound } from "./notFound"
import { User_list } from "./content_wrapper/admin/usersList/users_list"
import ManageBankCard from "./content_wrapper/admin/bankCard/manage_bank_card"
import Document from "./content_wrapper/admin/document/manage_document"
import Wallet from "./content_wrapper/admin/wallet/wallet"

const Panel = () => {
    return (
        <>
            <div className="wrapper">
                <Navbar />
                <MainSideBar />
                <Routes>
                    <Route path="/" element={<Wrapper />}>
                        <Route index element={<Navigate to="/panel/dashboard" replace />} />
                        <Route path="dashboard" element={<Dashboard data={{ title: "jsjsjs" }} />} />
                        <Route path="userinfo">
                            <Route index element={<Navigate to="profile" />} />
                            <Route path="profile" element={<ContentProfile />} />
                            <Route path="docs" element={<Document />} />
                        </Route>
                    </Route>
                    <Route path="admin" element={<Wrapper />}>
                        <Route index element={<Navigate to="/admin/panel/dashboard" replace />} />
                        <Route path="admin/users/usersmanagement" element={<User_list role="admin" />} />
                        <Route path="bankcards" element={<ManageBankCard />} />
                        <Route path="document" element={<Document />} />
                        <Route path="wallet" element={<Wallet />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Control_aside />
                <Footer />
            </div>
        </>

    )

}

export default Panel;