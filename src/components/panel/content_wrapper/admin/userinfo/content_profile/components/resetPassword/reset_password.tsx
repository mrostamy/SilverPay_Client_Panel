import { Field, Form, Formik } from "formik"


const resetPasswordHandler=(values:any)=>{

    

}

const ResetPassword = () => {

    return (
        <div className="tab-pane" id="reset_passowrd">
            <Formik initialValues={{}} onSubmit={resetPasswordHandler}>

                <Form>
                    <div className="form-group">
                        <label htmlFor="oldpassword">رمز عبور قبلی</label>
                        <Field
                            type="text"
                            className="form-control"
                            id="oldpassword"
                            name="oldpassword"
                            placeholder="پسورد قبلی خود  را وارد کنید"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newpassword">رمز عبور جدید</label>
                        <Field
                            type="text"
                            className="form-control"
                            id="newpassword"
                            name="newpassword"
                            placeholder="پسورد جدید خود  را وارد کنید"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="repeatpassword">
                            تکرار رمز عبور  جدید
                        </label>
                        <Field
                            type="text"
                            className="form-control"
                            id="repeatpassword"
                            name="repetpassword"
                            placeholder="تکرار رمز عبور  جدید خود  را وارد کنید"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        ارسال
                    </button>
                </Form>
            </Formik>
        </div>
    )

}

export default ResetPassword;