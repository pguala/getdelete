let api = "https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo275/";

document.addEventListener("DOMContentLoaded", function () {
  //Tomar boton
  const boton = document.getElementById("enviar");
  boton.addEventListener("click", function () {
    //Tomar valores campos
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let grupo = document.getElementById("grupo").value;
    let sala = document.getElementById("sala").value;
    //Crear string a enviar
    let string = JSON.stringify({
      nombre: nombre,
      apellido: apellido,
      grupo: grupo,
      sala: sala,
    });
    console.log(string);
    //POST
    fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: string,
    });
    location.replace("index.html");
  });
});
