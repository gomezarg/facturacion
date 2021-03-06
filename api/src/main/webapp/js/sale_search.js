let xhr = new XMLHttpRequest();
let url = "api/sale";

xhr.open("GET", url, true);

xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		let response = JSON.parse(xhr.responseText);
		let sales = response.data;
		
		// Cabeceras de la tabla
		let cabeceras = ["Fecha", "ID del producto", "ID Venta", "Hora", "Nombre del producto", "Descripción"];
		let nombresCampos = ["date", "productId", "id", "time", "productName", "productDescription"];

		let table = document.createElement("table");

		let tr = table.insertRow(-1);              

        for (let i = 0; i < cabeceras.length; i++) {
            let th = document.createElement("th")
            th.innerHTML = cabeceras[i];
            tr.appendChild(th);
		}
		
		for (let i = 0; i < sales.length; i++) {
            tr = table.insertRow(-1);

            for (let j = 0; j < nombresCampos.length; j++) {
                let tabCell = tr.insertCell(-1);
                tabCell.innerHTML = sales[i][nombresCampos[j]];
            }
		}
		
		var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
	}
};

xhr.send();