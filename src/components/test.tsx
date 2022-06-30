

export const Test3 = () => {


    return (
        <div className="wrapper">
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#">
                            <i className="fa fa-bars" />
                        </a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="index3.html" className="nav-link">
                            خانه
                        </a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">
                            تماس
                        </a>
                    </li>
                </ul>
                {/* SEARCH FORM */}
                <form className="form-inline ml-3">
                    <div className="input-group input-group-sm">
                        <input
                            className="form-control form-control-navbar"
                            type="search"
                            placeholder="جستجو"
                            aria-label="Search"
                        />
                        <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fa fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
                {/* Right navbar links */}
                <ul className="navbar-nav mr-auto">
                    {/* Messages Dropdown Menu */}
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="fa fa-comments-o" />
                            <span className="badge badge-danger navbar-badge">3</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
                            <a href="#" className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                    <img
                                        src="dist/img/user1-128x128.jpg"
                                        alt="User Avatar"
                                        className="img-size-50 ml-3 img-circle"
                                    />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            حسام موسوی
                                            <span className="float-left text-sm text-danger">
                                                <i className="fa fa-star" />
                                            </span>
                                        </h3>
                                        <p className="text-sm">با من تماس بگیر لطفا...</p>
                                        <p className="text-sm text-muted">
                                            <i className="fa fa-clock-o mr-1" /> 4 ساعت قبل
                                        </p>
                                    </div>
                                </div>
                                {/* Message End */}
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                    <img
                                        src="dist/img/user8-128x128.jpg"
                                        alt="User Avatar"
                                        className="img-size-50 img-circle ml-3"
                                    />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            پیمان احمدی
                                            <span className="float-left text-sm text-muted">
                                                <i className="fa fa-star" />
                                            </span>
                                        </h3>
                                        <p className="text-sm">من پیامتو دریافت کردم</p>
                                        <p className="text-sm text-muted">
                                            <i className="fa fa-clock-o mr-1" /> 4 ساعت قبل
                                        </p>
                                    </div>
                                </div>
                                {/* Message End */}
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                    <img
                                        src="dist/img/user3-128x128.jpg"
                                        alt="User Avatar"
                                        className="img-size-50 img-circle ml-3"
                                    />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            سارا وکیلی
                                            <span className="float-left text-sm text-warning">
                                                <i className="fa fa-star" />
                                            </span>
                                        </h3>
                                        <p className="text-sm">پروژه اتون عالی بود مرسی واقعا</p>
                                        <p className="text-sm text-muted">
                                            <i className="fa fa-clock-o mr-1" />4 ساعت قبل
                                        </p>
                                    </div>
                                </div>
                                {/* Message End */}
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item dropdown-footer">
                                مشاهده همه پیام‌ها
                            </a>
                        </div>
                    </li>
                    {/* Notifications Dropdown Menu */}
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="fa fa-bell-o" />
                            <span className="badge badge-warning navbar-badge">15</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
                            <span className="dropdown-item dropdown-header">15 نوتیفیکیشن</span>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <i className="fa fa-envelope ml-2" /> 4 پیام جدید
                                <span className="float-left text-muted text-sm">3 دقیقه</span>
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <i className="fa fa-users ml-2" /> 8 درخواست دوستی
                                <span className="float-left text-muted text-sm">12 ساعت</span>
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <i className="fa fa-file ml-2" /> 3 گزارش جدید
                                <span className="float-left text-muted text-sm">2 روز</span>
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item dropdown-footer">
                                مشاهده همه نوتیفیکیشن
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="control-sidebar"
                            data-slide="true"
                            href="#"
                        >
                            <i className="fa fa-th-large" />
                        </a>
                    </li>
                </ul>
            </nav>
            {/* /.navbar */}
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
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
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">صفحه سریع</h1>
                            </div>
                            {/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-left">
                                    <li className="breadcrumb-item">
                                        <a href="#">خانه</a>
                                    </li>
                                    <li className="breadcrumb-item active">صفحه سریع</li>
                                </ol>
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-2 text-bold">عنوان کارت</h5>
                                        <p className="card-text">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                                            مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                            کاربردی می باشد.
                                        </p>
                                        <a href="#" className="card-link">
                                            لینک کارت
                                        </a>
                                        <a href="#" className="card-link mr-2">
                                            لینک صفحه
                                        </a>
                                    </div>
                                </div>
                                <div className="card card-primary card-outline">
                                    <div className="card-body">
                                        <h5 className="card-title mb-2 text-bold">عنوان کارت</h5>
                                        <p className="card-text">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                            استفاده از طراحان گرافیک است.
                                        </p>
                                        <a href="#" className="card-link">
                                            لینک کارت
                                        </a>
                                        <a href="#" className="card-link mr-2">
                                            لینک صفحه
                                        </a>
                                    </div>
                                </div>
                                {/* /.card */}
                            </div>
                            {/* /.col-md-6 */}
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="m-0">ویژه</h5>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title mb-2 text-bold">عنوان کارت ویژه</h6>
                                        <p className="card-text">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                                            مجله در ستون و سطرآنچنان که لازم است{" "}
                                        </p>
                                        <a href="#" className="btn btn-primary">
                                            برو به صفحه ایکس
                                        </a>
                                    </div>
                                </div>
                                <div className="card card-primary card-outline">
                                    <div className="card-header">
                                        <h5 className="m-0">ویژه</h5>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title mb-2 text-bold">عنوان کارت ویژه</h6>
                                        <p className="card-text">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                            استفاده از طراحان گرافیک است.
                                        </p>
                                        <a href="#" className="btn btn-primary">
                                            برو به صفحه ایکس
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* /.col-md-6 */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}
            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
                <div className="p-3">
                    <h5>Title</h5>
                    <p>Sidebar content</p>
                </div>
            </aside>
            {/* /.control-sidebar */}
            {/* Main Footer */}
            <footer className="main-footer">
                {/* To the right */}
                <div className="float-right d-none d-sm-inline">Anything you want</div>
                {/* Default to the left */}
                <strong>
                    CopyLeft © 2018 <a href="http://github.com/hesammousavi/">حسام موسوی</a>.
                </strong>
            </footer>
        </div>

    )

}