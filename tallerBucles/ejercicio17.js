// 1. Pedimos el número inicial
let numero = Number(prompt("Introduce un número entero y positivo:"));

// 2. Comprobamos si el dato es correcto
if (numero < 0 || isNaN(numero)) {
    document.write("Error: El dato introducido no es válido. Debe ser un número positivo.");
} else {
    let suma = 0;

    // 3. Bucle para sumar los 100 números siguientes
    // Si metes el 5, sumará 6, 7, 8... hasta completar 100 números.
    for (let i = 1; i <= 100; i++) {
        suma = suma + (numero + i);
    }

    // 4. Mostramos el resultado
    document.write("La suma de los 100 números siguientes a " + numero + " es: " + suma);
}