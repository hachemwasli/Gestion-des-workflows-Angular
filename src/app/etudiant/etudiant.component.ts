import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { Etudiant } from '../model/Etudiant';
import { HttpClientService3 } from './service/http-client.service3';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  public id_et: String;
  document = {};
  p: number = 1;
  private pageSize: number = 5;
  etudiants: Etudiant[];
  searchText: string;
  constructor(
    private httpClientService: HttpClientService3,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.httpClientService.getEtudiants().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.etudiants = response;
  }
/* 
  viewDetail() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(DetailsDocumentComponent,dialogConfig);
  } */

  deleteDocument(etudiant): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Are you sure to delete this record ?",
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.httpClientService.deleteEtudiant(etudiant)
          .subscribe(data => {
            this.etudiants = this.etudiants.filter(u => u !== etudiant);
            this.toastr.warning('! Etudiant deleted successfully', '',
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

