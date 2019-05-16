function deleteProduct() {
    let product = {
        id: parseInt(document.getElementById("id").value)
    };
    var xhr = new XMLHttpRequest();
    var url = "api/product";
    xhr.open("DELETE", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
        }
    };
    xhr.send(JSON.stringify(product));
    alert('Producto eliminado!');
}