import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from 'src/app/model/Etudiant';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService3 {

  constructor(
    private httpClient: HttpClient
  ) {
  }
  public getEtudiants() {
    console.log("test call");
    return this.httpClient.get<Etudiant[]>('http://localhost:8080/etudiants');
  }
  public getEtudiantById( id_et) {
    return this.httpClient.get<Etudiant>("http://localhost:8080/etudiants"+ id_et);
  }
  public deleteEtudiant(etudiant) {
    return this.httpClient.delete<Etudiant>("http://localhost:8080/etudiants" + "/delete/" + etudiant.id_et);
  }

  public createEtudiant(etudiant) {
    return this.httpClient.post("http://localhost:8080/etudiants"+ "/add" , etudiant);
  }
  public editEtudiant(etudiant) {
    return this.httpClient.put("http://localhost:8080/etudiants" + "/update/" + etudiant.id_et, etudiant);
  }
}