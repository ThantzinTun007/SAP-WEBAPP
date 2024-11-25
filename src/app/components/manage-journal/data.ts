import { text } from 'stream/consumers';

export const document = [
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
  {
    key: 'type',
    text: 'Journal Entry Type :',
    type: 'text',
    icon: 'fa-regular fa-clone',
    isCheck: false,
  },
  {
    key: 'category',
    text: 'Journal Entry Category :',
    type: 'text',
    icon: 'fa-regular fa-clone',
    isCheck: false,
  },
  {
    key: 'absolute',
    text: 'Absolute Exchange Rate',
    type: 'text',
    icon: 'fa-regular fa-clone',
    isCheck: false,
  },
  {
    key: 'additional',
    text: 'Additional Crcy 1',
    type: 'text',
    icon: 'fa-regular fa-clone',
    isCheck: false,
  },
];

export const list = [
  { title: 'Journal Entry', key: 'journalEntry', isCheck: true, type: 'text' },
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
