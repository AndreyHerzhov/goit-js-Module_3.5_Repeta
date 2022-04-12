

// { name: 'Apple', price: 50 }
// { name: 'Tomato', price: 70 }
// { name: 'Lemon', price: 60 }
// { name: 'Strawberry', price: 110 }


const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {},
    remove(productName) {},
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},


}


cart.add({ name: 'Apple', price: 50 });
cart.add({ name: 'Tomato', price: 70 });
cart.add({ name: 'Lemon', price: 60});
cart.add({ name: 'Strawberry', price: 110 });