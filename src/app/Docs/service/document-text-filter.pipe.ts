import { Pipe, PipeTransform } from '@angular/core';
import {Document} from '../../model/Document';

@Pipe({
  name: 'documentTextFilter'
})
export class DocumentTextFilterPipe implements PipeTransform {

  transform(documents: Document[], text: string): Document[] {
    if (text == null || text === "") {
      return documents;
    }
    return documents.filter(d => d.nom_doc.toLowerCase().includes(text) || d.description_doc.toLowerCase().includes(text));
  }

}

