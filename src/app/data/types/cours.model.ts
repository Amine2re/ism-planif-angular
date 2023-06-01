import {ProfesseurModel} from "./professeur.model";
import {ModuleModel} from "./module.model";
import {ClasseModel} from "./classe.model";

export  interface  CoursModel {
    id?: number;
    nombreHeureGlobal?: number;
    professeur : ProfesseurModel;
    module : ModuleModel;
    classes : ClasseModel[];
}
