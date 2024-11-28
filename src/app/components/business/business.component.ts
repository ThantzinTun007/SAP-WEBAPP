import { Component } from '@angular/core';
import {
  DataQuality,
  dataMaintenance,
  massLoad,
  massMaintenance,
} from './business.data';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrl: './business.component.css',
})
export class BusinessComponent {
  data = dataMaintenance;
  mass = massMaintenance;
  massLoads = massLoad;
  dq = DataQuality;

  deleteData(index: number): void {
    if (confirm('Are you sure you want to delete this card?')) {
      this.data.splice(index, 1);
    }
  }

  deleteMass(index: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.mass.splice(index, 1);
    }
  }

  deleteMassload(index: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.massLoads.splice(index, 1);
    }
  }

  deletedq(index: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.dq.splice(index, 1);
    }
  }
}
