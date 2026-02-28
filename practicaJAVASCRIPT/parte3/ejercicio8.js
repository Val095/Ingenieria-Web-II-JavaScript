//variable de usuario, si es Estudiante o Admin
let user = "Estudiante";

//condicional para evaluar la variable y mostrar mensaje de acceso permitido totalmente o solo modo de lectura
if (user === "Admin") {
    console.log("Bienvenido, acceso total concedido");
} else if (user === "Estudiante"){
    console.log("Bienvenido, modo de lectura únicamente permitido");
}