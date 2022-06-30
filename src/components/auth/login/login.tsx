// import "../../../assets/css/login/font-awesome.min.css";
// import "../../../assets/css/login/adminlte.min.css";
import "../../../assets/css/login/blue.css";
// import "../../../assets/css/login/googleapis.css";
// import "../../../assets/css/login/bootstrap-rtl.min.css";
// import "../../../assets/css/login/custom-style.css";

import { Field, Form, Formik, useFormik } from "formik";
import { login } from "../../../services/auth_service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {

    const nav = useNavigate()

    const handleSubmit = (values: any) => {

        login(values).then(resp => {
            console.log(resp.data)
            localStorage.setItem("token", resp.data)
            nav("/")
            toast.success("login succesfully", { theme: "colored" });
        }

        ).catch(err => {
            toast.error(err, { theme: "colored" })
        })

    }

    return (
        <>
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html">
                        <b>ورود به سایت</b>
                    </a>
                </div>
                {/* /.login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">فرم زیر را تکمیل کنید و ورود بزنید</p>

                        <Formik initialValues={{ "username": '', "password": '' }} onSubmit={handleSubmit}>
                            {({ dirty, errors, isValid, touched }) => {
                                return (

                                    <Form>
                                        <div className="input-group mb-3">
                                            <Field type="text" name="username" id="username" required className="form-control" placeholder="ایمیل" />
                                            <div className="input-group-append">
                                                <span className="fa fa-envelope input-group-text" />
                                            </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <Field
                                                type="password"
                                                name="password"
                                                id="password"
                                                required
                                                className="form-control"
                                                placeholder="رمز عبور"
                                            />
                                            <div className="input-group-append">
                                                <span className="fa fa-lock input-group-text" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="checkbox icheck">
                                                    <label>
                                                        <Field type="checkbox" name="remember" id="remember" /> یاد آوری من
                                                    </label>
                                                </div>
                                            </div>
                                            {/* /.col */}
                                            <div className="col-4">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-block btn-flat"
                                                >
                                                    ورود
                                                </button>
                                            </div>
                                            {/* /.col */}
                                        </div>
                                        {isValid && <p>isValid</p>}
                                        {dirty && <p>dirty</p>}
                                        {errors && <p>errors</p>}
                                        {touched && <p>touched</p>}
                                    </Form>

                                );
                            }}

                        </Formik>
                        <div className="social-auth-links text-center mb-3">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-block btn-primary">
                                <i className="fa fa-facebook mr-2" /> ورود با اکانت فیسوبک
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <i className="fa fa-google-plus mr-2" /> ورود با اکانت گوگل
                            </a>
                        </div>
                        {/* /.social-auth-links */}
                        <p className="mb-1">
                            <a href="#">رمز عبورم را فراموش کرده ام.</a>
                        </p>
                        <p className="mb-0">
                            <a href="register.html" className="text-center">
                                ثبت نام
                            </a>
                        </p>
                    </div>
                    {/* /.login-card-body */}
                </div>
            </div>
            {/* /.login-box */}

        </>
    )
}

export default Login;

