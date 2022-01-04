let addToCartButton = document.querySelector("#addToCart");

function addToCart(product, quantity, color) {
  let cart = JSON.parse(localStorage.getItem('cart'));

  if (!cart) {
    cart = [];
  }

  let existing = false;

  for (let item of cart) {
    if (JSON.stringify(item['product']) === JSON.stringify(product) && item['color'] === color) {
      item['quantity'] += quantity;
      existing = true;
    }
  }

  if (!existing) {
    cart.push(
      {
        'product': product,
        'quantity': quantity,
        'color': color,
      }
    );
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

addToCartButton.addEventListener('click', function(event) {
  let product = JSON.parse(localStorage.getItem('product'));

  let quantity = document.querySelector('#quantity').value;
  quantity = Number(quantity);
  let color = document.querySelector("#colors").value;

  addToCart(product, quantity, color);

  window.location.href = '.';
});