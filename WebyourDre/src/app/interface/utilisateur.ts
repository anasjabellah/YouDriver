import { Role } from "./Role";

export interface utilisateur{
    id: number ;
    firstName: string ;
    lastName: string ;
    userName: string ;
    email: string ;
    password: string ;
    tel: string ;
    address: string ;
    role: Role ;
}