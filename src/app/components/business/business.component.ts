import { Component } from '@angular/core';
import { DataQuality, dataMaintenance, massLoad, massMaintenance } from './business.data';

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

}
