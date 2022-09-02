import Edit from "@mui/icons-material/Edit";
import { Alert, AlertTitle, Button, Card, CardContent, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import BankCard from "../../../../../data/models/bankCards";
import { useInjection } from "../../../../../ioc.react";
import { BankCardService } from "../../../../../services/panel/user/bankCard_service";
import { useJwt } from "react-jwt";
import { AlertService } from "../../../../../services/alert_service";
import BankCards from "./bankCard";
import EditBankCard from "./edit_bankCard";
import Info from "@mui/icons-material/Info";
import AddCircle from "@mui/icons-material/AddCircle";

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

        //     bankCard_service.getBankCards(id)
        //         .then(response => {

        //             bankCards = response;

        //         }).catch(error => {

        //             console.log(error);
        //             alert_service.error("error in fetch bank cards", "error")

        //         })
    }
    return (
        <>
            <Alert variant="filled" icon={<Info />} severity="info">
                <AlertTitle>توجه</AlertTitle>

                <div>
                    <h4>تمام کارت ها</h4>
                </div>
                <p>
                    تمام کارت های شما در این قسمت نمایش داده میشوند.
                </p>
            </Alert>
            <Button variant="contained" color="success"
                startIcon={<AddCircle sx={{ marginLeft: "10px" }} />} onClick={() => { }}>افزودن کارت بانکی</Button>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        < Card style={{ backgroundColor: "red", borderRadius: "5px" }} >
                            <CardContent>
                                <Stack spacing={0}>
                                    <div style={{ float: "left", textAlign: "left" }}>
                                        <i className="" />
                                        <p>تایید نشده</p>
                                    </div>
                                    <div>
                                        <Stack spacing={1}>
                                            <div style={{ marginTop: "0px" }} >
                                                <i className="bank64 bsi " style={{ borderRadius: "30px", float: "right" }} />
                                                <p className="card_number" style={{ float: "left", position: "relative", marginTop: "15px" }}>6219-****-**21-3007</p>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: "18px" }}>بانک صادرات</p>
                                            </div>
                                        </Stack>
                                    </div>
                                    <div >
                                        <div style={{ float: "right" }} >
                                            <p style={{ float: "right" }}>شماره حساب</p>
                                            <p style={{ marginRight: "95px" }}>54646445454</p>
                                        </div>

                                        <div style={{ float: "left" }}>
                                            <p style={{ float: "right" }}>انقضاء</p>
                                            <p style={{ marginRight: "50px" }}>1403/05</p>
                                        </div>
                                    </div>

                                    <div style={{ float: "left" }} >
                                        <Button
                                            onClick={() => setEditDialog(true)}
                                            dir="rtl" startIcon={<Edit sx={{marginLeft:"10px"}} />} variant="contained" style={{ float: "left" }}>
                                            ویرایش کارت بانکی
                                        </Button>
                                    </div>
                                </Stack>
                            </CardContent>

                        </Card>
                    </div>
                </div>


            </div>
            <BankCards />
            <EditBankCard show={editDialog} onChange={() => setEditDialog(prev => !prev)} />

        </>

    )
}

export default ManageBankCard;

