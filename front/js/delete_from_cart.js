let itemElements = document.querySelectorAll('#cart__items article');

for (let item of itemElements) {
  let itemID = item.getAttribute('data-Id');
  let itemDeleteButton = item.querySelector('.deleteItem');

  itemDeleteButton.addEventListener('click', function() {
    console.log(itemID);
    // item.style.display = 'none';

    let cart = JSON.parse(localStorage.getItem('cart'));
    for (let item of cart) {
      if (itemID == item.product._id) {
        cart.splice(cart.indexOf(item), 1);
        console.log("Element removed");
        localStorage.setItem('cart', JSON.stringify(cart));
        break;
      }
    }
  })
}