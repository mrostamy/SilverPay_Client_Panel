import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { AuthService } from "../../../../../services/auth_service";

const Dashboard = () => {

    const nav = useNavigate();

    const authService=new AuthService();

    const myDecodedToken=decodeToken<any>(localStorage.getItem("token") || "") 

    const logoutHandler = () => {

        if (authService.logout()) {
            nav("/auth/login")
            toast.success("logout successfully", { theme: "colored" })
        }

    }
    return (
        <>
            <h1>Dashbord</h1>
            {authService.IsLogin() ? <p>user is logged in</p> : null}
            {myDecodedToken ? <p>{myDecodedToken.sub}</p>:null}
            <button onClick={logoutHandler}>logout</button>
        </>
    )
}

export default Dashboard

