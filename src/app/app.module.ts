import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentComponent } from './Docs/document/document.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDocumentComponent } from './Docs/add-document/add-document.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EditDocumentComponent } from './Docs/edit-document/edit-document.component';
import { DocumentTextFilterPipe } from './Docs/service/document-text-filter.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetailsDocumentComponent } from './Docs/details-document/details-document.component';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { DocumentTypeComponent } from './DocType/document-type/document-type.component';
import { AddDocumentTypeComponent } from './DocType/add-document-type/add-document-type.component';
import { EditDocumentTypeComponent } from './DocType/edit-document-type/edit-document-type.component';
import { DetailsDocumentTypeComponent } from './DocType/details-document-type/details-document-type.component';
import { DocumentTypeTextFilterPipe } from './DocType/service/document-text-filter.pipe';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EtudiantTextFilterPipe } from './etudiant/service/etudiant-text-filter.pipe';

import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';

import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { ScannerComponent } from "./scanner/ScannerComponent";




@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    AddDocumentComponent,
    HeaderComponent,
    FooterComponent,
    EditDocumentComponent,
    DocumentTextFilterPipe,
    ConfirmationDialogComponent,
    DetailsDocumentComponent,
    DocumentTypeComponent,
    AddDocumentTypeComponent,
    EditDocumentTypeComponent,
    DetailsDocumentTypeComponent,
    DocumentTypeTextFilterPipe,
    SidebarComponent,
    EtudiantComponent,
    EtudiantTextFilterPipe,
    LoginComponent,
    LogoutComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,
    ScannerComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    MatDialogModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
