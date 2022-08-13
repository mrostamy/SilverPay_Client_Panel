import { Card, CardContent, CardHeader } from "@mui/material";

const Wallet = () => {
    return (
        <>
        <Card>
            <CardHeader>
                <li><p>اصلی سیلور پی</p><p>sp:{"code"}</p></li>
            </CardHeader>
            <CardContent>
                <p>موجودی</p>
                <p>0 تومان</p>
                <p>ورودی</p><p>0 تومان</p>
                <p>خروجی</p><p>0 تومان</p>
                <p>در حال خروج</p><p>0 تومان</p>
            </CardContent>
           
        </Card>
        </>
    )
}

export default Wallet;