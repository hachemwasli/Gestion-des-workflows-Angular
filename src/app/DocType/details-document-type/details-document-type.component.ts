import { Component, OnInit } from '@angular/core';
import { HttpClientService2 } from '../service/http-client.service2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-document-type',
  templateUrl: './details-document-type.component.html',
  styleUrls: ['./details-document-type.component.css']
})
export class DetailsDocumentTypeComponent implements OnInit {
  public id_typedoc: number;
  document_type = {};

  constructor(private httpClientService: HttpClientService2,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id_typedoc = this.route.snapshot.params['id_typedoc'];
    this.httpClientService.getDocumentTypeById(this.id_typedoc)
      .subscribe(
        data => this.document_type = data
      )
  }
}
