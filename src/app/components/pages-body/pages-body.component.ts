import { Component } from '@angular/core';
import { pagesData } from './pages-data';

@Component({
  selector: 'app-pages-body',
  templateUrl: './pages-body.component.html',
  styleUrl: './pages-body.component.css'
})
export class PagesBodyComponent {
  pageData = pagesData;
  
}
