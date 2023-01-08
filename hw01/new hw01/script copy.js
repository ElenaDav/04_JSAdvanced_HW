const goods = [
  { id: 1, title: 'Shirt', price: 150 },
  { id: 2, title: 'Socks', price: 50 },
  { id: 3, title: 'Jacket', price: 350 },
  { id: 4, title: 'Shoes', price: 250 },
  // { id: 5 },
]
//Добавьте значения по умолчанию для аргументов функции - title = 'title', price = 0
const renderGoodsItem = ({ title = 'title', price = 0 }) => {
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`
}

//Как можно упростить или сократить запись функций? - вместо item.title, item.price оставить только item, а в функйии выше title = 'title', price = 0 добавляем {}, получаем {title = 'title', price = 0}
const renderGoodsList = (list) => {
  document.querySelector('.goods-list').innerHTML = list
    .map((item) => renderGoodsItem(item))
    .join('')
}
renderGoodsList(goods)
