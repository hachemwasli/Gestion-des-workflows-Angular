import { Component, OnInit } from "@angular/core";
import { HttpClientService } from "../service/http-client.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Document } from "../../model/Document";
import { HttpClientService2 } from "../../DocType/service/http-client.service2";
@Component({
  selector: "app-add-document",
  templateUrl: "./add-document.component.html",
  styleUrls: ["./add-document.component.css"]
})
export class AddDocumentComponent implements OnInit {
  public id_et: string;
  document: Document = new Document();
  doc_types: Document[];

  constructor(
    private httpClientService: HttpClientService,
    private httpClientService2: HttpClientService2,
    private toastr: ToastrService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id_et = this.route.snapshot.params['id_et'];
    this.httpClientService2
      .getDocumentTypes()
      .subscribe(response => this.handleSuccessfulResponse(response));
  }
  handleSuccessfulResponse(response) {
    this.doc_types = response;
  }

  createDocument(): void {
    console.log('doooc',this.document);
    this.httpClientService.createDocument(this.id_et, this.document).subscribe(data => {
      this.document;
      this.toastr.success("! Document created successfully", "", {
        timeOut: 2000
      });
      this._router.navigate(['/etudiant', this.id_et,'document']);
    });
    //this._router.navigate(['/op']);
  }
}
