import { Component } from '@angular/core';
import { document, list } from './data';
import { SelectListItem, Title } from '../../title';

@Component({
  selector: 'app-manage-journal',
  templateUrl: './manage-journal.component.html',
  styleUrl: './manage-journal.component.css',
})
export class ManageJournalComponent {
  options: string[] = ['All', 'Some', ' Other'];
  defOption: string = 'All';

  showPopup = false;
  documentData = document;

  showListview = false;
  listData = list;

  showCreateform: boolean = false;

  defInput = [
    {
      key: 'entry date',
      text: 'Journal Entry Data :',
      type: 'text',
      icon: 'fa-regular fa-clone',
      isCheck: true,
    },
    {
      key: 'posting',
      text: 'Posting Date :',
      type: 'date',
      icon: '',
      isCheck: true,
    },
    {
      key: 'year',
      text: 'Fiscal Year :',
      type: 'text',
      icon: 'fa-regular fa-clone',
      isCheck: true,
    },
    {
      key: 'perios',
      text: 'Facial Period :',
      type: 'text',
      icon: 'fa-regular fa-clone',
      isCheck: true,
    },
    {
      key: 'create',
      text: 'Journal Entry Created By :',
      type: 'text',
      icon: 'fa-regular fa-clone',
      isCheck: true,
    },
  ];

  listTitle: Title[] = [
    {
      title: 'Journal Entry',
      key: 'journalEntry',
      isCheck: true,
      type: 'text',
    },
    {
      title: 'Journal Entry Type',
      key: 'journalEntryType',
      isCheck: true,
      type: 'text',
    },
    { title: 'Company Code', key: 'companyCode', isCheck: true, type: 'text' },
    {
      title: 'Journal Entry Date',
      key: 'journalEntryDate',
      isCheck: true,
      type: 'date',
    },
    { title: 'Posting Date', key: 'postingDate', isCheck: true, type: 'date' },
    {
      title: 'Amount in Company Code Currency',
      key: 'amountInCompanyCodeCurrency',
      isCheck: false,
      type: 'text',
    },
    {
      title: 'Document Header Text',
      key: 'documentHeaderText',
      isCheck: false,
      type: 'text',
    },
  ];

  formData: { [key: string]: any } = {};

  selectList: SelectListItem[] = [
    {
      journalEntry: { text: '9400000256' },
      journalEntryType: { text: 'RV (Billing doc.transfer)' },
      companyCode: { text: '1000 (AXS Payments Pte. Ltd)' },
      journalEntryDate: { text: '11/22/2024' },
      postingDate: { text: '11/22/2024' },
      amountInCompanyCodeCurrency: { text: 574.43 },
      documentHeaderText: { text: 'SGD' },
    },
  ];

  //for adapt filters
  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  toggleCheck(check: any) {
    check.isCheck = !check.isCheck;
  }

  resetFilters() {
    this.documentData.forEach((item) => (item.isCheck = false));
  }

  applyFilters() {
    this.defInput = this.documentData.filter((item) => item.isCheck);
    this.closePopup();
  }

  // for listview
  openListview() {
    this.showListview = true;
  }

  listCheck(check: any) {
    check.isCheck = !check.isCheck;
  }

  addListview() {
    this.listTitle = this.listData.filter((item) => item.isCheck);
    this.closeListview();
  }

  resetListview() {
    this.listData.forEach((item) => (item.isCheck = false));
  }

  closeListview() {
    this.showListview = false;
  }

  // for createform
  openCreateform() {
    this.showCreateform = !this.showCreateform;
  }

  postData() {
    const newItem = {
      journalEntry: { text: this.formData['journalEntry'] },
      journalEntryType: { text: this.formData['journalEntryType'] },
      companyCode: { text: this.formData['companyCode'] },
      journalEntryDate: { text: this.formData['journalEntryDate'] },
      postingDate: { text: this.formData['postingDate'] },
      amountInCompanyCodeCurrency: {
        text: this.formData['amountInCompanyCodeCurrency'],
      },
      documentHeaderText: { text: this.formData['documentHeaderText'] },
    };
    this.selectList.push(newItem);
    this.clearForm();
    this.closeCreateform();
  }

  deleteData(index: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.selectList.splice(index, 1);
    }
  }

  clearForm() {
    this.formData = {};
  }

  closeCreateform() {
    this.showCreateform = false;
  }
}
