import { Component, OnInit } from '@angular/core';
import { HttpClientService2 } from '../service/http-client.service2';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DocumentType } from '../../model/DocumentType';

@Component({
  selector: 'app-add-document-type',
  templateUrl: './add-document-type.component.html',
  styleUrls: ['./add-document-type.component.css']
})
export class AddDocumentTypeComponent implements OnInit {

  //document_type: DocumentType [];
  document_type: DocumentType = new DocumentType();
  constructor(
    private httpClientService: HttpClientService2,
    private toastr: ToastrService,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  createDocumentType(): void {
    this.httpClientService.createDocumentType(this.document_type)
      .subscribe(data => {
        this.document_type;
        this.toastr.success('! Document type created successfully', '',
          { timeOut: 2000 });
        this._router.navigate(['/document-type'])
      });
    //this._router.navigate(['/op']);
  };
}
