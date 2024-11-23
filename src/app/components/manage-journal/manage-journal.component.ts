import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-journal',
  templateUrl: './manage-journal.component.html',
  styleUrl: './manage-journal.component.css',
})
export class ManageJournalComponent {
  options: string[] = ['All', 'Some', ' Other'];
  defOption: string = 'All';
}
