import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagesBodyComponent } from './components/pages-body/pages-body.component';
import { BodyComponent } from './components/body/body.component';
import { AppActivitiesComponent } from './components/app-activities/app-activities.component';
import { GridBodyComponent } from './components/grid-body/grid-body.component';
import { DocumentManagementScreenComponent } from './components/document-management-screen/document-management-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesBodyComponent,
    BodyComponent,
    AppActivitiesComponent,
    GridBodyComponent,
    DocumentManagementScreenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
