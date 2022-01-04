function displayOrderId() {
    // get 'orderId' param from URL and diplay it in the HTML
    let current_url = new URL(window.location.href);
    let orderId = current_url.searchParams.get('orderId');
    document.getElementById('orderId').innerHTML = orderId;
}

displayOrderId();