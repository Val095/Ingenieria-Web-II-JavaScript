const $input = document.getElementById('miInput');
const $contador = document.getElementById('contador');

// Foco automático al cargar
window.onload = () => $input.focus();

$input.addEventListener('input', (e) => {
    const longitud = e.target.value.length;
            
    // Actualizar el texto del contador
    $contador.textContent = `Caracteres: ${longitud}`;

    // Validar límite de 20 para el borde rojo
    if (longitud > 20) {
        $input.style.border = "2px solid red";
    } else {
        $input.style.border = "1px solid #ccc";
    }

    // Limpiar si llega a 30 (Pregunta 7)
    if (longitud >= 30) {
        $input.value = "";
        $contador.textContent = "Caracteres: 0";
    }
});