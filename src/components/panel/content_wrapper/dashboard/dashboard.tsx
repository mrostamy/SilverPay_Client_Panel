import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { IsLogin, logout } from "../../../../services/auth_service";

const Dashboard = () => {

    const nav = useNavigate();

    const myDecodedToken=decodeToken<any>(localStorage.getItem("token") || "") 

    const logoutHandler = () => {

        if (logout()) {
            nav("/auth/login")
            toast.success("logout successfully", { theme: "colored" })
        }

    }
    return (
        <>
            <h1>Dashbord</h1>
            {IsLogin() ? <p>user is logged in</p> : null}
            {myDecodedToken ? <p>{myDecodedToken.sub}</p>:null}
            <button onClick={logoutHandler}>logout</button>
        </>
    )
}

export default Dashboard

