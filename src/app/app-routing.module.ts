import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesBodyComponent } from './components/pages-body/pages-body.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';
import { BusinessComponent } from './components/business/business.component';
import { ExportMasterDataScreenComponent } from './components/export-master-data-screen/export-master-data-screen.component';
import { ManageJournalComponent } from './components/manage-journal/manage-journal.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: BodyComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'export', component: ExportMasterDataScreenComponent },
  { path: 'manage', component: ManageJournalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
