import { CoursModel } from "./cours.model";

export  interface SemestreModel{
    id?: number;
    numero?: string;
    anneeScolaire?: any;
    cours?:CoursModel |any
}
