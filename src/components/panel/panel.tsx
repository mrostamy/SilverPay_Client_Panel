import React from "react"
import { BrowserRouter, Navigate, Outlet, Route, Router, Routes } from "react-router-dom"
import { ContentMain } from "./content_wrapper/content_main/content_main"
import ContentProfile from "./content_wrapper/content_profile/profile"
import Wrapper from "./content_wrapper/content_wrapper"
import Dashboard from "./content_wrapper/dashboard/dashboard"
import { Control_aside } from "./control_aside/control_aside"
import { Footer } from "./footer/footer"
import { Navbar } from "./navbar/navbar"
import { MainSideBar } from "./sidebar/main_sidebar"

const Panel = () => {
    return (
        <>
            <div className="wrapper">
                <Navbar />
                <MainSideBar />
                <Routes>
                    <Route path="/" element={<Wrapper />}>
                        <Route index element={<Navigate to="/panel/dashboard" replace />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="profile" element={<ContentProfile />} />
                    </Route>
                </Routes>
                <Control_aside />
                <Footer />
            </div>
        </>

    )

}

export default Panel;