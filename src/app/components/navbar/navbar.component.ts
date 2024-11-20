import { Component } from '@angular/core';
import { category, menuItems, profile, questions } from './menuItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menu = menuItems;
  question = questions;
  pinMenuItems: any[] = [];
  profile = profile;
  categorys = category;

  activeItem: string = 'home';
  options: string[] = ['All', 'Some', ' Other'];
  defOption: string = 'All';
  showLoginForm: boolean = false;
  isSidebarOpen: boolean = false;
  isQuestion: boolean = false;
  isPinbarOpen: boolean = false;
  isCategoryOpen: boolean = false;

  setActive(menuItem: string): void {
    this.activeItem = menuItem;
  }

  selectOption(option: string) {
    this.defOption = option;
  }

  toggleLoginForm(): void {
    this.showLoginForm = !this.showLoginForm;
  }

  togglePinbar(): void {
    this.isPinbarOpen = !this.isPinbarOpen;
  }

  toggleQuestion(): void {
    this.isQuestion = !this.isQuestion;
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  pinMenu(menu: any) {
    const index = this.pinMenuItems.findIndex((item) => item.key === menu.key);
    menu.isPin = !menu.isPin;
    if (index !== -1) {
      this.pinMenuItems.splice(index, 1);
    } else {
      this.pinMenuItems.push(menu);
    }
  }

  toggleCategory() {
    this.isCategoryOpen = !this.isCategoryOpen;
  }
}
