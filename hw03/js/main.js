const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this.allProducts = [];
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = data;
//                 console.log(data);
                this.render()
            });
    }
    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();

class Basket {
    constructor(container = '.basket'){
      this.container = container;
      this.goods = [];
      this._clickToBasket();
      this._getContents()
        .then(date => {
          this.goods = [...date.contents]; // у препода так [...date.contents]
        //console.log(date);
          this.render()
        });
    }
  
    _getContents(){
      return fetch(`${API}/getBasket.json`)
        .then(res => res.json())
        .catch(error => {
          console.log(error);
        })
    }
  
    render(){
      const basketBlock = document.querySelector(this.container);
        //console.log(basketBlock);
      for (let product of this.goods) {
        const basketObj = new BasketItem();
        basketBlock.insertAdjacentHTML('beforeend', basketObj.render(product));
        //console.log(basketObj);
      }
    }

    _clickToBasket(){
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('hidden');
        });
    }
    
}

  class BasketItem {
  
    render(product){
      return `                
      <div class="basket-item" data-id="${product.id_product}">
        <div class="basket-header">
          <p class="product-title">${product.product_name}</p>
          <p class="product-quantity">Quantity: ${product.quantity}</p>
          <p class="product-single-price">${product.price} each</p>
        </div>
        <div class="basket-total">
          <p class="basket-total-value">$${product.quantity * product.price}</p> 
          <button class="del-btn-cart" type="button">x</button>
          </div>
      </div>  `
    }
  }
  
  let cart = new Basket();

