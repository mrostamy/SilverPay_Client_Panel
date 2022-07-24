import { ErrorMessage, Field, Form, Formik, getIn } from "formik"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { AuthService } from "../../../services/auth/auth_service"
import * as Yup from 'yup'

const Register = () => {

    const nav = useNavigate();

    const validation = Yup.object().shape({

        name: Yup.string().required("نام و نام خانوادگی را وارد نمایید"),
        username: Yup.string().required('user name is required').email("email format is not valid"),
        phoneNumber: Yup.string().required('phone number is required'),
        password: Yup.string().required('password is required'),
        confirm_password: Yup.string().required('confirm password is required')
            .oneOf([Yup.ref('password'), null], 'password not match'),
        confirme: Yup.bool().oneOf([true], 'please confirme licience agrement'),
    })


    const styles = {
        error: {
            color: "red",
            border: "1px solid red"
        }
    }

    function getStyles(errors: any, fieldName: any) {

        if (getIn(errors, fieldName)) {

            return {
                border: '1px solid red'
            }
        }
    }

    const auth_service = new AuthService();


    const handleRegister = (values: any) => {
        auth_service.register(values).then(resp => {
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


                <Formik
                    validationSchema={validation}
                    initialValues={{ name: '', username: '', password: '', phoneNumber: '', confirm: false }}
                    onSubmit={handleRegister}>
                    {({ errors }) => <Form>
                        <div className="input-group mb-3">
                            <Field
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="نام و نام خانوادگی"
                            // style={getStyles(errors, "name")}
                            />
                            <div className="input-group-append">
                                <span className="fa fa-user input-group-text" />
                            </div>
                        </div>
                        <ErrorMessage name="name" render={message => <div style={styles.error}>{message}</div>} />
                        <div className="input-group mb-3">
                            <Field
                                type="email"
                                name="username"
                                id="username"
                                className="form-control"
                                placeholder="ایمیل"
                            // style={getStyles(errors, "username")}
                            />
                            <div className="input-group-append">
                                <span className="fa fa-envelope input-group-text" />
                            </div>
                        </div>
                        <ErrorMessage name="username" render={message => <div style={styles.error}>{message}</div>} />
                        <div className="input-group mb-3">
                            <Field
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                className="form-control"
                                placeholder="شماره تلفن"
                            // style={getStyles(errors, "phoneNumber")}
                            />
                            <div className="input-group-append">
                                <span className="fa fa-lock input-group-text" />
                            </div>
                        </div>
                        <ErrorMessage name="phoneNumber" render={message => <div style={styles.error}>{message}</div>} />
                        <div className="input-group mb-3">
                            <Field
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="رمز عبور"
                            // style={getStyles(errors, "password")}
                            />
                            <div className="input-group-append">
                                <span className="fa fa-lock input-group-text" />
                            </div>
                        </div>
                        <ErrorMessage name="password" render={message => <div style={styles.error}>{message}</div>} />
                        <div className="input-group mb-3">
                            <Field
                                type="password"
                                className="form-control"
                                placeholder="تکرار رمز عبور"
                                name="confirm_password"
                            // style={getStyles(errors, "confirm_password")}
                            />
                            <div className="input-group-append">
                                <span className="fa fa-lock input-group-text" />
                            </div>
                        </div>
                        <ErrorMessage name="confirm_password" render={message => <div style={styles.error}>{message}</div>} />
                        <div className="row">
                            <div className="col-8">
                                <div className="checkbox icheck">
                                    <label>
                                        <Field
                                            type="checkbox"
                                            name="confirm"
                                            id="confirm"
                                        //   style={getStyles(errors, "confirm")}
                                        />
                                        با <a href="#">شرایط</a> موافق هستم
                                    </label>
                                </div>
                                <ErrorMessage name="confirm" render={message => <div style={styles.error}>{message}</div>} />
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
                    }
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