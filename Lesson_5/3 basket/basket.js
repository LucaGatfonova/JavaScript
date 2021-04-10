const cartItem = {
    render(good) {
        return `<div class="good">
                    <div>Наименование: ${good.name}</div>
                    <div>Цена: ${good.price} рублей</div>
                    <div>Количество: ${good.quantity} шт.</div>
                    <div>Стоимость: ${good.quantity*good.price} рублей</div>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    clearCartBotton: null,
    cartItem,
    goods: [
    {
        id_product: 10,
        name: "shampoo",
        price: 300,
        quantity: 1
    },
    {
        id_product: 30,
        name: "cream",
        price: 100,
        quantity: 3
    },
    {
        id_product: 45,
        name: "hairpins",
        price: 20,
        quantity: 10
    }
],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.clearCartBotton = document.querySelector('.cart-btn');
        this.clearCartBotton.addEventListener('click', () => this.clearCart());
        this.render();
    },
    render() {
        if(this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML ('beforeend', `В корзине ${this.goods.length} товара(ов) на сумму ${this.getCartPrice()} рублей`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};
cart.init();