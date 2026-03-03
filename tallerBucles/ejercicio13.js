let positivos = 0;
let negativos = 0;

for (let i = 1; i <= 10; i++) {
    // Pedimos el número y lo convertimos a valor numérico
    let num = Number(prompt("Introduce el número " + i + " de 10:"));

    if (num >= 0) {
        // Si es 0 o mayor, es positivo
        positivos = positivos + 1;
    } else {
        // Si es menor a 0, es negativo
        negativos = negativos + 1;
    }
}

// Mostramos los resultados finales
document.write("Resultados:<br>");
document.write("Cantidad de positivos: " + positivos + "<br>");
document.write("Cantidad de negativos: " + negativos);