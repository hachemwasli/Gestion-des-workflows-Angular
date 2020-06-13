import { Component, OnInit } from '@angular/core';
import { HttpClientService2 } from '../service/http-client.service2';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-document-type',
  templateUrl: './document-type.component.html',
  styleUrls: ['./document-type.component.css']
})
export class DocumentTypeComponent implements OnInit {
  p: number = 1;
  private pageSize: number = 5;
  document_types: DocumentType[];
  searchText: string;
  constructor(
    private httpClientService: HttpClientService2,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.httpClientService.getDocumentTypes().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.document_types = response;
  }
/* 
  viewDetail() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(DetailsDocumentComponent,dialogConfig);
  } */

  deleteDocument(document_type): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Are you sure to delete this record ?",
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.httpClientService.deleteDocumentType(document_type)
          .subscribe(data => {
            this.document_types = this.document_types.filter(u => u !== document_type);
            this.toastr.warning('! Document deleted successfully', '',
              { timeOut: 2000 });
          })
      }
    });
  }

  //sorting
  key: string = ''; //set default
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}




