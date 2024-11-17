import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesBodyComponent } from './components/pages-body/pages-body.component';
import { BodyComponent } from './components/body/body.component';
import { DocumentManagementScreenComponent } from './components/document-management-screen/document-management-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: BodyComponent},
  {path:'document', component: DocumentManagementScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
