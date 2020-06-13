import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClientService2 } from 'src/app/DocType/service/http-client.service2';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
})
export class EditDocumentComponent implements OnInit {
  public id_doc: number;
  public id_et: string;
  document = {};
  doc_types: Document[];
  
  constructor(
    private httpClientService: HttpClientService,
    private httpClientService2: HttpClientService2,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.id_et = this.route.snapshot.params['id_et'];
    this.id_doc = this.route.snapshot.params['id_doc'];
    this.httpClientService.getDocumentById(this.id_et, this.id_doc)
      .subscribe(
        data => this.document = data
      )

      this.httpClientService2
      .getDocumentTypes()
      .subscribe(response => this.handleSuccessfulResponse(response));
  }
  handleSuccessfulResponse(response) {
    this.doc_types = response;
    
    //console.log('doooc',this.document);
  }
  editDocument() {
    console.log('doooc',this.document);
    this.httpClientService.editDocument(this.id_et, this.document)
      .subscribe(data => {
        this.document;
        this.toastr.success('! Document updated successfully', '',
          { timeOut: 2000 });
        this._router.navigate(['/etudiant', this.id_et,'document'])
      });
  }

}
