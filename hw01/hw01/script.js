const products = [
  { id: 1,
    title: 'Ball',
    price: 500,
    img: "img/ball.jpeg"
  } ,
  { id: 2,
    title: 'Boar',
    price: 850,
    img: "img/boar.jpeg"
  } ,
  { id: 3,
    title: 'Puller',
    price: 300,
    img: "img/puller.png"
  } ,
  { id: 4,
    title: 'Set Toys',
    price: 1200,
    img: "img/set-toys.jpeg"
  } ,
  ];

const renderProduct = (product) => {
  return ` <div class="product-item">
    <img src="${product.img}" alt="">
    <h3>${product.title}</h3>
    <p>${product.price}</p>
    <button class="buy-btn">Купить</button>
  </div>`
};

const renderPage = list => {
  document.querySelector('.products').innerHTML = 
    (list.map(product => renderProduct(product))).join('');
};

renderPage(products);