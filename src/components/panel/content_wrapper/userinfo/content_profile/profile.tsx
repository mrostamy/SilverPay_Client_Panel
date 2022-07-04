
import user4 from "../../../../../assets/images/user4-128x128.jpg";
import user1 from "../../../../assets/images/user1-128x128.jpg";
import user3 from "../../../../assets/images/user3-128x128.jpg";
import user6 from "../../../../assets/images/user6-128x128.jpg";
import photo1 from "../../../../assets/images/photo1.png";
import photo2 from "../../../../assets/images/photo2.png";
import photo3 from "../../../../assets/images/photo3.jpg";
import photo4 from "../../../../assets/images/photo4.jpg";


const ContentProfile = () => {
    return (
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        {/* Profile Image */}
                        <div className="card card-primary card-outline">
                            <div className="card-body box-profile">
                                <div className="text-center">
                                    <img
                                        className="profile-user-img img-fluid img-circle"
                                        src={user4}
                                        alt="User profile picture"
                                    />
                                </div>
                                <h3 className="profile-username text-center">فاطمه برهمند</h3>
                                <p className="text-muted text-center">مهندس نرم افزار</p>
                                <ul className="list-group list-group-unbordered mb-3">
                                    <li className="list-group-item">
                                        <b>دنبال شونده</b> <a className="float-right">1,322</a>
                                    </li>
                                    <li className="list-group-item">
                                        <b>دنبال کننده</b> <a className="float-right">543</a>
                                    </li>
                                    <li className="list-group-item">
                                        <b>دوستان</b> <a className="float-right">13,287</a>
                                    </li>
                                </ul>
                                <a href="#" className="btn btn-primary btn-block">
                                    <b>دنبال کردن</b>
                                </a>
                            </div>
                            {/* /.card-body */}
                        </div>
                    </div>
                    {/* /.col */}
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-header p-2">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#prof_pic"
                                            data-toggle="tab"
                                        >
                                            عکس پروفایل                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#profile" data-toggle="tab">
                                            مشخصات کاربری
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#reset_passowrd" data-toggle="tab">
                                            بازیابی رمز عبور
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#bankcard" data-toggle="tab">
                                            کارت بانکی                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* /.card-header */}
                            <div className="card-body">
                                <div className="tab-content">
                                    <div className="active tab-pane" id="prof_pic">
                                        <p>عکس کاربر</p>
                                    </div>
                                    {/* /.tab-pane */}
                                    <div className="tab-pane" id="profile">
                                        {/* The  profile*/}
                                        <div className="card-header">
                                            <h3 className="card-title">اطلاعات شخصی</h3>
                                        </div>
                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form role="form">
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="name">نام</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        name="name"
                                                        placeholder="نام خود  را وارد کنید"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="phoneNumber">شماره موبایل</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="phoneNumber"
                                                        name="phoneNumber"
                                                        placeholder="شماره موبایل را وارد کنید"
                                                    />
                                                </div>


                                                <div className="form-group">
                                                    <label>جنسیت</label>
                                                    <select className="form-control select2 select2-hidden-accessible" style={{ width: "100%" }} aria-hidden="true">
                                                        <option selected>مرد</option>
                                                        <option>زن</option>
                                                    </select>

                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="city">شهر</label>
                                                    <input
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
                                                        defaultValue={""}
                                                    />
                                                </div>



                                            </div>
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary">
                                                    ارسال
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* /.tab-pane */}
                                    <div className="tab-pane" id="reset_passowrd">
                                        <form role="form">
                                            <div className="form-group">
                                                <label htmlFor="oldpassword">رمز عبور قبلی</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="oldpassword"
                                                    name="oldpassword"
                                                    placeholder="پسورد قبلی خود  را وارد کنید"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">رمز عبور جدید</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="oldpassword"
                                                    name="oldpassword"
                                                    placeholder="پسورد جدید خود  را وارد کنید"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="repeatpassword">
                                                    تکرار رمز عبور  جدید
                                                </label>
                                                <input
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
                                        </form>
                                    </div>
                                    <div className="tab-pane" id="bankcard">
                                        <div className="alert alert-info">
                                            <h6>توجه!</h6>
                                            <p>الزاما باید حساب بانکی شخصی که مدارک ایشان ارسال شده ثبت شود </p>
                                        </div>
                                        <div className="alert alert-warning">
                                            <h6>هشدار!</h6>
                                            <p>هیچ گونه مسئولیتی را در قبال واریز  وجه به حساب دیگران را نمیپذبرد </p>
                                        </div>
                                        <form role="form">
                                            <div className="form-group">
                                                <label htmlFor="bankname">نام بانک</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="bankname"
                                                    name="bankname"
                                                    placeholder="نام بانک را وارد نمایید"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="cardowner">نام صاحب کارت</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="cardowner"
                                                    name="cardowner"
                                                    placeholder="نام صاحب کارت بانکی را وارد نمایید"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="shaba">شماره شبا</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="shaba"
                                                    name="shaba"
                                                    placeholder="شماره شبای خود را  وارد نمایید"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="accountnumber">شماره حساب</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="accountnumber"
                                                    name="accountnumber"
                                                    placeholder="شماره حساب  خود را  وارد نمایید"
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary">
                                                ارسال
                                            </button>
                                        </form>
                                    </div>
                                    {/* /.tab-pane */}
                                </div>
                                {/* /.tab-content */}
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.nav-tabs-custom */}
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
            </div>
            {/* /.container-fluid */}
        </section>

    )
}

export default ContentProfile;