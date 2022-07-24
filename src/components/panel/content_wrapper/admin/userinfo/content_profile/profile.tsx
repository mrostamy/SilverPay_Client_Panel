import { useInjection } from '../../../../../../ioc.react';
import { UserService } from "../../../../../../services/panel/user/user_service";
import User from "../../../../../../models/User";
import { AlertService } from '../../../../../../services/alert_service';
import { AuthService } from '../../../../../../services/auth/auth_service';
import { toast } from 'react-toastify';
import { decodeToken } from 'react-jwt';
import ResetPassword from './components/resetPassword/reset_password';
import EditInfo from './components/editInfo/edit_info';
import BankCard from './components/bankCard/bank_card';
import ChangePic from './components/changePic/change_pic';
import { createTheme } from '@mui/material/styles';


const ContentProfile = () => {


    const user_service = useInjection(UserService);
    const alert_service = useInjection(AlertService);
    const auth_service = useInjection(AuthService);

    let passModel: any = {};



    const initialValues: User = {
        id: "",
        name: "",
        username: "",
        gender: "",
        age: "",
        phoneNumber: "",
        photoUrl: "",
        city: "",
        address: "",
        lastActive: "",
        photos: undefined,
        bankCards: undefined,
    }

    const resetPasswordHandler = (values: any) => {


        const user_id = decodeToken<string>(localStorage.getItem("token") || "");
        user_service.resetPassword(user_id, passModel).then(resp => {
            console.log(resp)
        })
            .catch(error => {
                console.log(error)
            })



    }
    // useEffect(() => {

    //     user_service.getUser("2ab3c7d1-a3ff-46df-b045-54c5735a1c00")
    //         .then(resp => {
    //             console.log(resp)
    //             alert_service.success(resp.name, "")
    //         })
    //         .catch(error => {
    //             console.log(error.message)
    //             alert_service.error(error, "")
    //         })

    // })

    const formSubmitHandler = (values: User) => {


        alert_service.success("mdmddkddkmdmddkddkmdmddkddk", "lkk")

        toast.success("mdmddkddkmdmddkddkmdmddkddkmdmddkddk", { theme: "colored" })

        user_service.testUser();


        // user_service.insertUser(values).then(resp => {
        //     console.log(resp);
        //     alert_service.success("اطلاعات با موفقیت ارسال شدند", "kkkk")
        // })
        //     .catch(error => {
        //         console.log(error.message)
        //         alert_service.error(error.message, "error");
        //     })

    }

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
                                        src={""}
                                        alt="User profile picture"
                                    />
                                </div>
                                <h3 className="profile-username text-center">{""}</h3>
                                <p className="text-muted text-center">{""}</p>
                                <ul className="list-group list-group-unbordered mb-3">
                                    <li className="list-group-item">
                                        <b>آخرین ورود</b> <a className="float-right">{""}</a>
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
                                    <ChangePic />
                                    <EditInfo />
                                    <ResetPassword />
                                    <BankCard />
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

const theme = createTheme({

    direction: "rtl"
})

export default ContentProfile;