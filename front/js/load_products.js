function instantiate_products(products_json) {
  products = [];

  for (let json of products_json) {
    let product = new Product(json);
    products.push(product);
  }

  return products;
}

function display_products(products) {
  let itemsElement = document.querySelector('#items');
  for (let product of products) {
    itemsElement.innerHTML += product.getHTML();
  }
}

function loadProducts() { 
  let products_url = 'http://localhost:3000/api/products/'
  fetch(products_url)
    .then(function(res) {
      if (res.ok) {
        return res.json(); 
      }
    })
    .then(function(products_json) {
      display_products(instantiate_products(products_json));
    })
    .catch(function(err) {
      console.log(err)
    });
}

loadProducts();