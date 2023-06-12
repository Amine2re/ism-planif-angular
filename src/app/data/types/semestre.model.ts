import { CoursModel } from "./cours.model";

export  interface SemestreModel{
    id?: number;
    nomSemestre?:string;
    duree?:number;
    numero?: string;
    anneeScolaire?: any;
    cours?:CoursModel |any
}
