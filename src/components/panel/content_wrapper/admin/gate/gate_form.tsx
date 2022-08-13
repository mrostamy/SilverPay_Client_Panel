import { Box, Button, MenuItem, Select, TextareaAutosize, TextField } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from "react";
import { Form, Formik } from "formik";
import * as yup from 'yup'

const GateForm = () => {

    const [exit, setExit] = useState(false)

    const validation = yup.object().shape({

        websiteName: yup.string().required().max(100),
        websiteUrl: yup.string().required().max(500),
        phoneNumber: yup.number().required().max(10),
        text: yup.string().required().max(1000),
        file: yup.mixed().required('File is required'),
    })

    const handleSubmit=(values:any)=>{
        let gate=new FormData();

        gate.append("wallet_id",values.wallet_id);
        gate.append("isIp",values.isIp);
        gate.append("website_name",values.websiteName);
        gate.append("website_url",values.websiteUrl);
        gate.append("phoneNumber",values.phoneNumber);
        gate.append("text",values.text);
        gate.append("grouping",values.grouping);
        //send data using gate service
    }

    let selectefFile:File;
    const imageUrl:string="";

    return (
        <>
            <Formik onSubmit={handleSubmit} initialValues={{}} validationSchema={validation}>

                <Form>
                    <TextField name="websiteName" />
                    <TextField name="websiteUrl" />
                    <TextField name="phoneNumber" />
                    <TextareaAutosize name="text" />
                    <Select id="k" value="خدمات گردشگری"  name="group">
        <MenuItem value={"خدمات توریسم و حمل و نقل"}>خدمات توریسم و حمل و نقل</MenuItem>
        <MenuItem value="خدمات گردشگری">خدمات گردشگری</MenuItem>
        <MenuItem value="هتل ها و بلیط">هتل ها و بلیط</MenuItem>
        <MenuItem value="آژانس های مسافرتی">آژانس های مسافرتی</MenuItem>
        <MenuItem value="خدمات مهاجرتی"> خدمات مهاجرتی </MenuItem >
        <MenuItem value="خودرو موتور و قطعات یدکی"> خودرو، موتور و قطعات یدکی</MenuItem >
        <MenuItem value="خدمات اینترنت" >خدمات اینترنت</MenuItem>
        <MenuItem value="خدمات ایمیل">خدمات ایمیل</MenuItem>
        <MenuItem value="خدمات شبکه و امنیت">خدمات شبکه و امنیت</MenuItem>
        <MenuItem value="خدمات بهینه سازی و SEO">خدمات بهینه سازی و SEO</MenuItem>
        <MenuItem value="ميزبانی و اشتراک گذاری فایل">ميزبانی و اشتراک گذاری فایل</MenuItem>
        <MenuItem value="خدمات میزبانی وب و دامنه">خدمات میزبانی وب و دامنه</MenuItem>
        <MenuItem value="کالاهای دیجیتال" >کالاهای دیجیتال</MenuItem>
        <MenuItem value="پيامک انبوه تبليغاتی">پيامک انبوه تبليغاتی</MenuItem>
        <MenuItem value="سخت افزار رايانه">سخت افزار رايانه</MenuItem>
        <MenuItem value="صوت و تصویر">صوت و تصویر</MenuItem>
        <MenuItem value="تلفن همراه و تبلت">تلفن همراه و تبلت</MenuItem>
        <MenuItem value="شارژ تلفن همراه">شارژ تلفن همراه</MenuItem>
        <MenuItem value="نرم افزار رايانه">نرم افزار رايانه</MenuItem>
        <MenuItem value="طراحی و تبلیغات" >طراحی و تبلیغات</MenuItem>
        <MenuItem value="بازاریابی">بازاریابی</MenuItem>
        <MenuItem value="نیازمندی های آنلاين">نیازمندی های آنلاين</MenuItem>
    </Select >
    <RadioGroup>
        <Radio value="true"/>
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

export default GateForm;