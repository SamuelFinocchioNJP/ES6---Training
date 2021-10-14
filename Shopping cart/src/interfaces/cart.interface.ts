import { IPriceableItem } from "./priceable-item.interface";

export interface ICart<T extends IPriceableItem> {
  items: Array<T>;
  addToCart(item: T, amount: number): void;
  removeFromCart(id: string | number): void;
  checkout(expeditionPrice: number): number;
}
