import easyPay from "./easyPay"
import { gate } from "./gate"
import wallet from "./wallet"

export interface easyPayGatesWallets{

    easyPays:easyPay
    gates:gate[]
    wallets:wallet[]

}