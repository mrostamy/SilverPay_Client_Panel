import Edit from "@mui/icons-material/Edit";
import { Button, Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import BankCard from "../../../../../models/bankCards";
import { useInjection } from "../../../../../ioc.react";
import { BankCardService } from "../../../../../services/panel/user/bankCard_service";
import { useJwt } from "react-jwt";
import { AlertService } from "../../../../../services/alert_service";
import BankCards from "./bankCard";
import EditBankCard from "./edit_bankCard";
import axios from "axios";

const ManageBankCard = () => {

    const bankCard_service = useInjection(BankCardService);
    const alert_service = useInjection(AlertService);

    const decodedTokn = useJwt(localStorage.getItem("token") || "");

    let bankCards: BankCard[];

    const [editDialog, setEditDialog] = useState(false)


    useEffect(() => {

        load_bankCards("3");

    }, [])

    const handleDelete = (id: string) => {

        bankCard_service.deleteBankCard(id)
            .then(response => console.log(response)).catch(error => { console.log(error) })
    }

    const load_bankCards = (id: string) => {

        // const userId = decodeToken.userId || "";

        bankCard_service.getBankCards(id)
            .then(response => {

                bankCards = response;

            }).catch(error => {

                console.log(error);
                alert_service.error("error in fetch bank cards", "error")

            })
    }
    return (
        <>
            <BankCards />
            <EditBankCard show={editDialog} onChange={() => setEditDialog(prev => !prev)} />
            < Card sx={{}} style={{ backgroundColor: "red", borderRadius: "5px" }} >
                <CardContent>
                    <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                        <div>
                            <i className="bank64 bsi " style={{ borderRadius: "30px" }} />
                            <p style={{ fontSize: "14px" }}>بانک صادرات</p>
                        </div>

                        <div>
                            <i className="" />
                            <p>تایید نشده</p>
                        </div>
                        <p className="card_number" style={{ float: "left", position: "relative" }}>6219-****-**21-3007</p>
                    </div>
                    <div style={{ display: "inline-block" }}>
                        <p>شماره حساب</p>
                        <p>54646445454</p>
                    </div>
                    <div>
                        <p>انقضاء</p>
                        <p>1403/05</p>
                    </div>


                    <Button
                        onClick={() => setEditDialog(true)}
                        dir="rtl" startIcon={<Edit />} variant="contained">
                        ویرایش کارت بانکی
                    </Button>
                    <Button id="btnDelete" onClick={() => { handleDelete("2") /*delete*/ }}>حدف کارت بانکی</Button>


                </CardContent>

            </Card>
        </>

    )
}

export default ManageBankCard;

