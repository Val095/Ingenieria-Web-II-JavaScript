//declarar las variables
let materia = "Programación";
let corte1 = 4.2;
let corte2 = 3.8;

//calcular el promedio
let promedio = (corte1 + corte2) / 2;

//mensaje usando los template literals
let reporte = `Reporte Académico:
En la materia de ${materia}, el estudiante obtuvo una calificación de ${corte1} en el primer corte 
y ${corte2} en el segundo corte. El promedio actual es ${promedio.toFixed(2)}.`; //toFixed es para mostrar la cantidad de decimales que se deseen

// Mostrar en consola
console.log(reporte);