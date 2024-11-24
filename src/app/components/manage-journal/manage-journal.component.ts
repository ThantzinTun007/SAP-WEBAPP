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

  showPopup = false;
  documentData = document;

  showListview = false;
  listData = list;
  listTitle: Title[] = [
    { title: 'Journal Entry', key: 'journalEntry', isCheck: true },
    { title: 'Journal Entry Type', key: 'journalEntryType', isCheck: true },
    { title: 'Company Code', key: 'companyCode', isCheck: true },
    { title: 'Journal Entry Date', key: 'journalEntryDate', isCheck: true },
    { title: 'Posting Date', key: 'postingDate', isCheck: true },
    {
      title: 'Amount in Company Code Currency',
      key: 'amountInCompanyCodeCurrency',
      isCheck: false,
    },
    {
      title: 'Document Header Text',
      key: 'documentHeaderText',
      isCheck: false,
    },
  ];

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
}
