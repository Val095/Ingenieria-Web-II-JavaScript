// 1. Pedimos el número inicial
let inicial = Number(prompt("Introduce el número inicial:"));

// 2. Título de las columnas
document.write("<b>Número | Cuadrado | Cubo</b><br>");
document.write("--------------------------<br>");

// 3. El bucle para los 5 números siguientes
for (let i = 0; i < 5; i++) {
    let numeroActual = inicial + i;
    let cuadrado = numeroActual * numeroActual;
    let cubo = numeroActual * numeroActual * numeroActual;

    // 4. Mostramos los resultados en "columnas" usando espacios o guiones
    document.write(numeroActual + " --- " + cuadrado + " --- " + cubo + "<br>");
}