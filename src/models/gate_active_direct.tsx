import { gate } from "./gate"
import wallet from "./wallet"

export interface gate_active_direct{
    gate:gate
    wallets:wallet[],
    isDirect:boolean
}