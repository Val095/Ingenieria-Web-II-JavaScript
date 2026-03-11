const $cambiar = document.querySelector('h2');
    $cambiar.textContent = 'Jimena Sofía Valiente Blandón';
    $cambiar.style.color = "blue";
    $cambiar.style.textAlign = 'center';
    $cambiar.style.backgroundColor = "yellow";

    //respuesta a preguntas
    console.log($cambiar);
    console.log(getComputedStyle($cambiar));
    $cambiar.style.color = 'inherit';