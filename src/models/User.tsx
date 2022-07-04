import BankCard from "./bankCards";
import Photo from "./Photo";

export default interface User{

    id:string,
    name:string,
    username:string,
    phoneNumber:string,
    address:string,
    gender:string,
    age:string,
    lastActive:string,
    city:string,
    photoUrl:string,
    photos?:Photo[],
    bankCards?:BankCard[],


}