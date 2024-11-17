import { Component } from '@angular/core';
import { menuItems } from './menuItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menu = menuItems;
  activeItem: string = 'home';
  options: string[] = ['All', 'Some', ' Other'];
  defOption: string = 'All';
  showLoginForm: boolean = false;
  isSidebarOpen: boolean = false;

  setActive(menuItem: string): void {
    this.activeItem = menuItem;
  }

  selectOption(option: string) {
    this.defOption = option;
  }

  toggleLoginForm(): void {
    this.showLoginForm = !this.showLoginForm;
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
