import AddCircle from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useInjection } from "../../../../../ioc.react";
import { gates_wallets } from "../../../../../models/gates_wallets";
import { AlertService } from "../../../../../services/alert_service";
import { GateService } from "../../../../../services/panel/gate_service";
import Gate from "./gate";

import styles from "./gate.module.css"

const GateManageMent = () => {

    const gate_service=useInjection(GateService)
    const alert_service=useInjection(AlertService)



    let gate_wallets:gates_wallets;


    useEffect(() => {
        loadGates();
    }, [])


    const loadGates = () => {

        gate_service.getGates("3").then(response=>{

            gate_wallets=response;
            console.log(response);
            alert_service.success(response,"ok");

        }).catch(error=>{
            console.log(error);
            alert_service.error(error,"error");

        })

    }







    return (
        <>
            <Button className={styles.button} startIcon={<AddCircle className="addIcon" />} >افزودن درگاه پرداخت</Button>

            {gate_wallets!!.gates.map((g)=>{
            <Gate  />
            })}
        </>
    )
}

export default GateManageMent;