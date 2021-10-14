import { IAddition } from "../interfaces/addition.interface";
import { ICart } from "../interfaces/cart.interface";
import { Product } from "./product.class";

export class Cart<T extends Product<IAddition>> implements ICart<T> {
  items: T[];

  constructor() {
    this.items = [];
  }

  addToCart(item: T, amount = 1): void {
    for (let i = 0; i < amount; i++) this.items.push(item);
  }

  removeFromCart(id: string | number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  checkout(expeditionPrice: number = 0): number {
    const price = this.items.reduce((acc, curr: Product<IAddition>) => {
      return acc + curr.fullPrice();
    }, 0);

    this.items = [];
    return price + expeditionPrice;
  }
}
