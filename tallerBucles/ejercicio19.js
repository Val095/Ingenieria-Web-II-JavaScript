// 1. Pedimos la altura y el carácter
let alturaTotal = Number(prompt("Introduce la altura de la pirámide:"));
let caracter = prompt("Introduce el carácter para pintar:");

document.write("<pre>"); // Usamos <pre> para que respete los espacios

// 2. Bucle para cada piso (fila)
for (let fila = 1; fila <= alturaTotal; fila++) {
    
    // 3. Bucle para los espacios (para que quede centrada)
    for (let espacios = 1; espacios <= (alturaTotal - fila); espacios++) {
        document.write(" ");
    }

    // 4. Bucle para pintar los caracteres
    // La fórmula (2 * fila - 1) nos da la cantidad impar de caracteres (1, 3, 5...)
    for (let cuentaCaracter = 1; cuentaCaracter <= (2 * fila - 1); cuentaCaracter++) {
        document.write(caracter);
    }

    // 5. Salto de línea para el siguiente piso
    document.write("\n");
}

document.write("</pre>");