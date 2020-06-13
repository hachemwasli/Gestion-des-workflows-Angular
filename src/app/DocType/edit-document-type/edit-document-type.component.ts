import { Component, OnInit } from '@angular/core';
import { HttpClientService2 } from '../service/http-client.service2';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-document-type',
  templateUrl: './edit-document-type.component.html',
  styleUrls: ['./edit-document-type.component.css']
})
export class EditDocumentTypeComponent implements OnInit {
  public id_typedoc: number;
  document_type = {};
  constructor(
    private httpClientService: HttpClientService2,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.id_typedoc = this.route.snapshot.params['id_typedoc'];
    this.httpClientService.getDocumentTypeById(this.id_typedoc)
      .subscribe(
        data => this.document_type = data
      )

  }
  editDocumentType() {
    this.httpClientService.editDocumentType(this.document_type)
      .subscribe(data => {
        this.document_type;
        this.toastr.success('! Document Type updated successfully', '',
          { timeOut: 2000 });
        this._router.navigate(['/document-type'])
      });
  }

}
