let product_url = 'http://localhost:3000/api/products/'

class Product {
  constructor(data) {
    this._id = data._id;
    this._imageUrl = data.imageUrl;
    this._altText = data.altText;
    this._description = data.description;
    this._name = data.name; 
  }

  getHTML() {
    let html = `
      <a href="./product.html?id=${this._id}">
      <article>
        <img src="${this._imageUrl}" alt="${this._altText}" />
        <h3 class="productName">${this._name}</h3>
        <p class="productDescription>${this._description}</p>
      </article>
      </a>
    `
    return html;
  }
}

function load_products(products_json) {
  products = [];

  for (let json of products_json) {
    console.log(json);
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

fetch(product_url)
  .then(function(res) {
    if (res.ok) {
      return res.json(); 
    }
  })
  .then(function(products_json) {
    display_products(load_products(products_json));
  })
  .catch(function(err) {
    console.log(err)
  });


