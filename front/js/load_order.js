let orderId = localStorage.getItem('orderId');
localStorage.removeItem('orderId');

document.getElementById('orderId').innerHTML = orderId;