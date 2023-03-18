import { ISODateString } from "next-auth";
import { Url } from "url"

export interface User {
        email: string,
        name: string,
        image: string,
    id: string,
    role:string
   
}

export interface Session {
    user?: User;
    expires:ISODateString
}