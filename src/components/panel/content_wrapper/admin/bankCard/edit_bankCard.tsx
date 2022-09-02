import { Button, Dialog, MenuItem, TextField, Select, InputAdornment, Grid, DialogContent, DialogActions, DialogTitle } from "@mui/material"
import { Form, Formik } from "formik"
import { useEffect, useRef, useState } from "react"
import * as Yup from 'yup'
import { useInjection } from "../../../../../ioc.react"
import BankCard from "../../../../../data/models/bankCards"
import { AlertService } from "../../../../../services/alert_service"
import { BankCardService } from "../../../../../services/panel/user/bankCard_service"

const EditBankCard = (prop: any) => {

    const bankCard_service = useInjection(BankCardService);
    const alert_service = useInjection(AlertService);

    const mDialog: any = useRef(null);

    let [initValues, setInitValues] = useState<BankCard>({

        id: '',
        approve: false,
        bankName: '',
        ownerName: '',
        accountNumber: '',
        shaba: '',
        cardNumber: '',
        expireMonth: '',
        expireYear: ''
    })

    useEffect(() => {


    }, [])

    const closeDialog = () => {

        if (mDialog != null) {
            console.log(mDialog.current)
            mDialog.current!.hidden = true;
        }
    }

    const handleEditBankCard = () => {

        bankCard_service.updateBankCard("3", initValues)
            .then(response => {
                setInitValues(response);
                alert_service.success("card bank update successfully", "success")
            })
            .catch(error => {
                alert_service.error("error in update card bank: " + error, "error")
            });

    }

    const validateBankCard = Yup.object().shape({

        bankName: Yup.string().required("bank name is required")
            .min(0, "bank name can not be empty")
            .max(20, "bank name can not be longer than 20 character"),
        ownerName: Yup.string().required("owner name is required")
            .min(0, "owner name can not be empty")
            .max(20, "owner name can not be longer than 20 character"),

        accountNumber: Yup.string()
            .min(0, "account number can not be empty")
            .max(20, "account number can not be longer than 20 character"),

        cardNumber: Yup.string().required("bank card is required")
            .min(16, "bank name can not be empty")
            .max(16, "bank name can not be longer than 20 character"),

        expireMonth: Yup.string().required()
            .length(4, "expire month must be 4 character"),


        expireYear: Yup.string().required()
            .length(2, "expire year must be 2 character"),

    })

    return (
        <>
            <Dialog open={prop.show} ref={mDialog}>
                <DialogTitle>
                    <p>
                        ویرایش کارتهای بانکی
                    </p>
                </DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Formik initialValues={initValues} validationSchema={validateBankCard} onSubmit={handleEditBankCard} >
                            {({ dirty, isValid }) => (

                                <Form>
                                    <Grid xs={12} sm={8}>
                                        <Select
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

                                        </Select>
                                    </Grid>


                                    <Grid item xs={12} sm={12} >
                                        <TextField inputProps={{ inputmode: 'numeric', pattern: '[0-9]*' }} variant="standard" label="شماره حساب " /><br />
                                    </Grid>
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
                                    <DialogActions>
                                        <Button id="btnId" type="submit" disabled={!dirty} name="submit">ویرایش کارت بانکی</Button>
                                        <Button onClick={() => prop.onChange()} >انصراف</Button>
                                    </DialogActions>

                                </Form>

                            )}

                        </Formik>
                    </Grid>

                </DialogContent>

            </Dialog>
        </>
    )
}

export default EditBankCard;