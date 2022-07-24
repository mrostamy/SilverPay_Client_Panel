import { Alert, AlertTitle, Button, Card, CardContent, CardHeader, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Info from "@mui/icons-material/Info"
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useInjection } from "../../../../../ioc.react";
import { NotificationService } from "../../../../../services/notification_sevice";
import { useJwt } from "react-jwt";


import 'iransbankicon'

import './bank_card.css'

const BankCard = () => {

    const notification_service = useInjection(NotificationService);

    const decodedToken = useJwt(localStorage.getItem("token") || "");

    // let bankCard: BankCard;


    useEffect(() => {

        // loadNotifications("3");

    }, [])

    const loadNotifications = (id: string) => {


        // notification_service.getNotification(id).then(response => {
        //     notify = response;
        //     console.log(response)
        // })
        //     .catch(error => { console.log(error) })

    }

    const updateNotify = () => {
        // const initValues: Notification = {};
        // notification_service.updateNotifications(decodedToken.userId, initValues).
        //     then(response => { console.log(response) })
        //     .catch(error => { console.log(error) })
    }

    function goto() {
        $('html , body').animate({
            scrollTop: $("#btnId").offset()!.top - 20

        }, 500);

    }

    return (

        <>
            <Formik initialValues={{}} onSubmit={updateNotify}>
                {({ dirty }) =>
                    <>
                        <Alert variant="filled" icon={<Info />} severity="info">
                            <AlertTitle>توجه</AlertTitle>
                            <i className="bank64 bsi "  style={{borderRadius:"30px"}} />
                            <p style={{fontSize:"14px"}}>بانک صادرات</p>
                            <p className="card_number">6219-8216-4321-3007</p>
                        </Alert>
                        <Form>
                            < Card >
                                <CardHeader>
                                    <div>
                                        <h4>تمام کارت ها</h4>
                                    </div>
                                    <p>
                                        تمام کارت های شما در این قسمت نمایش داده میشوند.
                                    </p>
                                </CardHeader>
                                <CardContent>

                                </CardContent>
                            </Card>

                            <Button id="btnId" type="submit" disabled={!dirty} name="submit">update</Button>
                        </Form>
                    </>
                }
            </Formik>
        </>
    )
}

export default BankCard;
