let api = "https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo275/";
let contenedor = document.getElementById("contenedor");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(mostrarRegistro, 1500);
});

function mostrarRegistro() {
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i of data) {
        crearElementos(data);
      }
    });
}

function crearElementos(data) {
  contenedor.innerHTML = "";
  for (let i of data) {
    contenedor.innerHTML +=
      `<b>ID: ${i._id} </b><button type="submit" onclick="eliminarRegistro('${i._id}')"><img src="trash.gif"/></button>
      <button type="submit" onclick="editarRegistro('${i._id}')"><img src="edit.gif"/></button>
       <p>Nombre: ${i.nombre} ${i.apellido}</p>
       <p>Grupo: ${i.grupo}</p>
       <p>Sala: ${i.sala}</p><hr>`;
  }
}

//DELETE
function eliminarRegistro(id) {
  fetch(api + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  alert("Borrado");
}

//PUT
function editarRegistro(id) {
  sessionStorage.setItem("id",id);
  location.replace("editar.html");
}

//fetch(api)
//  .then((response) => response.json())
//  .then((apiEntero) => {
//    for (registro of apiEntero) {
//      let botonEliminar = document.createElement("button");
//      botonEliminar.addEventListener("click", eliminarRegistro());
//    }
//    setInterval(mostrarRegistro(apiEntero, indexRegistro), 1500);
//  });
