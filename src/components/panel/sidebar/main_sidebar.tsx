import { Link } from 'react-router-dom'
import logo from '../../../assets/images/AdminLTELogo.png'

export const MainSideBar = () => {
    return (<aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="#" className="brand-link">
            <img
                src={logo}
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">پنل مدیریت</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
            <div>
                {/* Sidebar user panel (optional) */}
                {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img
                            src="https://www.gravatar.com/avatar/52f0fbcbedee04a121cba8dad1174462?s=200&d=mm&r=g"
                            className="img-circle elevation-2"
                            alt="User Image"
                        />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">
                            حسام موسوی
                        </a>
                    </div>
                </div> */}
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fa fa-home" />
                                <p>
                                    داشبورد
                                    <span className="right badge badge-danger">جدید</span>
                                </p>
                            </a>
                        </li>
                        {/* //#region admin */}
                        <li className="nav-item has-treeview menu-open">
                            <a href="#" className="nav-link ">
                                <i className="nav-icon fa fa-info" />
                                <p>
                                    کاربران
                                    <i className="right fa fa-angle-left" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to={"/panel/users/usersmanagement"} className="nav-link ">
                                        <i className="nav-icon fa fa-user" />
                                        <p>مدریت کاربران</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fa fa-book" />
                                        <p>مدارک</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* //#endregion */}

                        //#region user
                        <li className="nav-item has-treeview menu-open">
                            <a href="#" className="nav-link ">
                                <i className="nav-icon fa fa-info" />
                                <p>
                                    اطلاعات شما
                                    <i className="right fa fa-angle-left" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="#" className="nav-link ">
                                        <i className="nav-icon fa fa-user" />
                                        <p>پروفایل</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fa fa-book" />
                                        <p>مدارک</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fa fa-book" />
                                        <p>تنظیمات اطلاع رسانی</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fa fa-book" />
                                        <p>کارت های بانکی</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        //#endregion
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fa fa-user" />
                                <p>
                                    پروفایل
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
        </div>
        {/* /.sidebar */}
    </aside>
    )
}