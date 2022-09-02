import { entry } from "../accountant/entry";
import { factor } from "../accountant/factor";
import { ticket } from "../ticket";
import { days } from "./days";

export interface userDashboard {


    ClosedTicketCount: number,
    unClosedTicketCount: number,

    lastFiveTickets: ticket[],


    totalInventory: number,

    totalEnterMoney: number,

    totalExitMoney: number,


    inventory5Days: days,
    enterMoney5Days: days,
    exitMoney5Days: days,


    totalSuccessFactor: number,


    //     DaysReturnDto factors10Days:  ,


    lastTenFactors: factor[],

    totalSuccessEntry: number,
    factors8Days: days,


    lastTenEntries: entry[],


    totalFactorIncome: number

    totalEasyPayIncome: number

    totalSupportIncome: number

    totalIncInventoryIncome: number


}