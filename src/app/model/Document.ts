import { Etudiant } from './Etudiant';
import { DocumentType } from './DocumentType';

export class Document {

    id_doc: number;
    code_doc:string;
    nom_doc: string;
    description_doc: string;
    doc_type: DocumentType;
    id_et: Etudiant;
  
  }