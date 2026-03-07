//declarar el array
let numeros = [15,80,650,50.30,-10];

//mostrar el array
document.write('Elementos: ', numeros);
document.write('<br>')

document.write('Primer elemento: ', numeros[0]);
document.write('<br>');

numeros[0] = 14;
document.write('Elementos: ', numeros);

//ultimo elemento
document.write('<br>');
numeros[4] = -20;
document.write('Elementos: ', numeros);

document.write('<br>');
numeros[2] = 850;
document.write('Elementos: ', numeros);

document.write('<br>-------------------------------<br>');

let frutas = ['manzanas', 'peras', 'naranjas', 'mangos'];
document.write('<br>');
document.write('Frutas: ', frutas);

document.write('<br>');

document.write('Cantidad: ',frutas.length);

document.write('<br>');
document.write('Ultimo elemento: ', numeros[numeros.length - 2]);

document.write('<br>');

document.write('En string: ', numeros.toString());


document.write('<br> ------------------------------------------------------------- <br>');

let arregloA = [4,3,8,1,5];
let arregloB = [10,12,16,0];

nuevoB = arregloB.toString();
document.write('<br>');

let suma = arregloA + nuevoB;
document.write('Suma: ', suma);
