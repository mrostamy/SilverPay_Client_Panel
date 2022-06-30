import { Field, Form, Formik } from "formik"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { register } from "../../../services/auth_service"

const Register = () => {

    const nav = useNavigate();

    const handleRegister = (values: any) => {
        register(values).then(resp => {
            nav("/")
            toast.success("register successfully")
        })
            .catch(err => {
                toast.error(err, { theme: "colored" })
            })
    }




    return (<div className="register-box">
        <div className="register-logo">
            <b>ثبت نام در سایت</b>
        </div>
        <div className="card">
            <div className="card-body register-card-body">
                <p className="login-box-msg">ثبت نام کاربر جدید</p>


                <Formik initialValues={{ name: '', username: '', password: '', phoneNumber: '' }} onSubmit={handleRegister}>

                    <Form>
                        <div className="input-group mb-3">
                            <Field
                                type="text"
                                name="name"
                                id="name"

                                className="form-control"
                                placeholder="نام و نام خانوادگی"
                            />
                            <div className="input-group-append">
                                <span className="fa fa-user input-group-text" />
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <Field type="text" name="username" id="username" className="form-control" placeholder="ایمیل" />
                            <div className="input-group-append">
                                <span className="fa fa-envelope input-group-text" />
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <Field
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="رمز عبور"
                            />
                            <div className="input-group-append">
                                <span className="fa fa-lock input-group-text" />
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <Field
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                className="form-control"
                                placeholder="شماره تلفن"
                            />
                            <div className="input-group-append">
                                <span className="fa fa-lock input-group-text" />
                            </div>
                        </div>
                        {/* <div className="input-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="تکرار رمز عبور"
                            />
                            <div className="input-group-append">
                                <span className="fa fa-lock input-group-text" />
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-8">
                                <div className="checkbox icheck">
                                    <label>
                                        <input type="checkbox" name="confirm" id="confirm" /> با <a href="#">شرایط</a> موافق هستم
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
                    </Form>
                </Formik>
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

export default Register