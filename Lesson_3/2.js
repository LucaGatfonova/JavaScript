const basket = [
    ["шампунь", 300, 1],
    ["крем", 100, 3],
    ["заколки", 20, 10],
];

function countBasketPrice(basket) {
    return basket.reduce(function (totalPrice, cartItem) {
        return totalPrice + cartItem[1]*cartItem[2];
    }, 0);
}
console.log(countBasketPrice(basket))