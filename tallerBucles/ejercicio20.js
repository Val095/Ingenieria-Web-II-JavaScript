let alturaTotal = Number(prompt("Introduce la altura de la pirámide hueca:"));
let caracter = prompt("Introduce el carácter:");

document.write("<pre>");

for (let fila = 1; fila <= alturaTotal; fila++) {
    
    // 1. Espacios para centrar
    for (let espacios = 1; espacios <= (alturaTotal - fila); espacios++) {
        document.write(" ");
    }

    // 2. Pintar caracteres o huecos
    let totalCaracteres = (2 * fila - 1);
    for (let j = 1; j <= totalCaracteres; j++) {
        // Condición: Pintar si es el primero, el último o la última fila (base)
        if (j === 1 || j === totalCaracteres || fila === alturaTotal) {
            document.write(caracter);
        } else {
            document.write(" ");
        }
    }

    document.write("\n");
}

document.write("</pre>");