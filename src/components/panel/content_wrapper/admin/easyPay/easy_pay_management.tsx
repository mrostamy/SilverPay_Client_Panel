import { Chip } from "@mui/material";
import { useEffect } from "react";
import { useInjection } from "../../../../../ioc.react";
import { AlertService } from "../../../../../services/alert_service";
import { GateService } from "../../../../../services/panel/gate_service";
import * as yup from "yup";

import EasyPayList from "./easy_pay_list";

import styles from "./easy_pay_management.module.css"

const EasyPayManagement = () => {

    const gate_service = useInjection(GateService)
    const alert_service = useInjection(AlertService)





    useEffect(() => {
    }, [])


    const validation = yup.object().shape({

        websiteName: yup.string().required().max(100),
        websiteUrl: yup.string().required().max(500),
        phoneNumber: yup.number().required().max(10),
        text: yup.string().required().max(1000),
        file: yup.mixed().required('File is required'),
    })



    return (
        <>

            <p>تمام لینک های آسان پرداخت شما در این صفحه نمایش داده میشود.</p>
            <Chip label="لینک شخصی شما:silverpay/@mohammad456 " />
            <EasyPayList />

            

        </>
    )
}

export default EasyPayManagement;