
export const MainSideBar = () => {
    return (<aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
            <img
                src="dist/img/AdminLTELogo.png"
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
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
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
                </div>
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
                        <li className="nav-item has-treeview menu-open">
                            <a href="#" className="nav-link active">
                                <i className="nav-icon fa fa-dashboard" />
                                <p>
                                    صفحات شروع
                                    <i className="right fa fa-angle-left" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="#" className="nav-link active">
                                        <i className="fa fa-circle-o nav-icon" />
                                        <p>صفحه فعال</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="fa fa-circle-o nav-icon" />
                                        <p>صفحه غیر فعال</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fa fa-th" />
                                <p>
                                    لینک ساده
                                    <span className="right badge badge-danger">جدید</span>
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