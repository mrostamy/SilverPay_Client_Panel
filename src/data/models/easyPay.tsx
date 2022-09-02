export default interface easyPay {

    id:string
    walletId: string
    gateId: string
    name: string
    price: string
    text: string
    isCoupon: boolean
    isUserEmail: boolean
    isUserName: boolean
    isUserPhone: boolean
    isUserEmailRequired: boolean
    isUserNameRequired: boolean
    isUserPhoneRequired: boolean
    isUserTextRequired: boolean
    userNameExplain:string
    userEmailExplain: string
    userPhoneExplain:  string
    userTextExplain: string
    isCountLimit: boolean
    countLimit: string
    returnSuccess: string
    returnFail: string
    isWallet:boolean
    
}
