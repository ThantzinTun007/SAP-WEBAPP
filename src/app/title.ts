export interface Title {
  title: string;
  key: keyof SelectListItem;
  isCheck: boolean;
  type: string;
}

export interface SelectListItem {
  [key: string]: { text: string | number };
}
