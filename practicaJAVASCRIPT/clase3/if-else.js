let nombre, edad;
nombre = prompt('INGRESE SU NOMBRE... ');
edad = prompt('INGRESE SU EDAD... ');

if (edad >= 18){
    document.write("<span class = 'parpadeo'> " + '¡¡¡¡¡¡Bienvenido!!!!!!!!' + "</span>");
} else {
    if (edad<18){
        document.write("<span class = 'mover'>" + 'Eres menor de edad, no eres bienvenido ☠️' + "</span>");
    } else {
        document.write("no has ingresado datos");
    }
}