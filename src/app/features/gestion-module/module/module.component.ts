import {Component} from '@angular/core';
import {ModuleModel} from "../../../data/types/module.model";
import {ModulesService} from "../../../data/services/module.service";

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {
  valideReq: any;
  libelle: any;
  modules: ModuleModel[] = [];

  constructor(private modulesService: ModulesService) {
    this.loadModules();
  }

  annuler() {

  }

  ajouterModule() {
    //valider
    if (this.libelle == null || this.libelle == "") {
      this.valideReq = true;
      return;
    }
    this.valideReq = false;
    //ajouter
    this.modulesService.addModule$({libelle: this.libelle}).subscribe((module) => {
      this.modules.push(module);
      this.libelle = "";

    });

  }

  loadModules() {
    this.modulesService.modules$.subscribe((modules) => {
      this.modules = modules;
    });
  }
}
