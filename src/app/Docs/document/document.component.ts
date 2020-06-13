import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  public id_et: string;
  p: number = 1;
  private pageSize: number = 5;
  documents: Document[];
  searchText: string;
  constructor(
    private httpClientService: HttpClientService,
    private toastr: ToastrService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id_et = this.route.snapshot.params['id_et'];
    this.httpClientService.getDocuments(this.id_et).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.documents = response;
    
    console.log(this.documents);
  }
/* 
  viewDetail() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(DetailsDocumentComponent,dialogConfig);
  } */

  deleteDocument(document): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Are you sure to delete this record ?",
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.httpClientService.deleteDocument(document)
          .subscribe(data => {
            this.documents = this.documents.filter(u => u !== document);
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




