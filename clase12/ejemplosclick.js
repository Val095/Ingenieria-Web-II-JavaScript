// 1 Mostrar mensaje
document.getElementById("btn1").addEventListener("click", function() {
  document.getElementById("texto").textContent = "Hola, hiciste clic";
});

// 2 Contador de clics
let contador = 0;
const boton2 = document.getElementById("btn2");
boton2.addEventListener("click", function() {
  contador++;
  boton2.textContent = "Clics: " + contador;
});

// 3 Cambiar color de fondo
document.getElementById("btn3").addEventListener("click", function() {
  document.body.style.backgroundColor = "rgb(242, 213, 119)";
});

// 4 Mostrar alerta
document.getElementById("btn4").addEventListener("click", function() {
  alert("Botón presionado");
});

// 5 Ocultar elemento
document.getElementById("btn5").addEventListener("click", function() {
  document.getElementById("parrafo").style.display = "none";
});