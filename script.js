let api = "https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo275";
let contenedor = document.getElementById("contenedor");

document.addEventListener('DOMContentLoaded', () => {
    setInterval(mostrarRegistro, 1500);
});



//function mostrarRegistro(data, index) {
//  contenedor.innerHTML = JSON.stringify(data[index]);
//}
function mostrarRegistro() {
    contenedor.innerHTML = "";
    fetch(api)
      .then((response) => {
        return response.json();
      })
   .then((data) => {
      console.log(data);
      for (const dato of data) {
        contenedor.innerHTML += `
          <h4>ID generado: ${dato._id}</h4>
          <p>Nombre: ${dato.nombre} ${dato.apellido}</p>
          <p>Grupo: ${dato.grupo}</p>
          <p>Sala: ${dato.sala}</p>`;
      }
    });
  }
  
  

//function eliminarRegistro(i) {
//  fetch(api + _id, {
//    method: "DELETE",
//  });
//}

//fetch(api)
//  .then((response) => response.json())
//  .then((apiEntero) => {
//    for (registro of apiEntero) {
//      let botonEliminar = document.createElement("button");
//      botonEliminar.addEventListener("click", eliminarRegistro());
//    }
//    setInterval(mostrarRegistro(apiEntero, indexRegistro), 1500);
//  });
