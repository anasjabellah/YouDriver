import { Vehicule } from "./Vehicule";

export interface Offer{
    id: number ;
    adresseArivee: string ;
    adresseDepart: string ;
    dateEnd: string;
    dateStart: string ;
    nmbrPlaces:number ;
    vehicule: Vehicule ;
}