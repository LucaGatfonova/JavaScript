class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

const shampoo = new Product(10, "shampoo", 300, 1);
const cream = new Product(30, "cream", 100, 3);
const hairpins = new Product(45, "hairpins", 20, 10);
const lacquer= new Product(88, "lacquer", 80, 2);
const hairbrush = new Product(15, "hairbrush", 150, 10);

function addToBasket(items) {
    return basket = items
};

console.log(addToBasket({shampoo, cream, hairpins}));


