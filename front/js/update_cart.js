let itemElements = document.querySelectorAll('#cart__items article');
let totalQuantityElement = document.querySelector('#totalQuantity');
let totalPriceElement = document.querySelector('#totalPrice');
let totalQuantity = 0;
let totalPrice = 0;

let cart = JSON.parse(localStorage.getItem('cart'));

for (let item of itemElements) {
  let itemID = item.getAttribute('data-Id');
  let itemColor = item.getAttribute('data-color');

  let itemDeleteButton = item.querySelector('.deleteItem');
  let itemQuantityInput = item.querySelector('.itemQuantity');

  itemDeleteButton.addEventListener('click', function() {
    item.parentElement.removeChild(item);

    for (let item of cart) {
      if (itemID == item.product._id && itemColor === item.color) {
        cart.splice(cart.indexOf(item), 1);
        console.log("Element removed");
        totalPriceElement.innerHTML = Number(totalPriceElement.innerHTML) - item.product._price * item.quantity;
        totalQuantityElement.innerHTML = Number(totalQuantityElement.innerHTML) - item.quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  })

  totalQuantity += Number(itemQuantityInput.value);
  itemQuantityInput.addEventListener('change', function(event) {
    for (let item of cart) { 
      if (itemID === item.product._id && itemColor === item.color) {
        let diff = event.target.value - item.quantity;
        item.quantity = event.target.value;
        totalQuantityElement.innerHTML = Number(totalQuantityElement.innerHTML) + diff;
        totalPriceElement.innerHTML = Number(totalPriceElement.innerHTML) + diff * item.product._price;
        localStorage.setItem('cart',  JSON.stringify(cart))
        console.log("Quantity updated");
      }
    }
  });

  for (let cartItem of cart) {
    if (itemID == cartItem.product._id && itemColor == cartItem.color) {
      totalPrice += cartItem.product._price * itemQuantityInput.value;
    }
  }
}

totalQuantityElement.innerHTML = totalQuantity;
totalPriceElement.innerHTML = totalPrice;