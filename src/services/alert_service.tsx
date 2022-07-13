
import { injectable } from 'inversify'
import { toast } from 'react-toastify'

const styles = {

    success: {
        background: "greem"
    }

}

const Msg = (toastProps: any) => {
    return (

        <>
            <strong>{toastProps.title}</strong><br />
            <div style={{ direction: "rtl", display: "flex", justifyContent: "space-between" }} >
                <p style={{ display: "inline-block" }}>{toastProps.content}</p>
                <i className="fa fa-check"/>
            </div>
        </>

    )

}

@injectable()
export class AlertService {

    success(msg: any, title: any) {
        toast(<Msg title="موفقیت" content={msg} type="success" />
            , {
                style: { color: "white", backgroundColor: "#07BC0C" }
                , progressStyle: { background: "#B5EBB7" }
            });
    }

    error(msg: any, title: any) {
        toast(<Msg title="خطا" text={msg} type="success" />)
    }

}