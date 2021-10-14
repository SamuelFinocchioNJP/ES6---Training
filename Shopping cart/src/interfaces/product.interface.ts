import { IPriceableItem } from "./priceable-item.interface";

export interface IProduct<T> extends IPriceableItem {
  additions?: Array<T>;
  name: string;
}
