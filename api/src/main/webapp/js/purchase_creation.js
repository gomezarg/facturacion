function createPurchase() {
    let purchase = {
        
        product: parseInt(document.getElementById("product").value),
        quantity: parseInt(document.getElementById("quantity").value)
    };
    var xhr = new XMLHttpRequest();
    var url = "api/purchase";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
        }
    };
    xhr.send(JSON.stringify(purchase));
    alert('Compra creada!');
}