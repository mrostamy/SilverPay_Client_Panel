import { Navigate, Outlet, useLocation } from "react-router-dom";

export const Protect = ({ isAllowed,redirectPath = "loading", children }: any) => {

    const location = useLocation();

    if (!isAllowed) {
        return <Navigate to={redirectPath} state={{ from: location }} replace />;
    }

    return children ? children : <Outlet />;

}