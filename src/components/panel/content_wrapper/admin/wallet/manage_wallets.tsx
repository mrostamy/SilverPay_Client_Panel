import AddCircle from "@mui/icons-material/AddCircle";
import { Button, Card, CardContent, Dialog, Modal } from "@mui/material";
import wallet from "../../../../../data/models/wallet";
import Wallet from "./wallet";
import WalletForm from "./wallet_form";

// import {button,dialog,button_icon} from "./wallet_styles"

import styles from './wallet_styles.module.css'


const Manage_Wallet = () => {

    let wallets: wallet[];



    return (
        <>
            <div className="container">
                <div className="row">
                        <Dialog open={false}>
                            <WalletForm/>
                        </Dialog>
                    <div className="col-sm-12">
                        <Card>
                            <CardContent>
                                <div className="row">
                                    <p>کیف پول ها </p>
                                    <p>تمام کیف پول های شما در این قسمت نمایش داده میشوند </p>
                                    <div className="row">
                                        <Button className={styles.button} 
                                            startIcon={<AddCircle className={styles.SvgIcon}  />}
                                        >افزودن کیف پول</Button>
                                    </div>
                                </div>
                                <div className="row">
                                    <Wallet />
                                </div>

                            </CardContent>
                        </Card>








                    </div>
                </div>
            </div>
        </>
    )
}

export default Manage_Wallet;