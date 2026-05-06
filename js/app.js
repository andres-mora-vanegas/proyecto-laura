/* esto es una nota */
document.querySelectorAll("h2").forEach(function (perrito) {
  perrito.addEventListener("click", function () {
    console.log("¡Hola, has hecho clic en el título!");
    perrito.style.color = "blue";
    perrito.innerHTML = "¡Has hecho clic en el título!";
    // alert("hola, hiciste click");
  });
});

// document.querySelector("form").addEventListener("submit", function (event) {
//   event.preventDefault();
//   var mensaje = document.querySelector("textarea").value;
//   console.log(mensaje);
// });
