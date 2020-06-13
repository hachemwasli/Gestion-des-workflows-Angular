import { Pipe, PipeTransform } from '@angular/core';
import {DocumentType} from '../../model/DocumentType';

@Pipe({
  name: 'documentTypeTextFilter'
})
export class DocumentTypeTextFilterPipe implements PipeTransform {

  transform(documentTypes: DocumentType[], text: string): DocumentType[] {
    if (text == null || text === "") {
      return documentTypes;
    }
    return documentTypes.filter(dt => dt.code_type.toLowerCase().includes(text) || dt.type_doc.toLowerCase().includes(text));
  }

}

