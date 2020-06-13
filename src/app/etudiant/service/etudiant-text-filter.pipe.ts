import { Pipe, PipeTransform } from '@angular/core';
import {Etudiant} from '../../model/Etudiant';

@Pipe({
  name: 'etudiantTextFilter'
})
export class EtudiantTextFilterPipe implements PipeTransform {

  transform(etudiants: Etudiant[], text: string): Etudiant[] {
    if (text == null || text === "") {
      return etudiants;
    }
    return etudiants.filter(e => e.id_et.toLowerCase().includes(text) || e.nom_et.toLowerCase().includes(text) || e.pnom_et.toLowerCase().includes(text));
  }


}

