import { Component } from '@angular/core';
import { appsName } from './apps-data';

@Component({
  selector: 'app-app-activities',
  templateUrl: './app-activities.component.html',
  styleUrl: './app-activities.component.css',
})
export class AppActivitiesComponent {
  activeItem: string | null = null;
  apps = appsName;

  setActive(item: string): void {
    this.activeItem = this.activeItem === item ? null : item;
  }
}
