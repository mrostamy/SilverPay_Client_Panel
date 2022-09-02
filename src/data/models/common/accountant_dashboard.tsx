import { entry } from "../accountant/entry"
import { factor } from "../accountant/factor"
import { days } from "./days"

export interface accountantDashboard {

    totalEntries: number
    totalEntryApproved: number
    totalEntryUnApproved: number
    totalEntryPayed: number
    totalEntryUnPayed: number
    totalEntryReject: number
    totalEntryUnReject: number

    entry5Days: days

    factor5Days: days

    totalFactor: number

    totalEasyPay: number

    totalSupport: number

    totalIncInventory: number

    totalSuccessFactor: number

    last12MonthFactors: days
    last12MonthEntries: days
    //     DaysReturnDto last12MonthUsers:

    last12MonthBankcards: days
    last12MonthGates: days
    last12MonthWallets: days

    last7Entries: entry[]
    last7Factors: factor[]

}