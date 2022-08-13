import { TextField } from "@mui/material";
import { Form, Formik, FormikProps, FormikValues } from "formik";
import { useRef } from "react";
import { useInjection } from "../../../../../ioc.react";
import wallet from "../../../../../models/wallet";
import { AlertService } from "../../../../../services/alert_service";
import { GateService } from "../../../../../services/panel/gate_service";
import * as yup from 'yup'
import { gate_active_direct } from "../../../../../models/gate_active_direct";

const GateActive = () => {


    const gate_service = useInjection(GateService)
    const alert_service = useInjection(AlertService)

    let formik = useRef<FormikProps<any>>(null);

    const validation = yup.object().shape({

        websiteName: yup.string().required().max(100),
        websiteUrl: yup.string().required().max(500),
        phoneNumber: yup.number().required().max(10),
        text: yup.string().required().max(1000),
        file: yup.mixed().required('File is required'),
    })

    let gateActiveDirect: gate_active_direct

    const activeHanler = (values: any) => {

        gate_service.activeGate("userId", "gateId", values)
            .then(response => {
                //if success
                alert_service.success("", "ok");
                // if (formik != null)
                    // formik!!.current.resetForm();

            }).catch(error => {
                alert_service.error("", "error")
            })

    }

    let wallets: wallet[];

    return (
        <>
            <Formik onSubmit={activeHanler} initialValues={{}} innerRef={formik}>
                <Form>
                    <TextField name="walletId" />
                    <TextField name="walletName" />
                </Form>
            </Formik>
        </>
    )
}

export default GateActive;