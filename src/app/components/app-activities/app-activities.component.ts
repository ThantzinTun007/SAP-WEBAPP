import { Component } from '@angular/core';
import { appsName } from './apps-data';

@Component({
  selector: 'app-app-activities',
  templateUrl: './app-activities.component.html',
  styleUrl: './app-activities.component.css',
})
export class AppActivitiesComponent {
  apps = appsName;

  selectedCategory = 'Favorites';

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
