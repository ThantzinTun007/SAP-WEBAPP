export interface Title {
  title: string;
  key: keyof SelectListItem;
  isCheck: boolean;
}

export interface SelectListItem {
  [key: string]: { text: string | number };
}
