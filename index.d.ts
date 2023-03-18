import "next-auth";

nextAuth
declare global {

    interface User {
       
       
        email: string,
        name: string,
        image: string,
        id: string,
        role:string
    }

    module "next-auth" {
        interface Session {
            user?: User;
            expires:ISODateString
        }
    }


    
}