"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    constructor() {
        this.items = [];
    }
    addToCart(item, amount = 1) {
        for (let i = 0; i < amount; i++)
            this.items.push(item);
    }
    removeFromCart(id) {
        this.items = this.items.filter((item) => item.id !== id);
    }
    checkout(expeditionPrice = 0) {
        const price = this.items.reduce((acc, curr) => {
            return acc + curr.fullPrice();
        }, 0);
        this.items = [];
        return price + expeditionPrice;
    }
}
exports.Cart = Cart;
