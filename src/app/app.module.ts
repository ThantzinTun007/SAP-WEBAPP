import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagesBodyComponent } from './components/pages-body/pages-body.component';
import { BodyComponent } from './components/body/body.component';
import { AppActivitiesComponent } from './components/app-activities/app-activities.component';
import { GridBodyComponent } from './components/grid-body/grid-body.component';

import { LoginComponent } from './components/login/login.component';
import { BusinessComponent } from './components/business/business.component';
import { ExportMasterDataScreenComponent } from './components/export-master-data-screen/export-master-data-screen.component';
import { ManageJournalComponent } from './components/manage-journal/manage-journal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesBodyComponent,
    BodyComponent,
    AppActivitiesComponent,
    GridBodyComponent,
    LoginComponent,
    BusinessComponent,
    ExportMasterDataScreenComponent,
    ManageJournalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
