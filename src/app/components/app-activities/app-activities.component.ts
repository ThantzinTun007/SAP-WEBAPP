import { Component } from '@angular/core';

@Component({
  selector: 'app-app-activities',
  templateUrl: './app-activities.component.html',
  styleUrl: './app-activities.component.css',
})
export class AppActivitiesComponent {
  activeItem: string | null = null;

  setActive(item: string): void {
    this.activeItem = this.activeItem === item ? null : item;
  }
}
