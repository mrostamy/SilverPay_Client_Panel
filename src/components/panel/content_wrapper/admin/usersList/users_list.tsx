import { useInjection } from "../../../../../ioc.react";
import { AuthService } from "../../../../../services/auth/auth_service";

export const User_list = (props: any) => {

    const auth_service = useInjection(AuthService)


    return (
        <>
            {auth_service.roleMatch(props.role) ? <div>users list admin</div>:<div>No Access</div>}
        </>
    );

}