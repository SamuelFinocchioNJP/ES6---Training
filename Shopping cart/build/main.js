"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cart_class_1 = require("./classes/cart.class");
const product_class_1 = require("./classes/product.class");
const addition1 = {
    name: "Onion",
    id: "1",
    price: 0.5,
};
const addition2 = {
    name: "Ketchup",
    id: "2",
    price: 0.3,
};
const addition3 = {
    name: "French fries",
    id: "3",
    price: 2,
};
const product1 = new product_class_1.Product("1", "Hamburger", 5, [
    addition3,
    addition2,
]);
console.log("ossido", product1.fullPrice());
const product2 = new product_class_1.Product("2", "Hot dot", 4, [
    addition1,
    addition2,
]);
const product3 = new product_class_1.Product("3", "Doritos", 6, [
    addition2,
]);
// Defining a cart
const cart = new cart_class_1.Cart();
// Add to cart
cart.addToCart(product1);
cart.addToCart(product2);
cart.addToCart(product2);
cart.addToCart(product3, 2);
// Remove from cart
cart.removeFromCart("1");
cart.removeFromCart("2");
// Checkout (calculates the price and empties the cart)
console.log(cart);
console.log(cart.checkout());
