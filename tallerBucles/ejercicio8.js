// Pedimos el número
let n = prompt("Introduce un número para ver su tabla:");

// titulo
document.write("<h3>Tabla del " + n + "</h3>");

//bucle que imprime línea por línea
for (let i = 1; i <= 10; i++) {
    document.write(n + " x " + i + " = " + (n * i) + "<br>");
}