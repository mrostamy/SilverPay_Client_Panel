import { Button } from "@mui/material";
import { useState } from "react";
import Hagigi from "./hagigi_document";
import Hogigi from "./hogogi_document";

import "../../../../../assets/css/document.css";
import DocumentList from "./document_list";



const Alert = ({ state }: any) => {

    return (
        <>
            {state == 1 && <p>documnets is in confirmed state</p>}
            {state == 2 && <p>documnets is in pending state</p>}
            
        </>
    )

}


const Document = () => {

    const [state, setState] = useState(false)

    let flag: boolean = false;

    return (
        <>
            <div className="container">
                <div className="row">

                    {flag ?
                        <div >
                            <Button onClick={() => setState(true)} >حساب حقیقی</Button>
                            <Button onClick={() => setState(false)}>حساب حقوقی</Button>

                            {state && <Hagigi />}
                            {!state && <Hogigi />}
                        </div>
                        : <Alert state={2} />
                    }


                    <div className="col-md-12" style={{ marginTop: "10px" }}>
                        <DocumentList />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Document;