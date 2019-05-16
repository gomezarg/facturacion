function createSale() {
    let sale = {
        
        product: parseInt(document.getElementById("product").value),
        quantity: parseInt(document.getElementById("quantity").value)
    };
    var xhr = new XMLHttpRequest();
    var url = "api/sale";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
        }
    };
    xhr.send(JSON.stringify(sale));
    alert('Venta creada!');
}