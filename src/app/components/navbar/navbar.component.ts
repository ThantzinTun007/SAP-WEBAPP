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
  pinMenuItems: any[] = [
    {
      key: 'master',
      name: 'Master Data - Business',
      route: '/business',
      icon: '',
      isPin: true,
    },
    {
      key: 'product',
      name: 'Master Data - Product',
      route: '#',
      icon: '',
      isPin: true,
    },
    {
      key: 'orderBom',
      name: 'Master Data Maintanane',
      route: '#',
      icon: '',
      isPin: true,
    },
    {
      key: 'purchasing',
      name: 'Service Management',
      route: '#',
      icon: '',
      isPin: true,
    },
    {
      key: 'sourcing',
      name: 'Billing',
      route: '#',
      icon: 'fa-chevron-down',
      isPin: true,
    },
    {
      key: 'engDiscrete',
      name: 'Accounts Receivable',
      route: '#',
      icon: '',
      isPin: true,
    },
    {
      key: 'engProcess',
      name: 'Cridit Management',
      route: '#',
      icon: '',
      isPin: true,
    },
  ];
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
