// 1. Pedimos cuántos números queremos ver
let n = Number(prompt("¿Cuántos términos de Fibonacci quieres ver?"));

let a = 0; // Primer número
let b = 1; // Segundo número

document.write("Los primeros " + n + " términos son:<br>");

for (let i = 1; i <= n; i++) {
    // Mostramos el número actual (a)
    document.write(a + " ");

    // Calculamos el siguiente sumando los dos anteriores
    let siguiente = a + b;
    
    // Actualizamos los valores para la siguiente vuelta
    a = b;
    b = siguiente;
}