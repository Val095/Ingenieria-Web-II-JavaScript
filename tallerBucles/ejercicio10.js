let suma = 0;
let contador = 0;
let numero = 0;

// Mientras el número NO sea negativo, seguimos pidiendo
while (numero >= 0) {
    numero = Number(prompt("Introduce un número positivo (o uno negativo para terminar):"));

    // Solo sumamos si el número es positivo
    if (numero >= 0) {
        suma = suma + numero;
        contador = contador + 1;
    }
}

// Calculamos la media solo si se introdujo al menos un número
if (contador > 0) {
    let media = suma / contador;
    document.write("Has introducido " + contador + " números.<br>");
    document.write("La media total es: " + media);
} else {
    document.write("No introdujiste ningún número positivo.");
}