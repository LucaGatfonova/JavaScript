const root_product = document.getElementById('catalog')

class Product {
    render()  {
        let htmlCatalog = '';
        product.forEach(({id, name, img, price}) => {
            htmlCatalog += `
                <li>
                    <span>${name}</span>
                    <img src="${img}" alt="photo"/>
                    <span>${price} руб.</span>
                    <button>Добавить в корзину</button>
                </li>
            `;
        });
        const html = `
            <ul>
               ${htmlCatalog}
            </ul>
        `;
        root_product.innerHTML = html;
    }
}

const productsPage = new Product();
productsPage.render();