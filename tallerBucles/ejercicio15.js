// 1. Pedimos la base (real) y el exponente (entero positivo)
let base = Number(prompt("Introduce la base (número real):"));
let exponenteMaximo = Number(prompt("Introduce el exponente máximo (entero positivo):"));

let resultado = 1;

document.write("Potencias de base " + base + ":<br>");

// 2. El bucle recorre desde 1 hasta el exponente introducido
for (let e = 1; e <= exponenteMaximo; e++) {
    // En cada vuelta, multiplicamos una vez más por la base
    resultado = resultado * base;
    
    // 3. Mostramos la potencia actual
    document.write(base + " elevado a " + e + " es igual a " + resultado + "<br>");
}