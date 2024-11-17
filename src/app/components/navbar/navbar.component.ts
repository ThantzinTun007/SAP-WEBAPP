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

  setActive(menuItem: string): void {
    this.activeItem = menuItem;
  }
}
