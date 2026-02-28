//variable booleana que dice si la plataforma está en mantenimiento o no
let mantenimiento = true;

//condicional para evaluar la variable, si es verdadera se muestra el mensaje de mantenimiento
//pero si es falsa se muestra el mensaje de qu ela plataforma está habilitada
if (mantenimiento === true){
    console.log("Alerta: plataforma en mantenimiento");
    console.log("Las funciones de escritura en la base de datos están temporalmente deshabilitadas");
    
} else {
    console.log("Página habilitada. Funciones de escritura disponibles");
}