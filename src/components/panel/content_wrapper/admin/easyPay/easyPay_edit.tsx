
import React, { useEffect } from 'react'
import easyPay from '../../../../../models/easyPay'
import * as yup from 'yup'
import { useInjection } from '../../../../../ioc.react'
import { EasyPayService } from '../../../../../services/panel/user/easy_pay_service'
import { GateService } from '../../../../../services/panel/gate_service'
import { AlertService } from '../../../../../services/alert_service'
import { Box, Button, Radio, RadioGroup, TextareaAutosize, TextField } from '@mui/material'
import { Form, Formik } from 'formik'
import { useParams } from 'react-router-dom'



export default function EasyPayEdit() {


    const easyPay_service = useInjection(EasyPayService)
    const gate_service = useInjection(GateService)
    const alert_service = useInjection(AlertService)

    let easyPay: easyPay

    const { easyPayId } = useParams();

    useEffect(() => {
    }, [])


    const validation = yup.object().shape({

        name: yup.string().required("name is required").min(4, "too short").max(50, "too long"),
        price: yup.string().required("price is required").max(15, "too long"),
        text: yup.string().required("text is required").max(250, "too long"),
        isWallet: yup.boolean().required("isWallet is required"),
        userNameExplain: yup.string().required("userNameExplain is required").max(25, "too long"),
        userEmailRequired: yup.string().required("userEmailRequired is required").max(25, "too long"),
        userPhoneRequired: yup.string().required("userPhoneRequired is required").max(25, "too long"),
        userTextExplain: yup.string().required("userTextExplain is required").max(25, "too long"),

    })


    let initialValues: any = {
        "id": "",
        "walletId": "",
        "gateId": "",
        "isWallet": false,
        "name": "",
        "price": "",
        "isCoupon": false,
        "isUserEmail": false,
        "isUserName": false,
        "isUserPhone": false,
        "isUserEmailRequired": false,
        "isUserNameRequired": false,
        "isUserPhoneRequired": false,
        "isUserTextRequired": false,
        "userNameExplain": "نام کاربری",
        "userEmailExplain": "ایمیل",
        "userPhoneExplain": "شماره تماس",
        "userTextExplain": "توضیحات",
        "isCountLimit": false,
        "countLimit": "0",
        "returnSuccess": "",
        "returnFail": "",

    }

    const handleSubmit = (values: any) => {

        // if have addActive add else update

        easyPay_service.addeasyPay(values, "5")
            .then(response => {

            }).catch(error => {

            })

        easyPay_service.updateeasyPay("5", values)


    }

    return (
        <>
            <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validation}>

                <Form>
                    <TextField name="walletId" />
                    <TextField name="gateId" />
                    <Radio name="isWallet" />
                    <TextField name="name" />
                    <TextField name="price" />
                    <TextField name="text" />
                    <TextField name="isCoupon" />
                    <TextField name="isUserEmail" />
                    <TextField name="isUserName" />
                    <TextField name="isUserPhone" />
                    <TextField name="isUserEmailRequired" />
                    <TextField name="isUserNameRequired" />
                    <TextField name="isUserPhoneRequired" />
                    <TextField name="isUserTextRequired" />
                    <TextField name="isUserNameExplain" />
                    <TextField name="isUserEmailExplain" />
                    <TextField name="isUserPhoneExplain" />
                    <TextField name="isUserTextExplain" />
                    <TextField name="isCountLimit" />
                    <TextField name="countLimit" />
                    <TextField name="returnSuccess" />
                    <TextField name="returnFail" />
                    <TextareaAutosize name="text" />
                    <RadioGroup>
                        <Radio value="true" />
                        <Radio value="false" checked />
                    </RadioGroup>
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload File
                        <input
                            type="file"
                            name="file"
                            hidden
                        />
                    </Button>
                    <Box
                        component="img"
                        sx={{
                            height: 233,
                            width: 350,
                            maxHeight: { xs: 233, md: 167 },
                            maxWidth: { xs: 350, md: 250 },
                        }}
                        alt="The house from the offer."
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                    />
                    <TextField name="isIp" />
                    <TextField name="group" />
                </Form >

            </Formik >
        </>
    )
}