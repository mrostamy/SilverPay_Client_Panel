import { gate } from "../gate";
import wallet from "../wallet";
import { factor } from "./factor";

export interface factorDetail{

    factor:factor,
    gate:gate,
    wallet:wallet
}