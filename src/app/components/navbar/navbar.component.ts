import { Component } from '@angular/core';
import { category, menuItems, profile, questions } from './menuItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}

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
      key: 'engDiscrete',
      name: 'Manage Journal Entries',
      route: '/manage',
      icon: '',
      isPin: true,
    },
    {
      key: 'orderBom',
      name: 'Master Data Maintenance',
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
    // {
    //   key: 'sourcing',
    //   name: 'Billing',
    //   route: '#',
    //   icon: 'fa-chevron-down',
    //   isPin: true,
    // },
    {
      key: 'product',
      name: 'Master Data - Product',
      route: '#',
      icon: '',
      isPin: true,
    },
    {
      key: 'engProcess',
      name: 'Credit Management',
      route: '#',
      icon: '',
      isPin: true,
    },
  ];

  filteredMenuItems: any[] = [...this.pinMenuItems];

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

  // for search
  searchMenu(key: string): void {
    const lowerKey = key.toLowerCase();
    this.filteredMenuItems = this.pinMenuItems.filter((item) =>
      item.name.toLowerCase().includes(lowerKey)
    );
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
