import { Alert, AlertTitle, Button, createStyles, Dialog, InputAdornment, makeStyles, MenuItem, Modal, Select, TextField } from "@mui/material";
import Info from "@mui/icons-material/Info"
import { Form, Formik } from "formik";
import { useState } from "react";
import { useInjection } from "../../../../../ioc.react";
import { NotificationService } from "../../../../../services/panel/user/notification_sevice";
import { useJwt } from "react-jwt";
import AddCircle from '@mui/icons-material/AddCircle';

import 'iransbankicon'

import './bank_card.css'
import { useStyles } from "./styleHook";

const BankCards = () => {

  
   // const classes=useStyles();


    const notification_service = useInjection(NotificationService);

    const decodedToken = useJwt(localStorage.getItem("token") || "");

    // let bankCard: BankCard;
    const [open, setOpen] = useState(false);


    function goto() {
        $('html , body').animate({
            scrollTop: $("#btnId").offset()!.top - 20

        }, 500);

    }

    const handleClose = (event: any, reason: any) => {

        if (reason === "backdropClick") {
            return;
        }

        setOpen(false);

    }
    let age = "10"
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
            <Button  variant="contained" color="success"
             endIcon={<AddCircle sx={{marginRight:"10px"}} />} onClick={() => { setOpen(true) }}>افزودن کارت بانکی</Button>
            <Dialog open={open} onClose={handleClose} >
                <Formik initialValues={{}} onSubmit={() => { }}>
                    {({ dirty }) =>
                        <>
                            <Form>
                                <Select
                                    value={age}
                                    onChange={() => { }}
                                    label="نام بانک"
                                >
                                    <MenuItem value={"bsi"}>بانک صادرات</MenuItem>
                                    <MenuItem value={"sepah"}>بانک سپه</MenuItem>
                                    <MenuItem value={"bmi"}>بانک ملی ایران</MenuItem>
                                    <MenuItem value={"mellat"}>بانک ملت</MenuItem>
                                    <MenuItem value={"tejarat"}>بانک تجارت</MenuItem>
                                    <MenuItem value={"bki"}>بانک کشاورزی</MenuItem>
                                    <MenuItem value={"persian"}>بانک پارسیان</MenuItem>
                                    <MenuItem value={"maskan"}>بانک مسکن</MenuItem>
                                    <MenuItem value={"en"}>بانک اقتصاد نوین</MenuItem>
                                    <MenuItem value={"bsi"}>بانک سامان</MenuItem>
                                    <MenuItem value={"bpi"}>بانک پاسارگاد</MenuItem>
                                    <MenuItem value={"ansar"}>بانک انصار</MenuItem>
                                    <MenuItem value={"ba"}>بانک آینده</MenuItem>
                                    <MenuItem value={"shahr"}>بانک شهر</MenuItem>
                                    <MenuItem value={"tt"}>بانک توسعه تعاون</MenuItem>
                                    <MenuItem value={"ghbi"}>بانک قوامین</MenuItem>
                                    <MenuItem value={"rb"}>بانک رفاه کارگران</MenuItem>
                                    <MenuItem value={"day"}>بانک دی</MenuItem>

                                </Select><br />
                                <TextField variant="standard" label="شماره حساب " /><br />
                                <TextField variant="standard" label="نام صاحب حساب" /><br />
                                <TextField variant="standard" label="شماره شبا" style={{ direction: "ltr" }}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">IR</InputAdornment>,
                                    }}
                                /><br />
                                <TextField variant="standard" label="شماره کارت" />
                                <p>
                                    <TextField ml-15 variant="standard" label="تاریخ انقضاء/ ماه" />
                                    <TextField variant="standard" label="تاریخ انقضاء / سال " />

                                </p>
                                <Button id="btnId" type="submit" disabled={!dirty} name="submit">ذخیره کارت بانکی</Button>
                                <Button onClick={() => setOpen(false)} >انصراف</Button>
                            </Form>
                        </>
                    }
                </Formik>
            </Dialog>

        </>
    )
}

export default BankCards;
