export const Register = () => {

    return (<div className="register-box">
        <div className="register-logo">
            <b>ثبت نام در سایت</b>
        </div>
        <div className="card">
            <div className="card-body register-card-body">
                <p className="login-box-msg">ثبت نام کاربر جدید</p>
                <form action="../../index.html" method="post">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="نام و نام خانوادگی"
                        />
                        <div className="input-group-append">
                            <span className="fa fa-user input-group-text" />
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" placeholder="ایمیل" />
                        <div className="input-group-append">
                            <span className="fa fa-envelope input-group-text" />
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="رمز عبور"
                        />
                        <div className="input-group-append">
                            <span className="fa fa-lock input-group-text" />
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="تکرار رمز عبور"
                        />
                        <div className="input-group-append">
                            <span className="fa fa-lock input-group-text" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <div className="checkbox icheck">
                                <label>
                                    <input type="checkbox" /> با <a href="#">شرایط</a> موافق هستم
                                </label>
                            </div>
                        </div>
                        {/* /.col */}
                        <div className="col-4">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block btn-flat"
                            >
                                ثبت نام
                            </button>
                        </div>
                        {/* /.col */}
                    </div>
                </form>
                <div className="social-auth-links text-center">
                    <p>- یا -</p>
                    <a href="#" className="btn btn-block btn-primary">
                        <i className="fa fa-facebook mr-2" />
                        ثبت نام با اکانت فیس بود
                    </a>
                    <a href="#" className="btn btn-block btn-danger">
                        <i className="fa fa-google-plus mr-2" />
                        ثبت نام با گوگل
                    </a>
                </div>
                <a href="login.html" className="text-center">
                    من قبلا ثبت نام کرده ام
                </a>
            </div>
            {/* /.form-box */}
        </div>
        {/* /.card */}
    </div>
    )

}