//variables que contienen la clave, la cantidad de intentos y el maximo de intentos que se pueden hacer
const CLAVE_SECRETA = "2505";
let intentosRealizados = 0;
const MAX_INTENTOS = 4;

// Capturamos los elementos primero
const input = document.getElementById("inputClave");
const boton = document.getElementById("btnEnviar");
const historial = document.getElementById("historial");

//Acción del botón cuando se hace click
boton.addEventListener("click", function() {
    let combinacion = input.value;
    intentosRealizados = intentosRealizados + 1;

    //condicional para mostrar el mesaje de que la caja se ha abierto en color verde
    if (combinacion === CLAVE_SECRETA) {
        
        historial.innerHTML = historial.innerHTML + 
            "<p style='color: green;'>✔ Intento " + intentosRealizados + ": ¡La caja fuerte se ha abierto!</p>";
        
        input.disabled = true;
        boton.disabled = true;

        //si se ingresa una clave incorrecta se muestra un mensaje en rojo
    } else {
        historial.innerHTML = historial.innerHTML + 
            "<p style='color: red;'>✘ Intento " + intentosRealizados + ": Combinación incorrecta.</p>";

        //condicional para que si se llega al máximo de intentos se bloquea la caja fuerte
        if (intentosRealizados >= MAX_INTENTOS) {
            historial.innerHTML = historial.innerHTML + 
                "<p style='font-weight: bold; color: darkred;'>🚫 Caja Bloqueada por seguridad.</p>";
            
            input.disabled = true;
            boton.disabled = true;
        }
    }
    //obtener o cambiar el texto
    input.value = ""; 

    //activar el cursor para escribir
    input.focus();
});