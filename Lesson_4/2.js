const basket = {
    goods: [
        {
            id_product: 10,
            name: "шампунь",
            price: 300,
            quantity: 1
        },
        {
            id_product: 30,
            name: "крем",
            price: 100,
            quantity: 3
        },
        {
            id_product: 45,
            name: "заколки",
            price: 20,
            quantity: 10
        }
    ],
    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0);
    },
};
console.log(basket.countBasketPrice())