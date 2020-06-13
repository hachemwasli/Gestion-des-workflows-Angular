import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentComponent } from './Docs/document/document.component';
import { AddDocumentComponent } from './Docs/add-document/add-document.component';
import { EditDocumentComponent } from './Docs/edit-document/edit-document.component';
import { DetailsDocumentComponent } from './Docs/details-document/details-document.component';
import { DocumentTypeComponent } from './DocType/document-type/document-type.component';
import { AddDocumentTypeComponent } from './DocType/add-document-type/add-document-type.component';
import { EditDocumentTypeComponent } from './DocType/edit-document-type/edit-document-type.component';
import { DetailsDocumentTypeComponent } from './DocType/details-document-type/details-document-type.component';
import { EtudiantComponent } from './etudiant/etudiant.component';


import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

const routes: Routes = [
  { path:'', component: EtudiantComponent},
  { path:'etudiant/:id_et/document', component: DocumentComponent},
  { path:'etudiant/:id_et/document/add-document', component: AddDocumentComponent},
  { path:'etudiant/:id_et/document/edit-document/:id_doc', component: EditDocumentComponent},
  { path:'etudiant/:id_et/document/details-document/:id_doc', component: DetailsDocumentComponent},

  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },

  { path:'document-type', component: DocumentTypeComponent},
  { path:'add-document-type', component: AddDocumentTypeComponent},
  { path:'edit-document-type/:id_typedoc', component: EditDocumentTypeComponent},
  { path:'details-document-type/:id_typedoc', component: DetailsDocumentTypeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
