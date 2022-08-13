
export default interface wallet {
    id: string,
    isMain:boolean,
    isSms:boolean,
    isBlock:boolean,
    name: string,
    code: string,
    enterMoney: number,
    exitMoney: number,
    inventory: number,
    onExitMoney: number,
}