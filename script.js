let api = "https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo275";
let contenedor = document.getElementById("contenedor");

function mostrarRegistro(data, index) {
  contenedor.innerHTML = JSON.stringify(data[index]);
}

function eliminarRegistro(i) {
  fetch(api + _id, {
    method: "DELETE",
  });
}

fetch(api)
  .then((response) => response.json())
  .then((apiEntero) => {
    for (registro of apiEntero) {
      let botonEliminar = document.createElement("button");
      botonEliminar.addEventListener("click", eliminarRegistro());
    }
    setInterval(mostrarRegistro(apiEntero, indexRegistro), 1500);
  });