import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* export class Document{
  constructor(
  public id_doc:number,
	public nom_doc:string,
	public description_doc:string,
  ) {}
} */

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }
  public getDocuments(id_et) {
    console.log("test call");
    return this.httpClient.get<Document[]>("http://localhost:8080/etudiants/"+ id_et+"/documents");
  }
  public getDocumentById(id_et,id_doc) {
    return this.httpClient.get<Document>("http://localhost:8080/etudiants/"+ id_et+"/documents/" + id_doc);
  }
  public deleteDocument(document) {
    return this.httpClient.delete<Document>("http://localhost:8080/etudiants/"+ document.etudiant.id_et+"/documents" + "/delete/" + document.id_doc);
  }

  public createDocument(id_et, document) {
    return this.httpClient.post("http://localhost:8080/etudiants/"+ id_et+"/documents"+ "/add", document);
  }
  public editDocument(id_et, document) {
    return this.httpClient.put("http://localhost:8080/etudiants/"+ id_et+"/documents" + "/update/" + document.id_doc, document);
  }
}