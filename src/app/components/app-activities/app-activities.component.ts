import { Component } from '@angular/core';
import { appsName } from './apps-data';

@Component({
  selector: 'app-app-activities',
  templateUrl: './app-activities.component.html',
  styleUrl: './app-activities.component.css',
})
export class AppActivitiesComponent {
  activeItem: string | null = null;
  // apps = appsName;

  setActive(item: string): void {
    this.activeItem = this.activeItem === item ? null : item;
  }

  selectedCategory = 'Favorites'; // Default tab
  apps = [
    { imgPath: 'assets/icons/manage-product.png', name: 'Manage Product Master Data', category: 'Favorites' },
    { imgPath: 'assets/icons/maintain-pirs.png', name: 'Maintain PIRs', category: 'Favorites' },
    { imgPath: 'assets/icons/schedule-mrp.png', name: 'Schedule MRP Runs', category: 'Recent Activities' },
    // Add more apps here
  ];
  
  // Function to switch categories
  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
