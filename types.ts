export interface MenuItem {
  id: string;
  title: string;
  description?: string;
  image?: string;
  price: string;
}

export interface DrinkItem {
  id: string;
  title: string;
  hot: string;
  iced: string;
  iceBlended: string;
}

export interface DessertItem {
  id: string;
  title: string;
  options: { option: string; price: string }[];
}