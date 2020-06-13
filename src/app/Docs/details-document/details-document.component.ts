import { Component, OnInit } from "@angular/core";
import { HttpClientService } from "../service/http-client.service";
import { ActivatedRoute } from "@angular/router";
import { HttpClientService2 } from "src/app/DocType/service/http-client.service2";

@Component({
  selector: "app-details-document",
  templateUrl: "./details-document.component.html",
  styleUrls: ["./details-document.component.css"]
})
export class DetailsDocumentComponent implements OnInit {
  public id_doc: number;
  public id_et: string;
  document = {};

  doc_types: Document[];

  constructor(
    private httpClientService: HttpClientService,
    private httpClientService2: HttpClientService2,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id_et = this.route.snapshot.params['id_et'];
    this.id_doc = this.route.snapshot.params["id_doc"];
    this.httpClientService
      .getDocumentById(this.id_et, this.id_doc)
      .subscribe(data => (this.document = data));
    this.httpClientService2
      .getDocumentTypes()
      .subscribe(response => this.handleSuccessfulResponse(response));
  }
  handleSuccessfulResponse(response) {
    this.doc_types = response;
  }
}
