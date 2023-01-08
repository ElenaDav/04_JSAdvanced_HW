class ProductsList {
  constructor(container = '.products') {
    this.container = container;
    this.products = [];
    this.allProducts = [];
    this._fetchProducts();
  }

  _fetchProducts() {
    this.products = [
      { id: 1, title: 'Shirt', price: 150, img: "img/short.jpg" },
      { id: 2, title: 'Socks', price: 50, img: "img/socks.jpg" },
      { id: 3, title: 'Jacket', price: 350, img: "img/jacket.jpg" },
      { id: 4, title: 'Shoes', price: 250, img: "img/shoes.jpg" },
  ];
  }

  render() {
    const block = document.querySelector(this.container);
    for (const product of this.products) {
      const productObj = new ProductItem(product);
      this.allProducts.push(productObj);
      block.insertAdjacentHTML('beforeend', productObj.renderProduct())
    }
  }

  getSum() {
    let s = 0;
    this.products.forEach(item => {
      s += item.price;
    })
    alert(s);
  }
}

class ProductItem {
  constructor(product){
    this.title = product.title;
    this.id = product.id;
    this.price = product.price;
    this.img = product.img;
  }

  renderProduct() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="">
              <h3>${this.title}</h3>
              <p>$${this.price}</p>
              <button class="buy-btn">Buy</button>
            </div>`
  }
}

let list = new ProductsList();
list.render();
list.getSum();


class Basket {

  addToBasket() {}

  deliteFromBasket() {}

  changeBasket() {}

  render() {}
}

class BasketItem {
  render() {}
}