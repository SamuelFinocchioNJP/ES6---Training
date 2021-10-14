import { IPriceableItem } from "../interfaces/priceable-item.interface";
import { IProduct } from "../interfaces/product.interface";

export class Product<T extends IPriceableItem> implements IProduct<T> {
  constructor(
    public id: number | string,
    public name: string,
    public price: number,
    public additions: T[] = []
  ) {}

  fullPrice(): number {
    return (
      this.price +
      (this.additions?.reduce(
        (acc: number, curr: IPriceableItem) => acc + curr.price,
        0
      ) ?? 0)
    );
  }
}
