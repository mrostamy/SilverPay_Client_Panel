import { ErrorMessage, Field, Form, Formik, validateYupSchema } from "formik"
import { Link } from "react-router-dom"
import * as Yup from 'yup'



const initialValues=()=>{}

const formSubmitHandler=()=>{}

const validationSchema=Yup.object().shape({
    name:Yup.number().min(5,"sssksks")
})

function goto() {
    $('html , body').animate({
        scrollTop: $("#btnId").offset()!.top - 20

    }, 500);

}

const EditInfo = () => {
    return (<div className="tab-pane" id="profile">
        {/* The  profile*/}
        <div className="card-header">
            <h3 className="card-title">اطلاعات شخصی</h3>
        </div>
        {/* /.card-header */}
        {/* form start */}
        <Formik initialValues={initialValues} onSubmit={formSubmitHandler} validationSchema={validateYupSchema} >
            {({ dirty, isSubmitting }) =>

                <Form role="form">

                    {dirty ? <div className="alert alert-warning">
                        <h6>هشدار!</h6>
                        <p style={{ backgroundColor: "white !important" }}> شما تغییری در اطلاعات انجام داده اید .لطفا  تغییرات را
                            <Link to="#" style={{ textDecorationLine: "none", color: " !important" }} onClick={goto}> ذخیره </Link>  نمایید. </p>
                    </div> : null}

                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="name">نام</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="نام خود  را وارد کنید"
                            />
                            <ErrorMessage name='name' className='error' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">شماره موبایل</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="شماره موبایل را وارد کنید"

                            />
                            <ErrorMessage name='phoneNumber' />

                        </div>


                        <div className="form-group">
                            <label>جنسیت</label>
                            <Field as="select" className="form-control select2 select2-hidden-accessible" style={{ width: "100%" }} aria-hidden="true">
                                <option value="male">مرد</option>
                                <option value="female">زن</option>
                            </Field>

                        </div>
                        <div className="form-group">
                            <label htmlFor="city">شهر</label>
                            <Field
                                type="text"
                                className="form-control"
                                id="city"
                                name="city"
                                placeholder=" شهرخود را وارد کنید"
                            />
                        </div>
                        <div className="form-group">
                            <label>آدرس</label>
                            <textarea
                                className="form-control"
                                rows={3}
                                placeholder="وارد کردن آدرس ..."
                                name="address"

                            />
                        </div>



                    </div>
                    <div className="card-footer" id="btnId">
                        <button type="submit" className="btn btn-primary">
                            ارسال
                        </button>
                    </div>
                </Form>
            }
        </Formik>
    </div>
    )
}

export default EditInfo;