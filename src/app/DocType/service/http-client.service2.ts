import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService2 {

  constructor(
    private httpClient: HttpClient
  ) {
  }
  public getDocumentTypes() {
    console.log("test call");
    return this.httpClient.get<DocumentType[]>("http://localhost:8080/doctypes");
  }
  public getDocumentTypeById(id_typedoc) {
    return this.httpClient.get<DocumentType>("http://localhost:8080/doctypes/"+ id_typedoc);
  }
  public deleteDocumentType(document_type) {
    return this.httpClient.delete<DocumentType>("http://localhost:8080/doctypes" + "/delete/" + document_type.id_typedoc);
  }

  public createDocumentType(document_type) {
    return this.httpClient.post("http://localhost:8080/doctypes"+ "/add" , document_type);
  }
  public editDocumentType(document_type) {
    return this.httpClient.put("http://localhost:8080/doctypes" + "/update/" + document_type.id_typedoc, document_type);
  }
}