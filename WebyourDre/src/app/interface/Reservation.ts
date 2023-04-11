
import { Offer } from "./Offer";
import { utilisateur } from "./utilisateur";

export interface Reservation{
    id: number ;
    date: string ;
    offre: Offer ;
    utilisateur: utilisateur ; 
}