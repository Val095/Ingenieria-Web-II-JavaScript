// 1. Pedimos los dos números
let n1 = Number(prompt("Introduce el primer número:"));
let n2 = Number(prompt("Introduce el segundo número:"));

// 2. Validamos que sean distintos
if (n1 === n2) {
    document.write("Los números deben ser distintos.");
} else {
    // 3. Determinamos cuál es el menor y cuál el mayor
    let menor, mayor;
    
    if (n1 < n2) {
        menor = n1;
        mayor = n2;
    } else {
        menor = n2;
        mayor = n1;
    }

    document.write("Incrementando de 7 en 7 desde " + menor + " hasta " + mayor + ":<br>");

    // 4. Bucle que empieza en el menor y suma 7 en cada vuelta
    for (let i = menor; i <= mayor; i = i + 7) {
        document.write(i + "<br>");
    }
}