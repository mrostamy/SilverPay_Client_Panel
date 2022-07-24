import { Alert, AlertTitle, Button, Card, CardContent, CardHeader, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Info from "@mui/icons-material/Info"
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useInjection } from "../../../../../ioc.react";
import { NotificationService } from "../../../../../services/notification_sevice";
import { useJwt } from "react-jwt";

const notification_service = useInjection(NotificationService);

const decodedToken = useJwt(localStorage.getItem("token") || "");

const Notification = () => {

    let notify: Notification;

    useEffect(() => {

        loadNotifications("3");

    }, [])

    const loadNotifications = (id: string) => {


        notification_service.getNotification(id).then(response => {
            notify = response;
            console.log(response)
        })
            .catch(error => { console.log(error) })

    }

    const updateNotify = () => {
        //const initValues: Notification = {};
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
            <Alert variant="filled" icon={<Info />} severity="info">
                <AlertTitle>توجه</AlertTitle>
                <p>هزینه هر sms  50 تومان میباشد که از کیف پول شما کسر میشود.</p>
            </Alert>
            <Formik initialValues={{}} onSubmit={updateNotify}>
                {({dirty }) =>
                    <>
                        <Alert variant="filled" icon={<Info />} severity="info">
                            <AlertTitle>توجه</AlertTitle>
                            <p>شما تغییرات ذخیره نشده دارید. لطفا قبل از خروج تغییرات را ذخیره نمایید</p>
                        </Alert>
                        <Form>
                            < Card >
                                <CardHeader>تراکنش های ورودی</CardHeader>
                                <CardContent>
                                    <p>توضیحات</p>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="پبامک" />
                                        <FormControlLabel control={<Checkbox />} label="تلگرام" />
                                        <FormControlLabel control={<Checkbox />} label="ایمیل" />
                                    </FormGroup>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>تراکنش های خروجی</CardHeader>
                                <CardContent>
                                    <p>توضیحات</p>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="پبامک" />
                                        <FormControlLabel control={<Checkbox />} label="تلگرام" />
                                        <FormControlLabel control={<Checkbox />} label="ایمیل" />
                                    </FormGroup>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>تیکت ها</CardHeader>
                                <CardContent>
                                    <p>توضیحات</p>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="پبامک" />
                                        <FormControlLabel control={<Checkbox />} label="تلگرام" />
                                        <FormControlLabel control={<Checkbox />} label="ایمیل" />
                                    </FormGroup>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>ورود به silverPay</CardHeader>
                                <CardContent>
                                    <p>توضیحات</p>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="پبامک" />
                                        <FormControlLabel control={<Checkbox />} label="تلگرام" />
                                        <FormControlLabel control={<Checkbox />} label="ایمیل" />
                                    </FormGroup>
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

export default Notification;