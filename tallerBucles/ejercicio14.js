// 1. Pedimos los datos
let base = Number(prompt("Introduce la base:"));
let exponente = Number(prompt("Introduce el exponente (entero positivo):"));

// 2. Iniciamos el resultado en 1 (el elemento neutro de la multiplicación)
let resultado = 1;

// 3. El bucle multiplica la base tantas veces como diga el exponente
for (let i = 1; i <= exponente; i++) {
    resultado = resultado * base;
}

// 4. Mostramos el resultado
document.write("El resultado de " + base + " elevado a " + exponente + " es: " + resultado);