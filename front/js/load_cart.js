function loadCart() {
  // load the stored cart and display all of its items with their details in the HTML document
  let cart = JSON.parse(localStorage.getItem('cart'));
  let cartItemsElement = document.querySelector("#cart__items");

  for (let item of cart) {
    let product = null;
    let quantity = 0;

    for (let key in item) {
      if (key == 'product') {
        product = item[key];
      }
      if (key == 'quantity') {
        quantity = item[key];
      }
      if (key == 'color') {
        color = item[key];
      }
    }

    cartItemsElement.innerHTML += `
      <article class="cart__item" data-id="${product._id}" data-color="${color}">
        <div class="cart__item__img">
          <img src="${product._imageUrl}" alt="Photographie d'un canapé">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>${product._name}</h2>
            <p>${color}</p>
            <p>${product._price}€</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté : </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${quantity}"
               oninput="this.value = Math.abs(this.value) > 1 ? Math.abs(this.value) : 1">
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
      </article>
    `;
  }
}

loadCart();