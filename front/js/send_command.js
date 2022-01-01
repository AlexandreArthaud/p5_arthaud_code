let formElement = document.querySelector(".cart__order__form");
let formSubmitElement = document.querySelector(".cart__order__form input[type='button']")

function getContactObject() {
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let address = document.querySelector("#address").value;
  let city = document.querySelector("#city").value;
  let email = document.querySelector("#email").value;

  let contact = {
    'firstName': firstName,
    'lastName': lastName,
    'address': address,
    'city': city,
    'email': email,
  };

  return contact;
}

function getCartProductsIDs() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  let cartProductsIDs = [];

  for (let item of cart) {
    cartProductsIDs.push(item.product._id);
  }

  return cartProductsIDs;
}

function createOrder() {
  let requestData = {
    'contact': getContactObject(),
    'products': getCartProductsIDs(),
  }

  let url = 'http://localhost:3000/api/products/order/'
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
  .then(response => response.json())
  .then(data => {
    window.location.href = `confirmation.html?orderId=${data.orderId}`;
  })
  .catch((error) => {
    console.error(error);
  });
}

formSubmitElement.addEventListener('click', function(event) {
  let cart = JSON.parse(localStorage.getItem('cart'));

  if (formElement.checkValidity() && cart.length > 0) {
    createOrder();
  }
  else {
    formElement.reportValidity();
  }
});