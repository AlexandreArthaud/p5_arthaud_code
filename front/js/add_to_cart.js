let addToPanelButton = document.querySelector("#addToCart");

addToPanelButton.addEventListener('click', function(event) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart) {
    cart = [];
  }

  let product = JSON.parse(localStorage.getItem('product'));
  let quantity = document.querySelector('#quantity').value;
  quantity = Number(quantity);
  let color = document.querySelector("#colors").value;

  existing = false;
  for (let item of cart) {
    console.log(item['product']);
    console.log(product);

    console.log(item['color']);
    console.log(color);

    if (JSON.stringify(item['product']) === JSON.stringify(product) && item['color'] === color) {
      console.log("duplicated element");
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
    console.log("Element added")
  }

  localStorage.setItem('cart', JSON.stringify(cart));
});