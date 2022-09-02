import { ticketContent } from "./ticketContent";

export interface ticket{

    id:string,
    dateCreatedAt:Date,
    dateModifiedAt:Date
    title:string,
    closed:string,
    department:string,
    level:string,
    isAdminSide:boolean,
    ticketContents:ticketContent[]
}