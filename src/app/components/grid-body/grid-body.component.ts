import { Component } from '@angular/core';
import { dosData } from './dos-data';

@Component({
  selector: 'app-grid-body',
  templateUrl: './grid-body.component.html',
  styleUrl: './grid-body.component.css',
})
export class GridBodyComponent {
  dos = dosData;
  categoryDef = 'Tesks';

  activeDos(category: any) {
    this.categoryDef = category;
  }
}
