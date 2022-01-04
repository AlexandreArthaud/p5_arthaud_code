function displayProduct(product) {
  // display various product fields in HTML document
  let imageElement = document.querySelector('.item__img')
  imageElement.innerHTML += product.getImgHTML();

  let titleElement = document.querySelector("#title");
  titleElement.innerHTML += product.getName();

  let priceElement = document.querySelector("#price");
  priceElement.innerHTML += product.getPrice();

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML += product.getDescription();

  let colorElement = document.querySelector('#colors')
  colorElement.innerHTML += product.getColorOptionsHTML();
}

function loadProduct() {
  // get product from api, display it as HTML and store it in localItem
  let current_url = new URL(window.location.href);
  let productId = current_url.searchParams.get('id');
  let product_url = `http://localhost:3000/api/products/${productId}`;

  fetch(product_url)
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(product_json) {
      let product = new Product(product_json);
      localStorage.setItem('product', JSON.stringify(product));
      displayProduct(product);
    })
    .catch(function(err) {
      console.log(err);
    })
}

loadProduct()