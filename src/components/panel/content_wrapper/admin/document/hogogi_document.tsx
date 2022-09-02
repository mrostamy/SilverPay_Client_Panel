import Dropzone from 'react-dropzone'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

// import styles from './document_styles';

import styles from "./document.module.css"

import * as Yup from 'yup'
import Document from '../../../../../data/models/document';
import { ErrorMessage, Form, Formik } from 'formik';
import { useInjection } from '../../../../../ioc.react';
import { DocumentService } from '../../../../../services/panel/user/document_service';
import { AlertService } from '../../../../../services/alert_service';
import { Button, Input, InputAdornment, TextField } from '@mui/material';
import AdapterJalaali from '@date-io/jalaali';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import avatar from '../../../../../../src/assets/images/avatar.png'
import { DesktopDatePicker } from '@mui/x-date-pickers';

const initialValues: Document = {

    approve: 0,
    message: '',
    isTrue: false,
    name: '',
    family: '',
    fatherName_registerCode: '',
    Address: '',
    nationalCode: '',
    DateOfBirth: '',
    photoUrl: '',
    dateCreated: ''

}

const hogogiValidation = Yup.object().shape({

    approve: Yup.number().min(0, "only must be 0 , 1 , 2").max(3, "only must be 0 , 1 , 2"),
    message: Yup.string().required("message is required").length(100, "maximum character is 100"),
    isTrue: Yup.boolean(),
    name: Yup.string().required("name is required").length(30, "maximum character is 30"),
    family: Yup.string().required("family is required").length(30, "maximum character is 30"),
    fatherName_registerCode: Yup.string().required("fatherName_registerCode is required").length(30, "maximum character is 30"),
    address: Yup.string().required("Address is required").length(500, "maximum character is 500"),
    nationalCode: Yup.string().required("nationalCode is required").min(10).max(10),
    dateOfBirth: Yup.string().required("dateOfBirth is required"),
    photoUrl: Yup.string().required("photoUrl is required").length(100, "maximum character is 100"),
    dateCreated: Yup.string().required("dateCreated is required")
})


const Hogigi = () => {

    const document_service = useInjection(DocumentService)
    const alert_service = useInjection(AlertService)



    const selectedFile = () => {



    }



    const onSubmit = (values: any, actions: any) => {


        console.log(values)

    }


    return (
        <>
            <div
                // style={styles.panel} 
                className={` ${styles}  container`}>
                <div className="row">
                    <div className='col-md-6'>
                        <h6>مشخصات شخص حقوقی</h6><br />
                        <Formik onSubmit={onSubmit} initialValues={initialValues} >

                            <Form>
                                <ErrorMessage name='name' />
                                <Input
                                    id="input-with-icon-adornment"
                                    type="file"
                                    name="photoUrl"
                                    startAdornment={
                                        <InputAdornment position="end">
                                            <img src={avatar} style={{ borderRadius: "15px" }} alt='test' width={24} height={24} />
                                        </InputAdornment>

                                    }
                                />
                                <LocalizationProvider dateAdapter={AdapterJalaali}>
                                    <DesktopDatePicker
                                        label="Date desktop"
                                        inputFormat="MM/dd/yyyy"
                                        value={""}
                                        onChange={()=>{}}
                                        renderInput={(params) => <TextField name="dateTime" {...params} />}
                                    />
                                </LocalizationProvider>
                                <Button type="submit">send</Button>
                            </Form>

                        </Formik>

                    </div>

                </div>


            </div>

        </>
    )
}

export default Hogigi;