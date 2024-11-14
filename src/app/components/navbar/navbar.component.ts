import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  activeItem: string | null = null;

  setActive(item: string): void {
    this.activeItem = this.activeItem === item ? null: item;
  }
}
