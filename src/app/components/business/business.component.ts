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
    this.data.splice(index, 1);
  }

  deleteMass(index: number): void {
    this.mass.splice(index, 1);
  }

  deleteMassload(index: number): void {
    this.massLoads.splice(index, 1);
  }

  deletedq(index: number): void {
    this.dq.splice(index, 1);
  }
}
