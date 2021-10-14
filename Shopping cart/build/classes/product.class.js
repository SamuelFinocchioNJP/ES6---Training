"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price, additions = []) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.additions = additions;
    }
    fullPrice() {
        var _a, _b;
        return (this.price +
            ((_b = (_a = this.additions) === null || _a === void 0 ? void 0 : _a.reduce((acc, curr) => acc + curr.price, 0)) !== null && _b !== void 0 ? _b : 0));
    }
}
exports.Product = Product;
