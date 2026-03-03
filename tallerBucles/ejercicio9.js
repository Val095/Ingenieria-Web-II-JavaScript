//Pedimos el número (se guarda como texto)
let numero = prompt("Introduce un número para contar sus dígitos:");

//Contamos cuántos caracteres tiene ese texto
let cantidadDigitos = numero.length;

//Lo mostramos en la página
document.write("El número " + numero + " tiene " + cantidadDigitos + " dígitos.");