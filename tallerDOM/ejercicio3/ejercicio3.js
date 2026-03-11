const $img = document.getElementById('miImagen');

// Evento de entrada
$img.addEventListener('mouseenter', () => {
    $img.style.transform = "scale(1.2)";
});
    
// Evento de salida
$img.addEventListener('mouseleave', () => {
    $img.style.transform = "scale(1)";
});