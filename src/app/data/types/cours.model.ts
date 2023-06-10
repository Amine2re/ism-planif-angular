import {ProfesseurModel} from "./professeur.model";
import {ModuleModel} from "./module.model";
import {ClasseModel} from "./classe.model";
import { SemestreModel } from "./semestre.model";

export  interface  CoursModel {
    id?: number;
    nombreHeuresGlobal?: number;
    professeur : ProfesseurModel;
    module : ModuleModel;
    classes : ClasseModel[];
    semestre:SemestreModel
}
