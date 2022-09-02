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
import Manage_Wallet from "./content_wrapper/admin/wallet/manage_wallets"
import TicketList from "./content_wrapper/admin/ticket/ticket_list"
import GateManageMent from "./content_wrapper/admin/gate/gate_management"
import GateEdit from "./content_wrapper/admin/gate/gate_edit"
import EasyPayManagement from "./content_wrapper/admin/easyPay/easy_pay_management"
import EasyPayAdd from "./content_wrapper/admin/easyPay/easyPay_add"
import EasyPayEdit from "./content_wrapper/admin/easyPay/easyPay_edit"
import BlogGroupManageMent from "./content_wrapper/blog/blog_group_management/blog_group_management"
import BlogGroupAdd from "./content_wrapper/blog/blog_group_management/blog_group_add"
import BlogGroupEdit from "./content_wrapper/blog/blog_group_management/blog_group_edit"
import BlogManageMent from "./content_wrapper/blog/blog-management/blog_manage"
import BlogEdit from "./content_wrapper/blog/blog-management/blog_edit"
import BlogAdd from "./content_wrapper/blog/blog-management/blog_add"
import AccountantDashboard from "./content_wrapper/accountant/dashboard/accountant_dashboard"
import AccountantInventory from "./content_wrapper/accountant/accountant-financial/accountantInventory/accountant_inventories"
import InventoryWalletList from "./content_wrapper/accountant/accountant-financial/accountantInventory/inventory_wallets_list"
import InventoryBankCardList from "./content_wrapper/accountant/accountant-financial/accountantInventory/inventory_bankCard_list"
import Entry from "./content_wrapper/accountant/accountant-entries/accountant_entry"
import EntryAdd from "./content_wrapper/accountant/accountant-entries/accountant_entry_add"
import BankCardEntry from "./content_wrapper/accountant/accountant-financial/accountant_bankcards/BankCardEntry"
import WalletEntry from "./content_wrapper/accountant/accountant-financial/accountant_wallets/accountant_wallet_entry"
import ManageFactors from "./content_wrapper/accountant/accountantFactors/manage_factors"
import FactorEdit from "./content_wrapper/accountant/accountantFactors/factor_edit"
import GateFactors from "./content_wrapper/accountant/accountant-financial/gates/gate_factors"
import Gate from "./content_wrapper/admin/gate/gate"
import Gates from "./content_wrapper/accountant/accountant-financial/gates/gates"
import WalletGates from "./content_wrapper/accountant/accountant-financial/accountant_wallets/wallet_gates"
import UserGateFactors from "../../services/panel/user/userGate_factors"
import UserGateFactorDetail from "./content_wrapper/user/user_gate_factor_detail"

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
                    <Route path="blog">
                        <Route index element={<Navigate to="blogGroup" />} />
                        <Route path="blogGroup" element={<BlogGroupManageMent />} />
                        <Route path="blogGroup/add" element={<BlogGroupAdd />} />
                        <Route path="blogGroup/edit/:blogGroupId" element={<BlogGroupEdit />} />
                        <Route path="blog" element={<BlogManageMent />} />
                        <Route path="blogGroup/add" element={<BlogAdd />} />
                        <Route path="blogGroup/edit/:blogGroupId" element={<BlogEdit />} />
                    </Route>
                    <Route path="accountant">
                        <Route index element={<Navigate to="dashboard" />} />
                        <Route path="dashboard" element={<AccountantDashboard />} />
                        <Route path="inventory" element={<AccountantInventory />} />
                        <Route path="inventory/:userId/Wallets" element={<InventoryWalletList />} />
                        <Route path="inventory/:userId/BankCards" element={<InventoryBankCardList />} />
                        <Route path="entry" element={<Entry />} />
                        <Route path="entry/add" element={<EntryAdd />} />
                        <Route path="entry/approve" element={<EntryAdd />} />
                        <Route path="entry/payed" element={<EntryAdd />} />
                        <Route path="entry/archive" element={<EntryAdd />} />
                        <Route path="entryEdit/:entryId" element={<EntryAdd />} />
                        <Route path="bankcards/:bankcardId/entry" element={<BankCardEntry />} />
                        <Route path="wallets/:walletId/entry" element={<WalletEntry />} />
                        <Route path="wallets/:walletId/factors" element={<ManageFactors />} />
                        <Route path="wallets/:walletId/gates" element={<WalletGates />} />
                        <Route path="gates/:gateId/factors" element={<GateFactors />} />
                        <Route path="gate/:gateId/factors" element={<UserGateFactors />} />
                        <Route path="gate/factors/:foctorId" element={<UserGateFactorDetail />} />
                        <Route path="gates" element={<Gates />} />
                        <Route path="foctors" element={<ManageFactors />} />
                        <Route path="foctors" element={<ManageFactors />} />
                        <Route path="foctors/:factorId/detail" element={<FactorEdit />} />
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