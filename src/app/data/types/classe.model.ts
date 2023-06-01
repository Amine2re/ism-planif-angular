import {AnneeModel} from "./annee.model";

export interface ClasseModel {
  id?: number;
  libelle?: string;
  annee_scolaire_id?: number;
  anneeScolaire ?: AnneeModel;
  filiere?: string;
  niveau?: string;
}
