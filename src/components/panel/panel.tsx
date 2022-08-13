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
import Manage_Wallet from "./content_wrapper/admin/wallet/manage_wallets"
import Ticket from "./content_wrapper/admin/ticket/ticket"
import TicketList from "./content_wrapper/admin/ticket/ticket_list"
import GateManageMent from "./content_wrapper/admin/gate/gate_management"
import GateEdit from "./content_wrapper/admin/gate/gate_edit"
import EasyPayManagement from "./content_wrapper/admin/easyPay/easy_pay_management"
import EasyPayAdd from "./content_wrapper/admin/easyPay/easyPay_add"
import EasyPayEdit from "./content_wrapper/admin/easyPay/easyPay_edit"

const Panel = () => {
    return (
        <>
            <div className="wrapper">
                <Navbar />
                <MainSideBar />
                <Routes >
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
                        <Route path="wallet" element={<Manage_Wallet />} />
                        <Route path="ticket" element={<TicketList />} />
                        <Route path="gate" element={<GateManageMent />} />
                        <Route path="gate/edit/:gateId" element={<GateEdit />} />
                        <Route path="easypay" element={<EasyPayManagement />} />
                        <Route path="easypay/add" element={<EasyPayAdd />} />
                        <Route path="easypay/edit/:easyPayId" element={<EasyPayEdit />} />
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