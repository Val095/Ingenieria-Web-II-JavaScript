// 1. Pedimos el número
let n = Number(prompt("Introduce un número para saber si es primo:"));
let esPrimo = true;

// 2. Casos especiales: el 1 no es primo y números menores a 1 tampoco
if (n <= 1) {
    esPrimo = false;
} else {
    // 3. Bucle para buscar divisores desde el 2 hasta n-1
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            // Si el resto es 0, encontramos un divisor. ¡Ya no es primo!
            esPrimo = false;
            break; // Salimos del bucle porque ya no hace falta seguir buscando
        }
    }
}

// 4. Mostramos el resultado final
if (esPrimo) {
    document.write("El número " + n + " ES primo.");
} else {
    document.write("El número " + n + " NO es primo.");
}